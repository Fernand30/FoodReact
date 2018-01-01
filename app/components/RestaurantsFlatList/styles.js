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
  text: {
    textAlign: 'center'
  },
  headerTextInputView: {
    flex: 1,
    flexDirection: 'row',
    height: Constants.Marin12,
    borderRadius: 3,
    backgroundColor: 'white',
    alignItems: 'center',
    marginHorizontal: Constants.Marin2,
    marginTop: Constants.Marin2,
    marginBottom: Constants.Marin2,

  },
  HeaderSearchTabView:{
    marginTop: Constants.Marin2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: "#fa7d64",
    paddingHorizontal: Constants.Marin2,
  },
  searchImage: {
    marginLeft: Constants.Marin2,
  },
  headerTextInput: {
    flex: 1,
    marginLeft: Constants.Marin2,
    color: "#fa7d64",
    fontSize:Constants.Font16,
  },
  TabView:{
    marginTop: Constants.Marin2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Constants.Marin2,
  },
  selecTabText:{
    color: 'white',
    fontFamily: 'CORBEL',
    fontSize: Constants.Font2
  },
  tabText:{
    color: '#deb4ab',
    fontFamily: 'CORBEL',
    fontSize: Constants.Font2
  },
  scrollView:{
    flex: 1,
    backgroundColor: '#f5f5f8',
  },
  headerRightView:{
    justifyContent:'center',
    marginTop: Constants.Marin1,
  },
  lookButton:{
    marginTop: Constants.Marin4,
    marginBottom: Constants.Marin2,
    flexDirection: 'row',
    height: Constants.Marin12,
    marginHorizontal: Constants.Marin4,
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
