const express = require('express');
const cors = require('cors'); // cors paketini dahil edin

const app = express();
app.use(express.static('public'));


// CORS middleware'ini ekleyin
app.use(cors({
    origin: 'http://localhost:3000', // İzin verilen köken (React uygulamanızın kökeni)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // İzin verilen HTTP yöntemleri
    optionsSuccessStatus: 204, // Başarılı önceden uygulanmış istek durumu
  }));

// Diğer sunucu ayarları ve rota tanımları

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
