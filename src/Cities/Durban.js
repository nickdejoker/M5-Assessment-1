import React from 'react';
import { View, Text , StyleSheet , TouchableOpacity ,ScrollView, ImageBackground,Image ,Dimensions,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Entypo } from '@expo/vector-icons'; 
import MapView from 'react-native-maps';
import SlidingUpPanel from 'rn-sliding-up-panel';


export default function  Durban({ navigation }) {
  return (
  <View style={styles.container}>
    <ImageBackground  source={require('../../assets/D4.jpg')} sizeMode="cover" style={styles.image}>

      <Text style={styles.textH}>Durban</Text>
      <Text style={styles.textB}>
      The third largest city in South Africa is a bustling place, thanks in part to its gigantic port – the largest in Africa. Much has changed in recent decades – the end of apartheid saw the city welcome many nearby Kwa-Zulu residents, who now make Durban one of the most African cities in the country. In addition to this, its huge Indian population also gives it an Asian flair, as demonstrated by the streets, markets and restaurants which you´ll come across. 
      </Text>
           <View style={styles.items}>
      <Image 
      style={styles.pic}
       source={require('../../assets/D3.jpg')} />
        <Image 
          style={styles.pic}
       source={require('../../assets/dur.jpg')} />
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
          latitude: -29.858681,
          longitude: 31.021839,
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