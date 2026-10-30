import api from './axios';

export const listarContatos = async () => {
  const { data } = await api.get('/contatos');
  return data;
};

export const criarContato = async (contato) => {
  const { data } = await api.post('/contatos', contato);
  return data;
};

export const atualizarContato = async (id, contato) => {
  const { data } = await api.put(`/contatos/${id}`, contato);
  return data;
};

export const deletarContato = async (id) => {
  const { data } = await api.delete(`/contatos/${id}`);
  return data;
};