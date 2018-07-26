import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 4,
    backgroundColor: colors.white,
    margin: metrics.baseMargin,
    padding: metrics.basePadding,
  },
  container_image: {
    flex: 2,
    height: 80,
    width: 120,
    backgroundColor: colors.danger,
  },
  image: {
    height: 80,
    width: 80,
    backgroundColor: colors.danger,
  },
  container_info: {
    flex: 3,
    backgroundColor: colors.white,
    padding: metrics.basePadding,
    width: 180,
  },
  infoTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  infoSubtitle: {
    fontSize: 12,
  },
  container_row: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
  },
});
export default styles;
