import React from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
} from 'react-native';

const window = Dimensions.get('window');
import {Colors, Fonts, Images, Metrics, Constants } from '../../themes';

export default function Menu({ onItemSelected }) {

  return (
      <View style={styles.Container}>
        <Text style={styles.redtext} onPress={() => onItemSelected('home')}>Home</Text>
        <Text style={styles.text} onPress={() => onItemSelected('login')}>Login</Text>
        <Text style={styles.text} onPress={() => onItemSelected('signup')}>Register</Text>
        <Text style={styles.text} onPress={() => onItemSelected('help')}>Help</Text>
        <Text style={styles.text} onPress={() => onItemSelected('about')}>About</Text>

      </View>  
    
  );
}
const styles = StyleSheet.create({
  
  Container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop:200,
    paddingLeft:40
  },
  text:{
    fontSize: 18,
    fontFamily: 'CORBEL',
    marginTop: 20,
  },
  redtext:{
    fontSize: 18,
    fontFamily: 'CORBEL',
    color: '#fa7d64'
  }
});


Menu.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
};
