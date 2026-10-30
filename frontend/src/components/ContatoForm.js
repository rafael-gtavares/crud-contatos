import { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Avatar from './Avatar';
import { criarContato, atualizarContato } from '../api/contatos';
import styles from '../styles/form';
import { colors } from '../styles/theme';

const vazio = { foto: '', nome: '', sobrenome: '', telefone: '', email: '' };

export default function ContatoForm({ contatoEditando, onSalvo, onCancelar }) {
  const [form, setForm] = useState(vazio);
  const [salvando, setSalvando] = useState(false);

  // Quando clica em "Editar" na lista, preenche o formulário
  useEffect(() => {
    if (contatoEditando) {
      setForm({
        foto: contatoEditando.foto || '',
        nome: contatoEditando.nome,
        sobrenome: contatoEditando.sobrenome,
        telefone: contatoEditando.telefone,
        email: contatoEditando.email,
      });
    } else {
      setForm(vazio);
    }
  }, [contatoEditando]);

  const alterar = (campo, valor) => setForm((atual) => ({ ...atual, [campo]: valor }));

  const escolherFoto = async () => {
    const permissao = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissao.granted) {
      Alert.alert('Permissão necessária', 'Permita o acesso à galeria para escolher uma foto.');
      return;
    }

    const resultado = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.3,
      base64: true,
    });

    if (!resultado.canceled) {
      const asset = resultado.assets[0];
      alterar('foto', `data:image/jpeg;base64,${asset.base64}`);
    }
  };

  const salvar = async () => {
    if (!form.nome || !form.sobrenome || !form.telefone || !form.email) {
      Alert.alert('Atenção', 'Preencha nome, sobrenome, telefone e email.');
      return;
    }

    try {
      setSalvando(true);
      if (contatoEditando) {
        await atualizarContato(contatoEditando._id, form);
      } else {
        await criarContato(form);
      }
      setForm(vazio);
      onSalvo();
    } catch (error) {
      Alert.alert('Erro', error.response?.data?.message || 'Não foi possível salvar o contato.');
    } finally {
      setSalvando(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.titulo}>{contatoEditando ? 'Editar contato' : 'Novo contato'}</Text>

      <View style={styles.fotoRow}>
        <Avatar foto={form.foto} nome={form.nome} sobrenome={form.sobrenome} size={64} />
        <TouchableOpacity style={styles.fotoBotao} onPress={escolherFoto}>
          <Text style={styles.fotoBotaoTexto}>{form.foto ? 'Trocar foto' : 'Escolher foto'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TextInput
          style={[styles.input, styles.inputMetade]}
          placeholder="Nome"
          placeholderTextColor={colors.textMuted}
          value={form.nome}
          onChangeText={(v) => alterar('nome', v)}
        />
        <TextInput
          style={[styles.input, styles.inputMetade]}
          placeholder="Sobrenome"
          placeholderTextColor={colors.textMuted}
          value={form.sobrenome}
          onChangeText={(v) => alterar('sobrenome', v)}
        />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Telefone"
        placeholderTextColor={colors.textMuted}
        keyboardType="phone-pad"
        value={form.telefone}
        onChangeText={(v) => alterar('telefone', v)}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={colors.textMuted}
        keyboardType="email-address"
        autoCapitalize="none"
        value={form.email}
        onChangeText={(v) => alterar('email', v)}
      />

      <View style={styles.botoes}>
        <TouchableOpacity style={styles.botaoPrimario} onPress={salvar} disabled={salvando}>
          <Text style={styles.botaoPrimarioTexto}>
            {salvando ? 'Salvando...' : contatoEditando ? 'Atualizar' : 'Cadastrar'}
          </Text>
        </TouchableOpacity>

        {contatoEditando && (
          <TouchableOpacity style={styles.botaoSecundario} onPress={onCancelar}>
            <Text style={styles.botaoSecundarioTexto}>Cancelar</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
}