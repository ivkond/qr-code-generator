const express = require('express');
const QRCode = require('qrcode');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

.env.PORT ||app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/generate', async (req, res) => {
  const { text, options } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'Text is required' });
  }

  const qrOptions = {
    width: options?.width || 300,
    margin: options?.margin || 2,
    color: {
      dark: options?.color?.dark || '#000000',
      light: options?.color?.light || '#FFFFFF'
    }
  };

  try {
    const dataUrl = await QRCode.toDataURL(text, qrOptions);
    res.json({ qrCode: dataUrl });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`QR Code Generator running on port ${PORT}`);
});
