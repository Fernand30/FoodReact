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
      <View style={styles.itemBackground}>
          <TouchableOpacity onPress  =  {this.props.onPress} style={styles.itemView}>
              <Image source={Images.food1}/>
          </TouchableOpacity>
          <View style={styles.textView}>
              <View style={styles.marginView}>
                  <View style={styles.flexRowView}>
                        <Text style={styles.bigText}>Califonia Tortilla</Text>
                        <Text style={styles.bigText}>30-40 Mins</Text>
                  </View>
                  <View style={styles.flexRowView}>
                        <Text style={styles.smallshaText}>Mexican Vergetarian</Text>            
                        <Text style={styles.smallshaText}>$15 Order Min/Delivery Fee $2.99</Text>             
                  </View>
                  <View style={styles.flexRowView}>
                      <View style={styles.leftView}>
                        <Image source={Images.star_rating}/>
                        <Text style={[styles.smallshaText,{marginLeft: 5,marginTop:3}]}>200 reviews</Text>
                      </View>
                      <View style={styles.rightView}>  
                        <View style={styles.redView}>
                            <Image source={Images.heart}/>
                            <Text style={styles.redText}>100+</Text>
                        </View>
                      </View>  
                  </View>
              </View>    
          </View>    
      </View>    
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
