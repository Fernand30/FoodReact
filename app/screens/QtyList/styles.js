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
  foodImage:{
    width: responsiveWidth(100),
    resizeMode: 'cover',
  },
  absoluteView:{
    backgroundColor: 'white',
  },
  backButtonstyle:{
    position: 'absolute',
    top: 20,  
    left: 20,
  },
  backImage:{
    position:'absolute',
    top: 20,
    left: 20,

  },
  shadowView: {
    shadowOffset:{  width: 2,  height: 3,  },
    shadowColor: 'black',
    shadowOpacity: 0.3,
    borderRadius: 2,
    marginTop: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    justifyContent:'space-between',
    flexDirection:'row',
    backgroundColor: 'white'
  },
  commonColumnView:{
    justifyContent:'center'
  },
  buttonView:{
    marginTop: 10,
  },
  columnText:{
    fontSize: 14,
  },
  smallshaText:{
    fontSize: 12,
    color: '#b9b2b2',
    marginTop: 10,
  },
  itemText:{
    marginTop: 20,
    marginLeft: 20
  },
  rowView:{
    flexDirection:'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  columnView:{
    shadowOffset:{  width: 2,  height: 3,  },
    shadowColor: 'black',
    shadowOpacity: 0.3,
    borderRadius: 2,
    marginTop: 10,
    marginHorizontal: 10,
    paddingLeft: 20,
    paddingVertical: 15,
    backgroundColor:'white'
  },
  columnView1:{
    shadowOffset:{  width: 2,  height: 3,  },
    shadowColor: 'black',
    shadowOpacity: 0.3,
    borderRadius: 2,
    marginTop: 10,
    marginHorizontal: 10,
    paddingLeft: 10,
    paddingVertical: 15,
    backgroundColor:'white'
  },
  redio:{
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    alignItems:'center',
    justifyContent:'center',
    marginRight: 20
  },
  commaView:{
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'black'
  },
  check:{
    width: 20,
    height: 20,
    borderColor: 'black',
    borderWidth: 1,
    alignItems:'center',
    justifyContent:'center',
    marginRight: 20
  },
  checked:{
    width: 20,
    height: 20,
    backgroundColor: 'black',
    alignItems:'center',
    justifyContent:'center',
  },
  addButton:{
    width: 160,
    height: 40,
    borderRadius: 15,
    borderColor: 'black',
    borderWidth: 1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal: 30,
  },
  addbuttonText:{
    fontSize: 30,
  },
  buttonText:{
    color: '#FFF',
    fontFamily: 'CORBEL',
    fontSize:16,
    marginTop:5,
  },
  centerView:{
    marginTop: 20,
    alignItems:'center'
  },
  bbView:{
    flex: 1,
    justifyContent: 'flex-end', 
  },
  bottomButton:{
    flexDirection:'row',
    paddingVertical: 10,
    backgroundColor: '#fa7d64',
    alignItems:'center',
    justifyContent:'center',
  },
  addbottomText:{
    color: 'white',
    textAlign: 'center',
    fontFamily: 'CORBEL',
    fontSize:16,
    paddingVertical: responsiveHeight(0.5),
    marginTop:5,
  },
  numberText:{
    color: 'white',
    textAlign: 'center',
    fontSize:16,
  }

})
