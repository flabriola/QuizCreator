const axios = require('axios');
const fs = require('fs');
require('dotenv').config();

const uploadToImgur = async (imagePath) => {
    try {
        const image = fs.readFileSync(imagePath, { encoding: 'base64' });
        const response = await axios.post('https://api.imgur.com/3/image', {
            image: image,
            type: 'base64',
        }, {
            headers: {
                Authorization: `Client-ID ${process.env.IMGUR_CLIENT_ID}`,
            },
        });

        if (response.data.success) {
            console.log(`Uploaded image to Imgur: ${response.data.data.link}`);
            return response.data.data.link;
        } else {
            throw new Error('Imgur upload failed');
        }
    } catch (error) {
        console.error('Error uploading to Imgur:', error);
        throw error;
    }
};

module.exports = { uploadToImgur };
