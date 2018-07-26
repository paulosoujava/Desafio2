import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';


const IssuesItem = ({ item }) => (
  <View style={styles.container}>
    <View style={styles.container_image}>
      <Text style={styles.imagem}>IMAGE</Text>
    </View>
    <View style={styles.container_info}>
      <Text style={styles.infoTitle}>Title</Text>
      <Text style={styles.infoSubtitle}>Subtitle</Text>
    </View>
    <View style={styles.container_row}>
      <Text style={styles.row}>></Text>
    </View>
  </View>
);
export default IssuesItem;
