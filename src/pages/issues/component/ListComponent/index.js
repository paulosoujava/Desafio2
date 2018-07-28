import React,{ Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './style';

import Icon from 'react-native-vector-icons/FontAwesome';


export default class IssuesItem extends Component {
  render() {
    return (
      <View style={styles.container}>

           <View style={styles.container_image}>
            <Image style={styles.image} source={{ uri: this.props.data.user.avatar_url }} />
          </View>
          <View style={styles.container_info}>
            <Text style={styles.infoTitle}> { this.props.data.user.login }</Text>
            <Text style={styles.infoSubtitle}> { this.props.data.body.substring(0,50)+ '...' }</Text>
          </View>
          <View style={styles.container_row}>
            <Icon name="angle-right" size={20} style={styles.row} />
          </View>
        </View>
      );
  }
}

