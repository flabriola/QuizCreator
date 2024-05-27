const { fromPath } = require('pdf2pic');
const { PDFDocument } = require('pdf-lib');
const path = require('path');
const fs = require('fs');

const getPdfPageCount = async (pdfPath) => {
    const fileBuffer = fs.readFileSync(pdfPath);
    const pdfDoc = await PDFDocument.load(fileBuffer);
    return pdfDoc.getPageCount();
};

const convertPDF = async (pdfPath) => {
    const outputDir = path.join(__dirname, 'images');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }
    const options = {
        density: 100,
        saveFilename: 'image',
        savePath: outputDir,
        format: 'jpg',
        width: 600,
        height: 800,
    };
    const storeAsImage = fromPath(pdfPath, options);

    try {
        console.log(`Starting PDF conversion for ${pdfPath}`);
        const totalPages = await getPdfPageCount(pdfPath);
        console.log(`Total pages to convert: ${totalPages}`);

        const conversionPromises = [];
        for (let i = 1; i <= totalPages; i++) {
            console.log(`Converting page ${i}`);
            conversionPromises.push(storeAsImage(i));
        }

        const pages = await Promise.all(conversionPromises);
        const files = pages.map((page, index) => path.join(outputDir, `image.${index + 1}.jpg`));
        console.log(`PDF conversion output files: ${files}`);
        return files;
    } catch (error) {
        console.error('Error converting PDF:', error);
        throw error;
    }
};

module.exports = { convertPDF };
