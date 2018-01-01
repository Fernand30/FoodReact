import {StyleSheet} from 'react-native'
const React = require("react-native");
const { Dimensions, Platform } = React;
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
const deviceHeight = Dimensions.get("window").height;
const imagesize = responsiveHeight(10);
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f8'
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical : 10,
    backgroundColor: '#fa7d64',
  },
  titleText:{
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    flex: 1,
    fontFamily: 'CORBEL',
  },
  shadowView: {
    shadowOffset:{  width: 2,  height: 3,  },
    shadowColor: 'black',
    shadowOpacity: 0.3,
    borderRadius: 2,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 20,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  greenCheck:{
    marginRight: 20,
  },
  dropdown:{
    marginLeft: 10,
  },
  shadowColumnView: {
    
    marginHorizontal: 20,
    marginTop: 10,
  },
  shadowColumnView1: {
    shadowOffset:{  width: 2,  height: 3,  },
    shadowColor: 'black',
    shadowOpacity: 0.3,
    borderRadius: 2,
    marginHorizontal: 10,
    marginTop: 10,
    padding: 10
  },
  smallText:{
    fontSize:14,
    color: '#b9b2b2',
    backgroundColor:'transparent',
    fontFamily: 'CORBEL',
  },
  comonflexRowView:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  smallText2:{
    fontSize:14,
    color: '#9b9b9b',
    backgroundColor:'transparent',
    fontFamily: 'CORBEL',
    marginLeft: 10,
  },
  smallText1:{
    fontSize:14,
    backgroundColor:'transparent',
    fontFamily: 'CORBEL',
    marginTop: 10,
  },
  smallunshaText:{
    fontSize:14,
    backgroundColor:'transparent',
    fontFamily: 'CORBEL',
  },
  selectButtonView:{
    marginTop: 10,
    paddingHorizontal: 20,
  },
  selectButton:{
    backgroundColor:'#0d9f67',
    borderRadius: 5,
    height:30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  unselectButton:{
    backgroundColor:'#0d9f67',
    borderRadius: 5,
    height:30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  selectbuttonText:{
    color: 'white',
    fontSize: 14,
    fontFamily: 'CORBEL'
  },
  itemText:{
    fontSize: 14,
    marginLeft: 20,
    marginTop: 20,
  },
  rowView:{
    flexDirection: 'row',
    alignItems:'center',
    paddingHorizontal: 30,
    justifyContent:'space-between',
    marginTop: 20
  },
  rowView1:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop: 20
  },
  columnText:{
    fontSize: 14,
    fontFamily: 'CORBEL',
  },
  largeText:{
    fontSize: 18,
    fontFamily: 'CORBEL',
  },
  smallshaText:{
    fontSize: 12,
    color: '#b9b2b2',
    marginTop: 10,
    fontFamily: 'CORBEL',
  },
  shaText:{
    marginLeft: 10,
    fontSize: 16,
    color: '#b9b2b2',
    fontFamily: 'CORBEL',
  },
  underlineView:{
    marginTop: 10,
  },
  underlineView1:{
    paddingVertical: 10,
    flexDirection:'row',
    borderColor: '#b9b2b2',
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    justifyContent:'space-between',
    paddingHorizontal:20,
    alignItems:'center'
  },
  checkView:{
    width: 20,
    height: 20,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#9b9b9b'
  },
  redText:{
    marginLeft: 30,
    fontSize: 14,
    color: '#fa7d64',
    textAlign: 'center',
    fontFamily: 'CORBEL',
  },
  rowflexView:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal: 10,
  },
  shadowView1:{
    shadowOffset:{  width: 2,  height: 3,  },
    shadowColor: 'black',
    shadowOpacity: 0.3,
    borderRadius: 2,
    marginTop: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  commonText:{
    fontSize : 14,
    marginLeft: 20,
    fontFamily: 'CORBEL',
  },
  textInput:{
    borderBottomWidth: 1,
    borderColor: '#b9b2b2',
    justifyContent: 'center',
    height: 30,
    fontSize: 16,
    fontFamily: 'CORBEL'
  },
  commonText2:{
    fontSize : 14,
    marginLeft: 20,
    color: '#b9b2b2',
  },
  commonText1:{
    fontSize : 16,
    flex: 1,
    textAlign: 'right',
    fontFamily: 'CORBEL',
  },
  columnView:{
    marginTop:10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#b9b2b2',
    paddingVertical:10,
  },
  totalView:{
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingVertical: 10,
    borderBottomWidth:1,
    borderColor: '#b9b2b2',
    paddingHorizontal: 10,
  },
  bottomView:{
    flex:1,
    justifyContent:'flex-end'
  },
  buttonView:{
    backgroundColor:'#0d9f67',
    alignItems:'center',
    justifyContent:'center',
    height: 50,
    flexDirection:'row'
  },
  buttonText:{
    color: 'white',
    fontFamily: 'CORBEL',
    fontSize: 16,
    marginTop:3,
  },
  numberText:{
    color: 'white',
    fontSize: 14,
  },
  firstView:{
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    width:20,
    height: 20,
    backgroundColor: '#fa7d64'
  },
  lineView1:{
    flex:1,
    height: 1,
    backgroundColor: '#fa7d64'
  },
  commaView: {
    width:5,
    height:5,
    borderRadius:2.5,
    backgroundColor:'white'
  },
  secondView:{
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    width:20,
    height: 20,
    backgroundColor: '#9b9b9b'
  },
  lineView2:{
    flex:1,
    height: 1,
    backgroundColor: '#9b9b9b'
  },
  smallRedText:{
    fontSize: 14,
    color:'#fa7d64',
    textAlign:'center',
    fontFamily: 'CORBEL',
  },
  smallBlackText:{
    fontSize: 14,
    textAlign:'center',
    color: '#b9b2b2',
    fontFamily: 'CORBEL',
  },
  underlinerowView:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop: 20,
    marginBottom:10,
  },
  containerStyle:{
    backgroundColor:'black',
  },
  leftView:{
    flex:2,
    borderWidth: 1,
    borderColor: '#c6c6c6',
    marginRight: 10,
    paddingVertical: 5,
    paddingHorizontal: 5
  },
  checkText:{
    backgroundColor:'transparent',
    fontFamily: 'CORBEL',
    fontSize: 14
  },
  rightView:{
    flex:1,
    borderWidth: 1,
    borderColor: '#c6c6c6',
    marginLeft: 10,
    paddingVertical: 5,
    paddingHorizontal: 5
  },
  childRowView: {
    flexDirection:'row',
    alignItems:'center',
  }

})
