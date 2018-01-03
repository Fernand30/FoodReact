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

  goHistory(){
    Actions.orderhistory()
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
              <Text style={styles.titleText}>Signup with MenuJet</Text>
              <View>
                  <Image source={Images.recycle}/>
              </View>    
           </View>
           <View style={styles.rowView}>
              <Text style={styles.commonText}>Name</Text>
              <Text style={styles.commonText}>Alexandra Karev</Text>
           </View>
           <View style={styles.rowView}>
              <Text style={styles.commonText}>Email</Text>
              <Text style={styles.commonText}>alexandra@five.agancy</Text>
           </View>
           <View style={styles.rowView}>
              <Text style={styles.commonText}>Password</Text>
              <TextInput style={styles.textInput} secureTextEntry={true} value='Password' />
           </View>
           <View style={styles.rowView}>
              <Text style={styles.commonText}>Notifications</Text>
              <Switch value={this.state.val} onValueChange={(value) =>this.valuChang(value)}/>
           </View> 
           <View style={styles.buttonView}>
              <TouchableOpacity onPress={this.goHistory.bind(this)} style={styles.saveButtonView}>
                  <Text style={styles.saveText}>Save Settings</Text>
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
