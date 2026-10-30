require('dotenv').config();
const express = require('express');
const cors = require('cors');
const conectarDB = require('./src/config/db');
const contatoRoutes = require('./src/routes/contatoRoutes');

const app = express();

app.use(cors());
// limite maior porque a foto é enviada em base64
app.use(express.json({ limit: '10mb' }));

app.use('/contatos', contatoRoutes);

app.get('/', (req, res) => res.json({ message: 'API Agenda de Contatos' }));

const PORT = process.env.PORT || 3000;

conectarDB().then(() => {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});