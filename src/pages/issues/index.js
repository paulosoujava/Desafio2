import React, { Component } from 'react';
import api from 'service/api';
import { View, TouchableOpacity, Text, FlatList, ActivityIndicator } from 'react-native';
import IssuesItem from './component/ListComponent';
import styles from './style';

export default class Issues extends Component{

  static navigationOptions = {
    title: 'Issues',
    headerBackTitle: null ,
  };

   state = {
    loading: false,
    what: 'all',
    data: [],
  };

  componentDidMount(){
    this.issuesAll();
};

issuesAll = async () => {
  this.setState({ data: '', what: 'all', loading: true  });
   this.getLoadWhat();
};
issuesClosed = async () => {
  this.setState({ data: '', what: 'closed', loading: true  });
  this.getLoadWhat();
};
issuesOpened = async () => {
  this.setState({ data: '', what: 'open', loading: true  });
  this.getLoadWhat();
};

getLoadWhat = async () =>{
    try {
         const { name  } = this.props.navigation.state.params;
          const response =  await api.get(`/repositories/${name}/issues?state=${this.state.what}`);

          this.setState({ data: response.data, loading: false });
         } catch (err) {
          this.setState({ loading: false, errorMessage: `Opss, nada foi encontrado com o nome: ${nameRep}` });
        }
}

 renderListItem = ({ item }) => (
    <IssuesItem data={item} />
   );

renderList = () => (
  <FlatList
    data={this.state.data}
    keyExtractor={item => String(item.id)}
    renderItem={this.renderListItem}
  />
);


  render(){
    return(

      <View style={styles.container}>
          <View style={styles.container_tabs_root}>
            <TouchableOpacity style={styles.btn_tab}  onPress={this.issuesAll} >
              <Text style={styles.btn_text}>Todas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn_tab} onPress={this.issuesOpened} >
             <Text style={styles.btn_text}>Abertas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn_tab} onPress={this.issuesClosed} >
              <Text style={styles.btn_text}>Fechada</Text>
           </TouchableOpacity>
         </View>
            <Text style={styles.btn_text}>Status: {this.state.what}</Text>
         <View>
          {this.state.loading
            ? <ActivityIndicator size="small" color="#000" />
            : this.renderList()
            }
        </View>

      </View>
    );
  }

};
