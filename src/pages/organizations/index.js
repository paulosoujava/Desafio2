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

  state = {
    nameRep: '',
    loading: false,
    errorMessage: null,
    data: [],
  };

  static navigationOptions = {
    title: 'Organization',
    headerBackTitle: null ,
  };

  search = async () => {
    const { nameRep } = this.state;
    if (nameRep.length === 0) return;
    this.setState({ loading: true });
    try {
      const response = await api.get(`/repos/${nameRep}`);
      this.setState({ data: [...this.state.data, response.data], loading: false });
    } catch (err) {
      this.setState({ loading: false, errorMessage: `Opss, nada foi encontrado com o nome: ${nameRep}` });
    }
  };


  renderListItem = ({ item }) => (
  <TouchableOpacity  onPress={() =>
           this.props.navigation.navigate('Issues', { name: item.id} )
        }>
      <OrganizationItem item={item} />
    </TouchableOpacity>
  );

renderList = () => (
  <FlatList
    data={this.state.data}
    keyExtractor={item => String(item.id)}
    renderItem={this.renderListItem}
  />
);

render() {
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
      <Separetor />

      <View style={styles.container_list}>
        {this.state.loading
          ? <ActivityIndicator size="small" color="#000" />
          : this.renderList()
          }
      </View>
    </View>
  );
}
}
