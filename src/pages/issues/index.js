import React from 'react';

import { View, TouchableOpacity,  Text } from 'react-native';
import IssuesItem from './component';
import styles from './style';


const Issues = () => (
  <View style={styles.container}>
    <IssuesItem />
  </View>
);
export default Issues;
