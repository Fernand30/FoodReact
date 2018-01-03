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
  rowView:{
    flexDirection:'row',
    paddingHorizontal: 20,
    alignItems:'center',
    justifyContent:'space-between',
    borderColor: '#dfdfdf',
    borderBottomWidth:1,
    backgroundColor:'white',
    paddingVertical:10,
  },
  buttonView:{
    flex:1,
    backgroundColor:'white',
    justifyContent:'flex-end'
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
    flex:1,
    textAlign:'right'
  },
  saveButtonView:{
    backgroundColor: '#0d9f67',
    alignItems:'center',
    justifyContent:'center',
    paddingVertical: Constants.Marin4,
  },
  saveText:{
    color:'white',
    fontFamily: 'CORBEL',
    fontSize: Constants.Font20,
  },
})
