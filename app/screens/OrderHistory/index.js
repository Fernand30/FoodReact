import React, { Component } from "react"
import { View, ScrollView, Text, Image, FlatList, TouchableOpacity, ActivityIndicator, TextInput, Switch} from "react-native"
import { List, ListItem, SearchBar, Icon} from "react-native-elements"
import {Colors, Fonts, Metrics, Images, Constants} from "../../themes"
import MapView from 'react-native-maps';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types'
import styles from './styles'
import Menu from '../menu/Menu';
import SideMenu from 'react-native-side-menu';

class OrderConfirmed extends Component {
  constructor(props){
    super(props)
    this.state = {
      isOpen: false,
      selectedItem: '',
      isCheck:true,
      val: true
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

  onAgree(){
    this.setState({
      isCheck:!this.state.isCheck
    })
  }

  onMenuItemSelected = item =>{
    if(item=='home') Actions.home()
    if(item=='login') Actions.signin()
    if(item=='signup') Actions.signup()
    this.setState({
      isOpen: false,
      selectedItem: item,
    });
  }

  valuChang(val){
    this.setState({
      val:val
    })
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
              <Text style={styles.titleText}>Order History</Text>
              <View>
                  <Image source={Images.recycle}/>
              </View>    
           </View>
           <View style={styles.mainView}>
               <View style={styles.rowView}>
                  <View>
                    <Text style={styles.commonText1}>Big Bowf</Text>
                    <Text style={styles.commonText2}>Rice nuddles, Crispy Tofu</Text>
                  </View>
                  <View style={{alignItems:'flex-end'}}>
                    <Text style={styles.commonText1}>$10.95</Text>
                    <Text style={styles.commonText2}>Jan 2nd 2018 6:05 pm</Text>
                  </View>
               </View>
               <View style={styles.rowView}>
                  <View>
                    <Text style={styles.commonText1}>Big Bowf</Text>
                    <Text style={styles.commonText2}>Rice nuddles, Crispy Tofu</Text>
                  </View>
                  <View style={{alignItems:'flex-end'}}>
                    <Text style={styles.commonText1}>$10.95</Text>
                    <Text style={styles.commonText2}>Jan 2nd 2018 6:05 pm</Text>
                  </View>
               </View>
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
