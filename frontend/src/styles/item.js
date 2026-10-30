import { StyleSheet } from 'react-native';
import { colors, radius, spacing } from './theme';

export default StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: radius.md,
    padding: spacing.md,
    marginBottom: spacing.sm,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  info: {
    flex: 1,
    marginLeft: spacing.md,
  },
  nome: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.text,
  },
  detalhe: {
    fontSize: 13,
    color: colors.textMuted,
    marginTop: 2,
  },
  acoes: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  botaoEditar: {
    backgroundColor: '#DBEAFE',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: radius.sm,
  },
  botaoEditarTexto: {
    color: colors.primary,
    fontWeight: '600',
    fontSize: 13,
  },
  botaoExcluir: {
    backgroundColor: '#FEE2E2',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: radius.sm,
  },
  botaoExcluirTexto: {
    color: colors.danger,
    fontWeight: '600',
    fontSize: 13,
  },
  avatar: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  avatarTexto: {
    color: colors.white,
    fontWeight: '700',
  },
  avatarImagem: {
    width: '100%',
    height: '100%',
  },
});