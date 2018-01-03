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
      <View style = {styles.container}>
          <View style={{height:20,}}/>
          <View style={styles.headerView}>
              <TouchableOpacity onPress={this.toggle.bind(this)}>
                  <Image source={Images.menu_hamburger} style={styles.hamburgerImage}/>
              </TouchableOpacity>
              <Text style={styles.titleText}>Order Confirmed</Text>
              <View style={styles.headerRightView}>
                  <View style={styles.notificationview}>
                      <Text style={styles.notificationNumber}>1</Text>
                  </View>
                  <Image source={Images.recycle} style={styles.recycleImage}/>
              </View>    
           </View>
           <ScrollView style={{backgroundColor:'white'}}>        
              <Image source={Images.Bg} style={styles.Bg}/>
              <View style={styles.congrate}>
                <Text style={styles.congrateText}> Congrates!</Text>
                <Text style={styles.receiveText}> We&rsquo;ve received your order!</Text>
              </View>                      
              <View style={styles.scrollHeader}>
                <Text style={styles.scrollText}>You can track your order right here.</Text>
              </View> 
              <View style={styles.rowView}>
                  <View style={styles.dateView}>
                      
                  </View>
                  <View style={styles.circleView}>
                      <View style={styles.greenBar}/>
                  </View>
                  <View style={styles.remainView}>
                      
                  </View>
              </View> 
              <View style={styles.rowView}>
                  <View style={styles.dateView}>
                      <Text style={styles.flexText}>11:01 AM</Text>
                  </View>
                  <View style={styles.circleView}>
                      <View style={styles.greenCircle}>
                        <Image source={Images.greencheck}/>
                      </View>
                  </View>
                  <View style={styles.remainView}>
                      <Text style={styles.flexText}>Restaurant has accepted{'\n'}your order</Text>
                  </View>
              </View> 
              <View style={styles.rowView}>
                  <View style={styles.dateView}>
                      
                  </View>
                  <View style={styles.circleView}>
                      <View style={styles.greenBar1}/>
                  </View>
                  <View style={styles.remainView}>
                      
                  </View>
              </View> 
              <View style={styles.rowView}>
                  <View style={styles.dateView}>
                      <Text style={styles.flexText}>11:15 AM</Text>
                  </View>
                  <View style={styles.circleView}>
                      <View style={styles.greenCircle}>
                        <Image source={Images.spoon} style={styles.spoon}/>
                      </View>  
                  </View>
                  <View style={styles.remainView}>
                      <Text style={[styles.flexText,{marginTop:15}]}>Driver Assigned</Text>
                  </View>
              </View>
              <View style={styles.rowView}>
                  <View style={styles.dateView}>
                      
                  </View>
                  <View style={styles.circleView}>
                      <View style={styles.greenBar}/>
                  </View>
                  <View style={styles.remainrowView}>
                      <Image source={Images.LIVREUSE} style={styles.liv}/>
                      <View>
                        <Text style={styles.shaText}>Ollie Sutton</Text>
                        <View style={styles.remainrowView}>
                          <Image source={Images.phone}/>
                          <Text style={styles.callText}>Call Driver</Text>
                        </View>
                      </View>
                  </View>
              </View>
              <View style={styles.rowView}>
                  <View style={styles.dateView}>
                      
                  </View>
                  <View style={styles.circleView}>
                      <View style={styles.grayBar}/>
                  </View>
                  <View style={styles.remainView}>
                      
                  </View>
              </View>  
              <View style={styles.rowView}>
                  <View style={styles.dateView}>
                      <Text style={styles.flexText}>11:30 AM</Text>
                  </View>
                  <View style={styles.circleView}>
                      <View style={styles.greenCircle}>
                        <Image source={Images.Fill} style={styles.spoon}/>
                      </View>  
                  </View>
                  <View style={styles.remainView}>
                      <Text style={styles.flexText}>Driver has picked up your food!</Text>
                      <Text style={styles.shaText1}>Food will soon arrive. Get ready!</Text>
                  </View>
              </View>
              <View style={styles.rowView}>
                  <View style={styles.dateView}>
                      
                  </View>
                  <View style={styles.circleView}>
                      <View style={styles.grayBar}/>
                  </View>
                  <View style={styles.remainView}>
                      
                  </View>
              </View> 
              <View style={styles.rowView}>
                  <View style={styles.dateView}>
                      <Text style={styles.flexText}>11:40 AM</Text>
                  </View>
                  <View style={styles.circleView}>
                      <View style={styles.greenCircle}>
                        <Image source={Images.flag} style={styles.spoon}/>
                      </View>  
                  </View>
                  <View style={styles.remainView}>
                      <Text style={styles.flexText}>Enjoy food Delivered :)</Text>
                      <Text style={styles.shaText1}>Let us know if you faced an issue{'\n'}your order.</Text>
                  </View>
              </View>
              <MapView
                style={{
                  width:Constants.width,
                  height:Constants.height-400,
                  backgroundColor:'#ff0000',
                }}
                initialRegion={this.state.region}
              >
              <MapView.Marker coordinate={{latitude: LATITUDE+0.003,longitude: LONGITUDE-0.005,}}>
                <Image
                  source={Images.LIVREUSE}
                  style={styles.liv}
                />
              </MapView.Marker>
              
              <MapView.Marker
                image={Images.Fill}
                coordinate={{latitude: LATITUDE+0.0007,longitude: LONGITUDE+0.0012,}}
              />
              </MapView>                         
          </ScrollView>        
      </View>
     </SideMenu> 
    )
  }
}


OrderConfirmed.contextTypes = {
  store: PropTypes.object
}

export default OrderConfirmed
