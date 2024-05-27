const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const { convertPDF } = require('./pdfConverter');
const { uploadToImgur } = require('./imgurUploader');

const app = express();
const port = 5000;

// Enable CORS
app.use(cors());

// Set up multer for file uploads
const upload = multer({ dest: 'uploads/' });

// Handle file upload and conversion
app.post('/upload', upload.single('file'), async (req, res) => {
    const pdfPath = req.file.path;
    try {
        console.log(`Received file: ${pdfPath}`);
        const imagePaths = await convertPDF(pdfPath);
        console.log(`Converted PDF to images: ${imagePaths}`);

        // Verify file existence
        const existingFiles = imagePaths.filter(file => {
            const exists = fs.existsSync(file);
            console.log(`File ${file} exists: ${exists}`);
            return exists;
        });

        if (existingFiles.length === 0) {
            throw new Error('No files were created during PDF conversion.');
        }

        const imageUrls = await Promise.all(existingFiles.map(uploadToImgur));
        console.log(`Uploaded images to Imgur: ${imageUrls}`);
        res.json({ urls: imageUrls });
    } catch (error) {
        console.error('Error during upload process:', error);
        res.status(500).send('An error occurred');
    } finally {
        // Clean up uploaded PDF file
        fs.unlinkSync(pdfPath);
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
