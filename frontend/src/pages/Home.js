import { useCallback, useEffect, useState } from 'react';
import { View, Text, FlatList, Alert } from 'react-native';
import ContatoForm from '../components/ContatoForm';
import ContatoItem from '../components/ContatoItem';
import ModalConfirmacao from '../components/ModalConfirmacao';
import { listarContatos, deletarContato } from '../api/contatos';
import styles from '../styles/home';

export default function Home() {
  const [contatos, setContatos] = useState([]);
  const [contatoEditando, setContatoEditando] = useState(null);
  const [contatoExcluindo, setContatoExcluindo] = useState(null);

  const carregarContatos = useCallback(async () => {
    try {
      const dados = await listarContatos();
      setContatos(dados);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar os contatos. Verifique a conexão com a API.');
    }
  }, []);

  useEffect(() => {
    carregarContatos();
  }, [carregarContatos]);

  const aoSalvar = () => {
    setContatoEditando(null);
    carregarContatos();
  };

  const confirmarExclusao = async () => {
    try {
      await deletarContato(contatoExcluindo._id);
      if (contatoEditando?._id === contatoExcluindo._id) setContatoEditando(null);
      setContatoExcluindo(null);
      carregarContatos();
    } catch (error) {
      setContatoExcluindo(null);
      Alert.alert('Erro', 'Não foi possível excluir o contato.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Agenda de Contatos</Text>
        <Text style={styles.headerSubtitle}>{contatos.length} contato(s) cadastrado(s)</Text>
      </View>

      {/* Metade de cima: formulário */}
      <View style={styles.metade}>
        <ContatoForm
          contatoEditando={contatoEditando}
          onSalvo={aoSalvar}
          onCancelar={() => setContatoEditando(null)}
        />
      </View>

      <View style={styles.divisor} />

      {/* Metade de baixo: lista */}
      <View style={styles.metade}>
        <View style={styles.listaHeader}>
          <Text style={styles.listaTitulo}>Meus contatos</Text>
        </View>

        <FlatList
          data={contatos}
          keyExtractor={(item) => item._id}
          contentContainerStyle={styles.listaContent}
          ListEmptyComponent={<Text style={styles.vazio}>Nenhum contato cadastrado.</Text>}
          renderItem={({ item }) => (
            <ContatoItem
              contato={item}
              onEditar={setContatoEditando}
              onExcluir={setContatoExcluindo}
            />
          )}
        />
      </View>

      <ModalConfirmacao
        visivel={!!contatoExcluindo}
        contato={contatoExcluindo}
        onCancelar={() => setContatoExcluindo(null)}
        onConfirmar={confirmarExclusao}
      />
    </View>
  );
}