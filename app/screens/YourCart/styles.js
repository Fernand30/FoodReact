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
    fontSize: 22,
    textAlign: 'center',
    flex: 1,
    fontFamily: 'CORBEL',
  },
  shadowView: { 
    shadowOffset:{  width: 2,  height: 3,  },
    shadowColor: 'black',
    shadowOpacity: 0.3,
    borderRadius: 2,
    marginTop: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingTop: 15,
    paddingBottom:5,
    backgroundColor:'white'
  },
  rowView:{
    flexDirection: 'row',
    alignItems:'center'
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
    backgroundColor:'white'
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
    backgroundColor:'white',
    paddingBottom: 20,
  },
  commonText:{
    fontSize : 14,
    fontFamily:'CORBEL'
  },
  commonText2:{
    fontSize : 14,
    color: '#b9b2b2',
    fontFamily: 'CORBEL',
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
    backgroundColor: 'white',
    paddingBottom : 10,
    paddingHorizontal: 20,
  },
  totalView:{
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingVertical: 10,
    borderBottomWidth:1,
    borderColor: '#b9b2b2',
    paddingHorizontal: 10,
    backgroundColor: 'white',
    paddingHorizontal:20,
  },
  bottomView:{
    flex:1,
    justifyContent:'flex-end',
    backgroundColor: 'white'
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
    marginTop: 3,
    fontFamily: 'CORBEL',
  },
  numberText:{
    color: 'white',
    fontSize: 14,
    fontFamily: 'CORBEL',
  }

})
