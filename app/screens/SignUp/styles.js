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
  headerView: {
    marginTop: Constants.Marin2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Constants.Marin4
  },
  titleText:{
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
    flex: 1,
    fontFamily: 'CORBEL',
  },
  notificationview:{
    position: 'absolute',
    top: -5,
    right: -10,
    width: Constants.Marin4,
    height: Constants.Marin4,
    borderRadius: Constants.Marin2,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  notificationNumber:{
    fontSize: Constants.Font1,
    color: '#fa7d64'
  },
  loginView:{
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor:'white'
  },
  logo:{
    textAlign:'center',
    color:'red',
    fontSize: Constants.Font30,
    marginTop: 30
  },
  facebook:{
    backgroundColor:'#3b5998',
    height:Constants.Marin14,
    flexDirection:'row',
    alignItems:'center',
    marginTop: 80,
  },
  faceText:{
    alignItems:'center',
    color: 'white',
    fontSize: 24,
    fontFamily: 'CORBEL',
    fontWeight: '800',
  },
  sideView:{
    width: 40,
    alignItems:'flex-end'
  },
  facesignText:{
    textAlign:'center',
    color: 'white',
    fontSize: 16,
    fontFamily: 'CORBEL',
  },
  commonText:{
    fontFamily: 'CORBEL',
    fontSize: 16,
    color: '#919191',
    textAlign:'center',
    marginTop:20,
  },
  agreeText:{
    fontFamily: 'CORBEL',
    fontSize: 16,
    color: '#919191',
    textAlign:'center',
    marginLeft: 20,
    marginTop:5,
  },
  textInput:{
    borderColor: '#919191',
    color: '#919191',
    paddingVertical: Constants.Marin4,
    textAlign:'center',
    marginTop:10,
    borderWidth:1,
  },
  singinButton:{
    backgroundColor: '#4a4a4a',
    alignItems:'center',
    justifyContent:'center',
    paddingVertical: Constants.Marin4,
    marginTop:10,
  },
  signin:{
    color:'white',
    fontFamily: 'CORBEL',
    fontSize: Constants.Font20,
  },
  singupButton:{
    backgroundColor: '#9b9b9b',
    alignItems:'center',
    justifyContent:'center',
    paddingVertical: Constants.Marin4,
    marginTop:10,
  },
  signup:{
    color:'#f3f3f3',
    fontFamily: 'CORBEL',
    fontSize: Constants.Font20,
  },
  checkView:{
    width: Constants.Marin6,
    height: Constants.Marin6,
    borderColor: '#9b9b9b',
    borderWidth: 1,
    alignItems:'center',
    justifyContent:'center'
  },
  agreeView:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:10,
  },
})
