import React from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';


const OrganizationItem = ({ item }) => (
  <View style={styles.container}>
    <View style={styles.container_image}>
      <Image style={styles.imagem} source={{ uri: item.avatar_url}} />
    </View>
    <View style={styles.container_info}>
      <Text style={styles.infoTitle}>{item.name}</Text>
      <Text style={styles.infoSubtitle}>{item.login}</Text>
    </View>
    <View style={styles.container_row}>
      <Icon name="row" size={20} style={styles.icon} />
    </View>
  </View>
);
export default OrganizationItem;
