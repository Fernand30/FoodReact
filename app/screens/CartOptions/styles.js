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
  backButtonstyle:{
    position: 'absolute',
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
    flexDirection:'row'
  },
  commonColumnView:{
    justifyContent:'center'
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


})
