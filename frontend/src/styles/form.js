import { StyleSheet } from 'react-native';
import { colors, radius, spacing } from './theme';

export default StyleSheet.create({
  container: {
    padding: spacing.lg,
  },
  titulo: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.md,
  },
  fotoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  fotoBotao: {
    marginLeft: spacing.lg,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: radius.sm,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  fotoBotaoTexto: {
    color: colors.primary,
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  input: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.sm,
    paddingHorizontal: spacing.md,
    paddingVertical: 10,
    fontSize: 15,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  inputMetade: {
    flex: 1,
  },
  botoes: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginTop: spacing.xs,
  },
  botaoPrimario: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingVertical: 12,
    borderRadius: radius.sm,
    alignItems: 'center',
  },
  botaoPrimarioTexto: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 15,
  },
  botaoSecundario: {
    paddingVertical: 12,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.sm,
    alignItems: 'center',
    backgroundColor: colors.border,
  },
  botaoSecundarioTexto: {
    color: colors.text,
    fontWeight: '600',
    fontSize: 15,
  },
});