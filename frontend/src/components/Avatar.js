import { View, Text, Image } from 'react-native';
import styles from '../styles/item';

export default function Avatar({ foto, nome = '', sobrenome = '', size = 48 }) {
  const iniciais = `${nome[0] || ''}${sobrenome[0] || ''}`.toUpperCase() || '?';

  return (
    <View style={[styles.avatar, { width: size, height: size, borderRadius: size / 2 }]}>
      {foto ? (
        <Image source={{ uri: foto }} style={styles.avatarImagem} />
      ) : (
        <Text style={[styles.avatarTexto, { fontSize: size / 2.5 }]}>{iniciais}</Text>
      )}
    </View>
  );
}