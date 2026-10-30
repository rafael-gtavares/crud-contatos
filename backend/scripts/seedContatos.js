require('dotenv').config({ path: '../.env' });

const mongoose = require('mongoose');
const Contato = require('../src/models/Contato');

const contatos = [
  { nome: 'Ana', sobrenome: 'Silva', telefone: '(21) 99999-0001', email: 'ana.silva@email.com' },
  { nome: 'Bruno', sobrenome: 'Costa', telefone: '(21) 99999-0002', email: 'bruno.costa@email.com' },
  { nome: 'Carla', sobrenome: 'Souza', telefone: '(21) 99999-0003', email: 'carla.souza@email.com' },
  { nome: 'Daniel', sobrenome: 'Oliveira', telefone: '(21) 99999-0004', email: 'daniel.oliveira@email.com' },
  { nome: 'Eduarda', sobrenome: 'Lima', telefone: '(21) 99999-0005', email: 'eduarda.lima@email.com' },
  { nome: 'Felipe', sobrenome: 'Santos', telefone: '(21) 99999-0006', email: 'felipe.santos@email.com' },
  { nome: 'Gabriela', sobrenome: 'Pereira', telefone: '(21) 99999-0007', email: 'gabriela.pereira@email.com' },
  { nome: 'Henrique', sobrenome: 'Almeida', telefone: '(21) 99999-0008', email: 'henrique.almeida@email.com' },
];

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Contato.deleteMany();
    await Contato.insertMany(contatos);
    console.log(`${contatos.length} contatos inseridos`);
  } catch (error) {
    console.error('Erro no seed:', error.message);
  } finally {
    await mongoose.disconnect();
  }
};

seed();