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
  foodImage:{
    width: responsiveWidth(100),
    resizeMode: 'cover',
  },
  imageView:{
    flex: 0.9
  },
  absoluteView:{
    bottom: 50,
    right: 10,
    marginLeft : 20,
    backgroundColor: 'white',
    shadowOffset:{  width: 2,  height: 3,  },
    shadowColor: 'black',
    shadowOpacity: 0.3,
    borderRadius: 2
  },
  commonFlexView:{
    flexDirection:'row',
    marginHorizontal: 10,
    marginTop:  10,
    justifyContent:'space-between',
    alignItems:'center'
  },
  buttonView:{
    paddingHorizontal: 80,
    alignItems:'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    shadowOffset:{  width: 2,  height: 3,  },
    shadowColor: 'black',
    shadowOpacity: 0.3,
    borderRadius: 2,
    marginHorizontal: 10,
    paddingTop: 10,
    marginTop:5, 
    backgroundColor: 'white'
  },
  commonColumnView:{
    marginLeft: 10,
    justifyContent:'center'
  },
  commonMarginView:{
    marginLeft: 30,
    justifyContent:'center'
  },
  shadowView: {
    shadowOffset:{  width: 1,  height: 2,  },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    borderRadius: 2,
    marginTop: 10,
    flexDirection:'row',
    backgroundColor:'white',
    marginHorizontal: 10,
  },
  childRowView:{
    flexDirection:'row',
    alignItems:'center'
  },
  buttonRowView:{
    flexDirection: 'row',
    alignItems:'center'
  },
  plusText:{
    color: '#e9919c',
    textAlign: 'right'
  },
  text: {
    color: '#e9919c',
    marginLeft: 10,
  },
  redText:{
    color: '#e9919c',
    textAlign: 'center'
  },
  buttonColumnView:{

  },
  rowflexView:{
    flexDirection: 'row',
    borderTopWidth: 1,
    paddingTop: 20,
    borderColor: '#b9b2b2',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,

  },
  smallshaText:{
    fontSize: 12,
    color: '#b9b2b2',
    textAlign: 'center'
  },
  smallshaText1:{
    fontSize: 14,
    color: '#b9b2b2',
    marginLeft: 10,
    marginTop:10,
  },
  eachView:{
    alignItems: 'center',
    justifyContent: 'center'
  },
  empytView:{
    width: 1,
    height: 20,
    backgroundColor: '#e4e4e4'
  },
  rowView:{
    flexDirection:'row',
    paddingHorizontal: 80,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  largeText:{
    fontSize: 20,
    fontFamily: 'CORBEL',
  },
  smallText: {
    fontSize: 14,

  },
  columnText:{
    fontSize: 14,

  },
  mexcianText:{
    fontSize: 14,
    textAlign:'center'
  },
  columnView:{
    alignItems: 'center',
    marginTop: 10,
  },
  headerRightView:{
    justifyContent:'center',
    marginTop: 10
  },
  headerTextInputView: {
    flex: 1,
    flexDirection: 'row',
    height: 40,
    borderRadius: 3,
    backgroundColor: 'white',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 5,
    marginBottom: 5
  },
  HeaderSearchTabView:{
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: "#fa7d64",
    paddingHorizontal: 8
  },
  searchImage: {
    marginLeft: 10
  },
  headerTextInput: {
    flex: 1,
    marginLeft: 10,
    color: "#fa7d64",
    fontSize:13,
  },
  TabView:{
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  selecTabText:{
    color: 'white',
  },
  bottomButton:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#0d9f67',
    paddingVertical:20,
  },
  tabText:{
    color: '#deb4ab',
  },
  scrollView:{
    flex: 1,
    backgroundColor: '#f5f5f8',
  },
  lookButton:{
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    height: 45,
    marginHorizontal: 20,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset:{  width: 1,  height: 3,  },
    shadowColor: 'black',
    shadowOpacity: 0.2,
  },
  notificationview:{
    position: 'absolute',
    top: -5,
    right: -5,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  notificationNumber:{
    fontSize: 12,
    color: '#fa7d64'
  },
  buttonText:{
    color: '#FFF',
    fontFamily: 'CORBEL',
    fontSize:16,
    marginTop:5,
  },
  numberText:{
    color: '#FFF',
    fontSize:14
  },
  itemView:{
    alignItems: 'center'
  },
  topImage:{
    position: 'absolute',
    top: -5,
    right: 12,
  },
  starImage:{
    
  },
  likeTopImage:{
    position: 'absolute',
    bottom: 10,
    right: 30,
  },
  bottomView:{
    flex: 1,
    justifyContent:'flex-end'
  },
  likeBottomImage:{
    position: 'absolute',
    bottom: 100,
    right: 30,
  },
  renderHeaderDealButtonContainer:{
    marginTop: 10,
    marginBottom: 0,
    flexDirection: 'row',
    height: 45,
    marginHorizontal: 20,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset:{ width: 1,  height: 3, },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    borderWidth:2,
    elevation:6,
    borderColor: '#D3D3D3',
    backgroundColor: 'white'
  },
  renderHeaderTicketImage:{
    backgroundColor: "#fa7d64"
  },
  renderHeaderText:{
    color:"#fa7d64"
  },
  renderSeperator: {
    height: 1,
    width: "86%",
    backgroundColor: "#CED0CE",
    marginLeft: "14%"
  },
  renderFooter: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#CED0CE'
  },
  cornerup:{
    marginRight: 5,
  }
})
