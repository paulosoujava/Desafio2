import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 5,
    borderRadius: 4,
    backgroundColor: colors.white,
    margin: metrics.baseMargin,
    padding: metrics.basePadding,
  },
  container_image: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    borderRadius: 25, // para arredondar 100%, use metade do width e height aqui
    alignSelf: 'center',
    borderWidth: 1,
    height: 50,
    width: 50,
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
