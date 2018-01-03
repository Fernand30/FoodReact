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
  Bg: {
    width: Constants.width,
    height: Constants.height/5
  },
  congrate:{
    position:'absolute',
    top:20,
    left:20,
    width: Constants.width-40,
    height: Constants.height/5,
    alignItems:'center',
    paddingTop: 30,
    backgroundColor:'white',
    borderColor: '#cacaca',
    borderWidth:1
  },
  congrateText:{
    fontFamily:'CORBEL',
    fontSize: 22,
    fontWeight: 'bold',
  },
  receiveText:{
    marginTop: 20,
    fontFamily:'CORBEL',  
    fontSize: 16,
  },
  scrollHeader: {
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#cacaca'
  },
  titleText:{
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
    flex: 1,
    fontFamily: 'CORBEL',
  },
  scrollText:{
    fontFamily: 'CORBEL',
    fontSize: 16,
  },
  flexText:{
    fontFamily: 'CORBEL',
    fontSize: 14,
  },
  callText:{
    fontFamily: 'CORBEL',
    fontSize: 12,
    color: '#295ee6',
    marginLeft:5,
    marginTop: 5,
  },
  shaText:{
    fontFamily: 'CORBEL',
    fontSize: 14,
    marginLeft: 20,
    color: '#dadada',
  },
  shaText1:{
    fontFamily: 'CORBEL',
    fontSize: 14,
    color: '#dadada',
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
  rowView:{
    flexDirection: 'row',
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
  dateView:{
    width: Constants.width/4,
    paddingLeft: 10,
    justifyContent:'center'
  },
  circleView:{
    width: Constants.width/8,
    alignItems:'center'
  },
  grayBar:{
    width:1,
    backgroundColor:'#e9e9e9',
    height: Constants.width/10,
  },
  greenBar:{
    width:1,
    backgroundColor:'#1fc435',
    height: Constants.width/10,
  },
  greenBar1:{
    width:1,
    backgroundColor:'#1fc435',
    height: Constants.width/20,
  },
  greenCircle:{
    width: Constants.width/8,
    height: Constants.width/8,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
    borderColor: '#1fc435',
    borderRadius: Constants.width/16,
  },
  remainView:{
    flex:1,
    paddingLeft:20,
  },
  remainrowView:{
    flex:1,
    paddingLeft:20,
    flexDirection:'row'
  },
  liv:{
    width:Constants.width/10,
    height:Constants.width/10,
    resizeMode:'cover'
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
  spoon:{
    height: Constants.width/16,
    width: Constants.width/20,
    resizeMode:'stretch'
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
