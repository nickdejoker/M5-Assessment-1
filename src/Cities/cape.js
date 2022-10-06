import React from 'react';
import { View, Text , StyleSheet , TouchableOpacity ,ScrollView, ImageBackground,Image ,Dimensions,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Entypo } from '@expo/vector-icons'; 
import MapView from 'react-native-maps';
import SlidingUpPanel from 'rn-sliding-up-panel';


export default function  Pretoria({ navigation }) {
  return (
  <View style={styles.container}>
    <ImageBackground  source={require('../../assets/C3.jpg')} sizeMode="cover" style={styles.image}>

      <Text style={styles.textH}>CapeTown</Text>
      <Text style={styles.textB}>
      The most visited city in South Africa, Cape Town is a gorgeous heartwarming place to go. Located at the farthest southwest, the city is the gateway to the Cape Peninsula. The shimmering waters, countless beaches along with the backdrop of the imposing Table Mountain make the cityscape one of the most picturesque in the world.</Text>
      <View style={styles.items}>
      <Image 
      style={styles.pic}
       source={require('../../assets/C2.jpg')} />
        <Image 
          style={styles.pic}
       source={require('../../assets/cape.jpg')} />
     </View>
    </ImageBackground>
    <Button title='Click to view location' onPress={() => this._panel.show()} />
        <SlidingUpPanel ref={c => this._panel = c}>
       
          <View style={styles.container}>
            <Text>Location</Text>
            <Button title='Hide' onPress={() => this._panel.hide()} />
            <ScrollView> 
            <View style={styles.Maper}>
      <MapView style={styles.map} 
        initialRegion={{
          latitude: -33.924870,
          longitude:18.424055,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
      }}
      />
   </View>
    </ScrollView>
    </View>
    </SlidingUpPanel>
  </View>
)
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: "center",
  
    },
    textB: {
     
      fontSize: 20,
      fontWeight: "bold",
      marginLeft:15,
      color:'white'
  
    },
    textC: {
     
      fontSize: 25,
      fontWeight: "bold",
      marginLeft:15,
      color:'blue'
  
    },
    textH: {
      color: "#9932cc",
      fontSize: 35,
      fontWeight: "bold",
      alignItems:'center',
      justifyContent:'center'
    
    },
      containerS: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
      },
    text: {
      color: "#e6e6fa",
      fontSize:25 ,
      fontWeight: "bold",
      lineHeight:25,
      marginTop:270
    },
    button: {
      height:30,
      width :2300,
    
  
      borderRadius:7
    },
    items :{
      flexDirection:'row',
      width:150,
      alignItems:'center'
     },
     pic :{
     
          height:330,
          width:200,
          marginTop:3,
          marginLeft:5
        
     },
     Maper: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  })