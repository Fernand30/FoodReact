import React, { Component } from 'react'
import { View,StatusBar, ImageBackground,ScrollView, Text, Image, FlatList, TouchableOpacity, ActivityIndicator, TextInput } from "react-native"
import { Actions } from 'react-native-router-flux';
import {Colors, Fonts, Metrics, Images, Constants} from "../../themes"
import SideMenu from 'react-native-side-menu';
import styles from './styles'
import Menu from '../../screens/menu/Menu';

class Search extends Component{

  constructor(props){
    super(props);
      this.state = ({
        isOpen: false,
        selectedItem: '',
      });
  }

  goForward(){
  	Actions.restaurants()
  }	

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }

  onMenuItemSelected = item =>{
    if(item=='login') Actions.signin()
    if(item=='signup') Actions.signup()
    
    this.setState({
      isOpen: false,
      selectedItem: item,
    });
  }
    
  render(){
    const menu = <Menu onItemSelected={this.onMenuItemSelected} />;
    return(
      <SideMenu
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={isOpen => this.updateMenuState(isOpen)}
      >
      	<ImageBackground source={Images.sushi_925x} style={styles.backgroundImage}>

      		<ImageBackground source={Images.backgroundUp} style={styles.backgroundImage}>
      		
      			<View style={{height:20,}}/>
            <TouchableOpacity onPress={this.toggle.bind(this)}>
      			   <Image source={Images.menu_hamburger} style={styles.menu_hamburger} />
            </TouchableOpacity>   
      			<Text style={styles.whereText}>Where do you{'\n'}want us to bring {'\n'}your food?</Text>
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
      </SideMenu>  	
    )
  }
}

export default Search
