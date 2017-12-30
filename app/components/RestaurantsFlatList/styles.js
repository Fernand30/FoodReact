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
  headerView: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  text: {
    textAlign: 'center'
  },
  headerTextInputView: {
    flex: 1,
    flexDirection: 'row',
    height: 45,
    borderRadius: 3,
    backgroundColor: 'white',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 5,
    marginBottom: 5,

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
    fontFamily: 'CORBEL'
  },
  tabText:{
    color: '#deb4ab',
    fontFamily: 'CORBEL'
  },
  scrollView:{
    flex: 1,
    backgroundColor: '#f5f5f8',
  },
  headerRightView:{
    justifyContent:'center',
    marginTop: 10
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
    color: '#fa7d64',
    fontFamily: 'CORBEL',
    fontSize: 16
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
    position: 'absolute',
    bottom: 25,
    left: 38,
  },
  likeTopImage:{
    position: 'absolute',
    bottom: 10,
    right: 30,
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
