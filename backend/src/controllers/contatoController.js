const Contato = require('../models/Contato');

const listar = async (req, res) => {
  try {
    const contatos = await Contato.find().sort({ nome: 1, sobrenome: 1 });
    res.json(contatos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const criar = async (req, res) => {
  try {
    const contato = await Contato.create(req.body);
    res.status(201).json(contato);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const atualizar = async (req, res) => {
  try {
    const contato = await Contato.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!contato) return res.status(404).json({ message: 'Contato não encontrado' });
    res.json(contato);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deletar = async (req, res) => {
  try {
    const contato = await Contato.findByIdAndDelete(req.params.id);
    if (!contato) return res.status(404).json({ message: 'Contato não encontrado' });
    res.json({ message: 'Contato removido com sucesso' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { listar, criar, atualizar, deletar };