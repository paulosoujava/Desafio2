import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  container_tabs_root:{
    margin: metrics.baseMargin,
    backgroundColor: '#666',
    marginTop: 5,
    marginBottom: 5,
    flexDirection: 'row',

  },
  btn_tab:{
    color: '#333',
    padding:10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'

  },


 });
export default styles;
