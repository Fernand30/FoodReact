import {StyleSheet} from 'react-native'

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
  marginView:{
    marginTop: 10,
    marginBottom: 5,
    paddingHorizontal: 20,
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
    position: 'absolute',
    bottom: 25,
    left: 38,
  },
  likeTopImage:{
    position: 'absolute',
    bottom: 10,
    right: 30,
  },

  rightView:{
    flex: 1,
    alignItems: 'center',
    alignItems:'flex-end'
  },
  flexRowView:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  leftView:{
    flex:1,
    flexDirection:'row',
    alignItems:'center'
  },
  rightView2:{
    flex: 1,
    alignItems: 'center',
  },
  rightnumberView:{
    flexDirection:'row',
    alignItems:'center'
  },
  likeBottomImage:{
    position: 'absolute',
    bottom: 100,
    right: 30,
  },
  itemView:{
    alignItems: 'center'
  },
  itemBackground:{
    marginTop: 10,
    backgroundColor:'white'
  },
  bigText:{
    fontSize: 16,
    fontFamily: 'CORBEL'
  },
  numberText: {
    fontSize: 16,
  },
  smallshaText:{
    fontSize: 12,
    color:'#b7b7b7',
    fontFamily: 'CORBEL',
    marginTop: 3
  },
  smallshanumberText:{
    fontSize: 12,
    color:'#b7b7b7',
  },
  redView:{
    flexDirection:'row',
    paddingHorizontal: 10,
    paddingVertical: 0,
    borderColor: '#e98e9a',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent:'center'
  },
  redText:{
    marginLeft: 5,
    color: '#e98e9a',
    fontSize: 18,
    fontFamily: 'CORBEL',
  }
})
