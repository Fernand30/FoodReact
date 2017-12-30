import React, {Component} from 'react';
import { ListItem, Card, Icon } from 'react-native-elements'
import { View, Image, Text,TouchableOpacity} from 'react-native'
import {Rating, AirbnbRating} from 'react-native-ratings'
import { Actions } from 'react-native-router-flux';
import {Colors, Fonts, Metrics, Constants,Images} from "../../themes"
import PropTypes from 'prop-types'
import styles from './styles'


class RestaurantFlatListItem extends Component{
  constructor(props){
    super(props)

    this.state = {like:false}
  }
  handlePress = () => {
    this.props.onPress(this.props.item.id)
  }
  handleIconPress = () => {
    this.setState(previousState => {
      return {like: !previousState.like}
    })
  }
  render(){
    const restaurantId = this.props.item.id
    let likeIcon = this.state.like ? <Icon onPress = {this.handleIconPress} containerStyle= {styles.iconContainerStyle} type="entypo" name = "heart" color= "#f4649b" />:
     <Icon onPress = {this.handleIconPress} containerStyle= {styles.iconContainerStyle} type="entypo" name = "heart" color= "#e6e6e6" />

    let rightInfo =
      <View>
        <Text style={styles.titleStyle}>30-40 Mins</Text>
        <Text style={styles.subtitleStyle}>$15 Order Min/$2.99 Delivery Fee</Text>
        <Text style={styles.subtitleStyle}> </Text>
      </View>

    let leftInfo =
      <View>
        <Text style={styles.subtitleStyle}>{this.props.item.description}</Text>
        <Text style={styles.subtitleStyle}> </Text>
        <View style={styles.ratingStyle}>
          <Rating ref = "child" type='heart' ratingCount={5} imageSize={11}/>
          <Text style={styles.subtitleStyle}> {this.props.item.num_ratings} reviews</Text>
        </View>
      </View>
    // this.refs.child.setCurrentRating(this.props.item.rating)
    return(
      <TouchableOpacity onPress  =  {this.props.onPress} style={styles.itemView}>
          <View style={{alignItems:'center'}}>
            <View style={styles.titleunderView}>
              <Text style={styles.title}>Get a Second Pizza Free with a Large Pizza</Text>
            </View>
          </View>
          <View style={styles.rowspaceFlex}>   
            <View style={styles.rowFlex}>
              <Text style={styles.smallText}>Pizza Mia</Text>
              <Image source={Images.star} style={styles.starImage}/>
              <Text style={styles.smallText}>4.5</Text>
            </View>
            <Text style={styles.smallnumberText1}>$7.95</Text>
          </View> 
          
          <View style={styles.rowspaceFlex}>
            <View style={styles.columnView}>
              <Text style={styles.smallnumberText1}>11:23:40</Text>
              
              <Text style={styles.tinyText}>EXPIRY</Text>
            </View>
            <View style={styles.empytView}/>
            <View style={styles.columnView}>
              <Text style={styles.smallnumberText1}>10+</Text>
              <Text style={styles.tinyText}>AVAILABEL</Text>
            </View>
            <View style={styles.empytView}/>
            <View style={styles.columnView}>
              <View style={styles.redView}>
                <Text style={styles.redText}>100+ Sold</Text>
              </View>
            </View>
          </View>
      </TouchableOpacity>
  )}
}

// <Card containerStyle={styles.cardContainerStyle} image={{uri: this.props.item.image}} imageWrapperStyle={styles.cardImageStyle}>
//         <ListItem
//             containerStyle= {styles.container}
//             title = {this.props.item.restaurantName}
//             titleNumberOfLines = {2}
//             titleStyle= {styles.titleStyle}
//             titleContainerStyle = {styles.titleContainerStyle}
//             titleStyle = {styles.titleStyle}
//             subtitle ={leftInfo}
//             subtitleContainerStyle = {styles.subtitleContainerStyle}
//             rightIcon = {likeIcon}
//             onPress = {this.handlePress}
//         />
//       </Card>

                        

RestaurantFlatListItem.defaultProps = {
  restaurantName: 'I am a Restauronto',
  description: 'eat me',
};

export default RestaurantFlatListItem

// titleNumberOfLines = 2
// titleContainerStyle = null
// titleStyle=null
// subtitleNumberOfLines = 1
// subtitleContainerStyle = null
// subtitleStyle=null
// <View>
// <Card>
//   <View>
//   //Info
//     <View>
//     //Left Info
//     </View>
//     <View>
//     //Right Info
//     </View>
//   </View>
//   <View>
//   //Image
//   </View>
// </Card>
// </View>
