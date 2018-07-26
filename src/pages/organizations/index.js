import React, { Component } from 'react';
import 'config/ReactotronConfig';
import {
  View,
  TouchableOpacity,
  TextInput,
  Text,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from 'service/api';
import OrganizationItem from './component/OrganizationItem';
import Separetor from './component/Separetor';
import styles from './style';

export default class Organization extends Component {
  static navigationOptions = {
    title: 'Expo',
  };

  state = {
    nameRep: '',
    loading: false,
    errorMessage: null,
    data: [],
    show: true,
  };

  search = async () => {
    const { nameRep } = this.state;
    if (nameRep.length === 0) return;
    this.setState({ loading: true });
    try {
      const response = await api.get(`/repos/${nameRep}`);
      if (response.data.length !== 0) {this.setState({data: [ JSON.stringify(response.data),...oldMessages], loading: false, show: false });}
    } catch (err) {
      this.setState({ loading: false, errorMessage: `Opss, nada foi encontrado com o nome: ${nameRep}` });
    }
  };

  checkRepExist = async (nameRep) => {
    const resp = await api.get(`/repos/${nameRep}`);
    alert(resp.data.length);
    return resp;
  };

  renderListItem = ({ item }) => (
    <OrganizationItem repItem={item} />
  );

renderList = () => (
  alert(this.state.data.length)
);

render() {
  if ( this.state.show ){
  return (
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite o usuário"
            underlineColorAndroid="rgba(0,0,0,0)"
            value={this.state.nameRep}
            onChangeText={nameRep => this.setState({ nameRep })}
          />
          <TouchableOpacity style={styles.button} onPress={this.search}>
            {this.state.loading
              ? <ActivityIndicator size="small" color="#000" />
              : (
                <Text style={styles.buttonText}>
                  <Icon name="plus" size={20} style={styles.icon} />
                </Text>
              )
            }
          </TouchableOpacity>
        </View>
        {!!this.state.errorMessage
         && (
         <Text style={styles.error}>
           {this.state.errorMessage}
         </Text>
         )
        }
        
        <View style={styles.container_list}>
          {this.state.loading
            ? <ActivityIndicator size="small" color="#000" />
            : this.renderList()
          }
        </View>
      </View>
  );
  }else{
  return (
    <View style={styles.container_list}>
        {this.renderList()}
    </View>
  );
  }
 }
}
