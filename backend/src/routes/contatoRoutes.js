const express = require('express');
const { listar, criar, atualizar, deletar } = require('../controllers/contatoController');

const router = express.Router();

router.get('/', listar);
router.post('/', criar);
router.put('/:id', atualizar);
router.delete('/:id', deletar);

module.exports = router;