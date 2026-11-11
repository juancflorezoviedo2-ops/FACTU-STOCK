const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Para recibir datos en JSON
app.use(express.json());

// Servir el frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Ruta de prueba - para saber que el servidor vive
app.get('/api/salud', (req, res) => {
  res.json({ 
    mensaje: 'FACTU-STOCK funcionando perfecto',
    estado: 'OK',
    fecha: new Date().toLocaleString('es-CO')
  });
});

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ FACTU-STOCK corriendo en http://localhost:${PORT}`);
});