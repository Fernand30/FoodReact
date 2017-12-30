const React = require("react-native");
const { Dimensions, Platform } = React;
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
const deviceHeight = Dimensions.get("window").height;
const imagesize = responsiveHeight(10);
export default {
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
  hamburgerImage: {

  },
  headerTextInputView: {
    flex: 1,
    flexDirection: 'row',
    height: 45, 
    borderRadius: 3,
    backgroundColor: 'white',
    alignItems: 'center',
    marginHorizontal: 10
  },
  headerRightView: {
    
  },
  recycleImage: {

  },
  searchImage: {
    marginLeft: 10
  },
  headerTextInput: {
    flex: 1,
    marginLeft: 10,
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
  tabText:{
    color: '#deb4ab',
  },
  scrollView:{
    flex: 1,
    backgroundColor: 'white',
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
  ticketImage:{

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
    color: '#fa7d64'
  },
  itemView:{
    alignItems: 'center'
  },
  foodImage:{

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
  }
};
