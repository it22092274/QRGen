const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const qrcode = require('qrcode');

const PORT = 3000;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/generateQR', generateQR);

async function generateQR(req, res) {
    const { url } = req.body;
    console.log(url);
    try {
        const qrCodeUrl = await generateQRCode(url);
        console.log("done");
        res.json({ qrCodeUrl });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to generate QR code' });
    }
}

// Function to generate QR code
async function generateQRCode(url) {
    try {
        console.log("working");
        const qrCodeUrl = await qrcode.toDataURL(url);
        return qrCodeUrl;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to generate QR code');
    }
}

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
