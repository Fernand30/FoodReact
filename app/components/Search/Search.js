import React, { Component } from 'react'
import { View,StatusBar, ImageBackground,ScrollView, Text, Image, FlatList, TouchableOpacity, ActivityIndicator, TextInput } from "react-native"
import { Actions } from 'react-native-router-flux';
import {Colors, Fonts, Metrics, Images, Constants} from "../../themes"
import styles from './styles'

class Search extends Component{

  goForward(){
  	Actions.restaurants()
  }	

  render(){
    return(
      	<ImageBackground source={Images.sushi_925x} style={styles.backgroundImage}>

      		<ImageBackground source={Images.backgroundUp} style={styles.backgroundImage}>
      		
      			<View style={{height:20,}}/>
      			<Image source={Images.menu_hamburger} style={styles.menu_hamburger} />
      			<Text style={styles.text}>Where do you{'\n'}want us to bring {'\n'}your food?</Text>
      			<View style={styles.inputView}>
      				<Image source={Images.Inverse} style={styles.Inverse} />
      				<TextInput style={styles.textInput} placeholder='Enter your street address here...' />
      				<View style={styles.questionView}>
      					<Text style={styles.qustion}>?</Text>
      				</View>
      			</View>
      			<TouchableOpacity onPress={this.goForward.bind(this)} style={styles.buttonView}>
      				<Text style={styles.buttonText}>SEARCH</Text>
      			</TouchableOpacity>	
        	</ImageBackground>	
        </ImageBackground>		
    )
  }
}

export default Search
