import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';


import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';

export default class OrganizationItem extends Component {
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.container_image}>
            <Image style={styles.image} source={{ uri: this.props.item.owner.avatar_url }} />
          </View>
          <View style={styles.container_info}>
            <Text style={styles.infoTitle}>
              { this.props.item.login }
            </Text>
            <Text style={styles.infoSubtitle}>
              { this.props.item.full_name }
            </Text>
          </View>
          <View style={styles.container_row}>
            <Icon name="angle-right" size={20} style={styles.icon} />
          </View>
        </View>

    );
  }
}

// OrganizationItem.protoTypes = {
//   avatar_url: PropTypes.string,
//   full_name: PropTypes.string,
//   login: PropTypes.string,
// };
