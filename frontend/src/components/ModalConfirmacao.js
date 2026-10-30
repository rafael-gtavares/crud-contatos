import { Modal, View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/modal';

export default function ModalConfirmacao({ visivel, contato, onCancelar, onConfirmar }) {
  return (
    <Modal visible={visivel} transparent animationType="fade" onRequestClose={onCancelar}>
      <View style={styles.overlay}>
        <View style={styles.caixa}>
          <Text style={styles.titulo}>Excluir contato</Text>
          <Text style={styles.mensagem}>
            Tem certeza que deseja excluir {contato?.nome} {contato?.sobrenome}? Essa ação não
            pode ser desfeita.
          </Text>

          <View style={styles.botoes}>
            <TouchableOpacity style={styles.botaoCancelar} onPress={onCancelar}>
              <Text style={styles.botaoCancelarTexto}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoConfirmar} onPress={onConfirmar}>
              <Text style={styles.botaoConfirmarTexto}>Excluir</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}