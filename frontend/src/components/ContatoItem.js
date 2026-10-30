import { View, Text, TouchableOpacity } from 'react-native';
import Avatar from './Avatar';
import styles from '../styles/item';

export default function ContatoItem({ contato, onEditar, onExcluir }) {
  return (
    <View style={styles.card}>
      <Avatar foto={contato.foto} nome={contato.nome} sobrenome={contato.sobrenome} />

      <View style={styles.info}>
        <Text style={styles.nome}>
          {contato.nome} {contato.sobrenome}
        </Text>
        <Text style={styles.detalhe}>{contato.telefone}</Text>
        <Text style={styles.detalhe}>{contato.email}</Text>
      </View>

      <View style={styles.acoes}>
        <TouchableOpacity style={styles.botaoEditar} onPress={() => onEditar(contato)}>
          <Text style={styles.botaoEditarTexto}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoExcluir} onPress={() => onExcluir(contato)}>
          <Text style={styles.botaoExcluirTexto}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}