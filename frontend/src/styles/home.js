import { StyleSheet } from 'react-native';
import { colors, spacing } from './theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.primary,
    paddingTop: 48,
    paddingBottom: spacing.lg,
    paddingHorizontal: spacing.lg,
  },
  headerTitle: {
    color: colors.white,
    fontSize: 22,
    fontWeight: '700',
  },
  headerSubtitle: {
    color: '#DBEAFE',
    fontSize: 13,
    marginTop: 2,
  },
  metade: {
    flex: 1,
  },
  divisor: {
    height: 1,
    backgroundColor: colors.border,
  },
  listaHeader: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.sm,
  },
  listaTitulo: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
  },
  listaContent: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.lg,
  },
  vazio: {
    textAlign: 'center',
    color: colors.textMuted,
    marginTop: spacing.xl,
  },
});