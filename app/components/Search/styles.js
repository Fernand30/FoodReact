import {StyleSheet} from 'react-native'
const React = require("react-native");
const { Dimensions, Platform } = React;
import {Colors, Fonts, Metrics, Images, Constants} from "../../themes"
const deviceHeight = Dimensions.get("window").height;

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
    marginLeft: Constants.Marin4,
    marginTop: Constants.Marin4,

  },
  text: {
    fontSize: Constants.Font6,
    color:'white',
    marginTop: Constants.Marin20,
    marginLeft: Constants.Marin4,
    backgroundColor: 'transparent',
    fontFamily: 'CORBEL',
  },
  inputView:{
    flexDirection: 'row',
    marginTop: Constants.Marin4,
    marginHorizontal: Constants.Marin4,
    borderRadius: 5,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: Constants.Marin12,
    paddingHorizontal: Constants.Marin2
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
    marginTop: Constants.Marin4,
    marginHorizontal: Constants.Marin4,
    borderRadius: 5,
    backgroundColor: '#fa7d64',
    alignItems:'center',
    justifyContent: 'center',
    height: Constants.Marin12,
  },
  buttonText:{
    color: 'white',
    fontSize: Constants.Font2,
    fontFamily: 'CORBEL',
  }
})
