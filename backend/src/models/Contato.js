const mongoose = require('mongoose');

const contatoSchema = new mongoose.Schema(
  {
    foto: { type: String, default: '' },
    nome: { type: String, required: [true, 'Nome é obrigatório'], trim: true },
    sobrenome: { type: String, required: [true, 'Sobrenome é obrigatório'], trim: true },
    telefone: { type: String, required: [true, 'Telefone é obrigatório'], trim: true },
    email: { type: String, required: [true, 'Email é obrigatório'], trim: true, lowercase: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Contato', contatoSchema);