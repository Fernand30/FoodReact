import {StyleSheet} from 'react-native'
const React = require("react-native");
const { Dimensions, Platform } = React;
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
const deviceHeight = Dimensions.get("window").height;
const imagesize = responsiveHeight(10);
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fa7d64'
  },
  backgroundImage:{
    flex: 1,
    width: null,
    height: null
  },
  menu_hamburger:{
    marginLeft: 10,
    marginTop: 10,

  },
  headerView: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  text: {
    fontSize: 40,
    color:'white',
    marginTop: 150,
    marginLeft: 20,
    backgroundColor: 'transparent',
    fontFamily: 'CORBEL',
  },
  inputView:{
    flexDirection: 'row',
    marginTop: 40,
    marginHorizontal: 20,
    borderRadius: 5,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    paddingHorizontal: 10
  },
  textInput:{
    flex: 1,
    justifyContent: 'center',
    marginLeft: 10,
  },
  questionView:{
    alignItems:'center',
    justifyContent:'center',
    width: 15,
    height: 15,
    borderWidth: 0.5,
    borderColor: 'red'
  },
  qustion:{
    fontSize: 14,
    color: 'red',
    backgroundColor: 'transparent'
  },
  buttonView: {
    marginTop: 10,
    marginHorizontal: 20,
    borderRadius: 5,
    backgroundColor: '#fa7d64',
    alignItems:'center',
    justifyContent: 'center',
    height: 50,
  },
  buttonText:{
    color: 'white',
    fontSize: 16,
    fontFamily: 'CORBEL',
  }
})
