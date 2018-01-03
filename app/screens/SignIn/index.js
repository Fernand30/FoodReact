import React, { Component } from "react"
import { View, ScrollView, Text, Image, FlatList, TouchableOpacity, ActivityIndicator, TextInput } from "react-native"
import { List, ListItem, SearchBar, Icon} from "react-native-elements"
import {Colors, Fonts, Metrics, Images, Constants} from "../../themes"
import MapView from 'react-native-maps';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types'
import styles from './styles'
import Menu from '../menu/Menu';
import SideMenu from 'react-native-side-menu';

const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const ASPECT_RATIO = Constants.width / Constants.height;
const LATITUDE_DELTA = 0.01;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
class OrderConfirmed extends Component {
  constructor(props){
    super(props)
    this.state = {
     region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      isOpen: false,
      selectedItem: '',
     } 
  }

  toggle() {
    this.setState({
      isOpen: true,
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }

  onMenuItemSelected = item =>{
    if(item=='home') Actions.home()
    if(item=='signup') Actions.signup()
    this.setState({
      isOpen: false,
      selectedItem: item,
    });
  }

  goSignup(){
    Actions.signup()
  }

  render(){
    const menu = <Menu onItemSelected={this.onMenuItemSelected} />;
  	return(
     <SideMenu
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={isOpen => this.updateMenuState(isOpen)}
      > 
      <View style = {styles.container}>
          <View style={{height:20,}}/>
          <View style={styles.headerView}>
              <TouchableOpacity onPress={this.toggle.bind(this)}>
                  <Image source={Images.menu_hamburger} style={styles.hamburgerImage}/>
              </TouchableOpacity>
              <Text style={styles.titleText}>Login to MenuJet</Text>
              <View>
                  <Image source={Images.recycle}/>
              </View>    
           </View>
           <View style={styles.loginView}>
              <Text style={styles.logo}>LOGO</Text>
              <TouchableOpacity style={styles.facebook}>
                <View style={styles.sideView}>
                  <Text style={styles.faceText}>f</Text>
                </View>
                <View style={{flex:1,alignItems:'center'}}>
                  <Text style={styles.facesignText}>Sign in With Facebook</Text>
                </View>
                <View  style={styles.sideView}/>
              </TouchableOpacity>
              <Text style={styles.commonText}>OR</Text>
              <Text style={styles.commonText}>Sign in with your email address</Text>
              <TextInput style={styles.textInput} placeholder='Email Address' />
              <TextInput style={styles.textInput} secureTextEntry={true} placeholder='Password' />
              <TouchableOpacity style={styles.singinButton}>
                  <Text style={styles.signin}>Sign in</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                  <Text style={styles.forgotText}>Forgot Password?</Text>
              </TouchableOpacity>
              <Text style={styles.dontText}>Don&rsquo;t have an account yet?{'\n'}Register and unlock more deals and savings!</Text>
              <TouchableOpacity onPress={this.goSignup.bind(this)} style={styles.singupButton}>
                  <Text style={styles.signup}>Sign up</Text>
              </TouchableOpacity>
           </View>      
      </View>
     </SideMenu> 
    )
  }
}


OrderConfirmed.contextTypes = {
  store: PropTypes.object
}

export default OrderConfirmed
