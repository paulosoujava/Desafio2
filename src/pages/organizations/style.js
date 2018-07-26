import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    padding: 4,
    height: 44,
    width: 300,
  },
  button: {
    padding: metrics.basePadding,
  },
  icon: {
    color: colors.darker,
  },
  error: {
    color: colors.danger,
    fontSize: 12,
    paddingHorizontal: metrics.basePadding,
  },
  container_list: {
    flex: 1,
    backgroundColor: colors.danger,
  },
});
export default styles;
