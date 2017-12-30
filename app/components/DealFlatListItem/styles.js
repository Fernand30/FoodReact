import {StyleSheet} from 'react-native'
//fontFamily: 'CORBEL',
export default StyleSheet.create({
  text: {
    textAlign: 'center',
  },
  cardContainerStyle:{
    borderRadius: 2,
    shadowOffset:{ width: 1,  height: 3, },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    borderWidth:1,
    elevation:3,
    borderColor: '#D3D3D3',
    backgroundColor: 'white'
  },
  cardImageStyle:{
    borderRadius:1,
    shadowOffset:{ width: 1,  height: 3, },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    borderWidth:1,
    elevation:3,
    borderColor: '#D3D3D3',
    backgroundColor: 'white'
  },
  container:{
    flex:1,
    alignItems: 'flex-start',
    flexDirection: "column",
    borderBottomWidth: 0,
    borderTopWidth:0,
    marginTop:0,
  },
  titleStyle:{
    marginTop:0,
    marginLeft: 0,
    fontSize:13,
    color:"black"
  },
  titleContainerStyle:{
    flex: 1,
    alignItems: 'flex-start',
  },
  ratingStyle:{
    flexDirection: "row",
    flex:1
  },
  subtitleStyle:{
    marginLeft: 0,
    fontSize:10
  },
  subtitleContainerStyle:{
    flex: 1,
    alignItems: 'flex-start',
  },
  iconContainerStyle:{
    flex: 1,
    alignItems: 'flex-end',
  },
  button: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b7eff'
  },
  topImage:{
    position: 'absolute',
    top: -5,
    right: 12,
  },
  starImage:{
    marginLeft:0
  },
  titleunderView:{
    borderColor: '#e4e4e4',
    borderBottomWidth:1,
    paddingBottom: 5
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
  itemView:{
    marginTop: 10,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical:10,
    shadowOffset:{ width: 1,  height: 3, },
    shadowColor: 'black',
    shadowOpacity: 0.2,
  },
  title:{
    marginTop: 10,
    fontSize: 16,
    fontFamily: 'CORBEL',
  },
  rowFlex:{
    flexDirection: 'row',
    alignItems:'center',
  },
  rowspaceFlex:{
    marginTop: 10,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
  },
  empytView:{
    backgroundColor: '#e4e4e4',
    width: 1,
    height: 20
  },
  smallText:{
    fontSize: 16,
    fontFamily: 'CORBEL',
    color:'#b7b7b7',
    marginTop: 3
  },
  tinyText:{
    fontSize: 12,
    fontFamily: 'CORBEL',
    color:'#b7b7b7',
    marginTop: 5,
    textAlign:'center'
  },
  numberText:{
    fontSize: 14,
    color:'#b7b7b7',
  },
  smallnumberText:{
    fontSize: 14,
  },
  smallnumberText1:{
    fontSize: 16,
    fontFamily: 'CORBEL',
  },
  columnView:{
    alignItems:'center'
  },
  redView:{
    flexDirection:'row',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderColor: '#e98e9a',
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent:'center'
  },
  redText:{
    marginLeft: 5,
    color: '#e98e9a',
    fontSize: 14,
    fontFamily: 'CORBEL',
  }
})
