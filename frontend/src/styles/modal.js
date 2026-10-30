import { StyleSheet } from 'react-native';
import { colors, radius, spacing } from './theme';

export default StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.xl,
  },
  caixa: {
    width: '100%',
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    padding: spacing.xl,
  },
  titulo: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  mensagem: {
    fontSize: 14,
    color: colors.textMuted,
    marginBottom: spacing.xl,
  },
  botoes: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  botaoCancelar: {
    flex: 1,
    backgroundColor: colors.border,
    paddingVertical: 12,
    borderRadius: radius.sm,
    alignItems: 'center',
  },
  botaoCancelarTexto: {
    color: colors.text,
    fontWeight: '600',
  },
  botaoConfirmar: {
    flex: 1,
    backgroundColor: colors.danger,
    paddingVertical: 12,
    borderRadius: radius.sm,
    alignItems: 'center',
  },
  botaoConfirmarTexto: {
    color: colors.white,
    fontWeight: '700',
  },
});