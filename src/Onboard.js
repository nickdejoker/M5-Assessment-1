import React from 'react';
import { View, Text , StyleSheet , TouchableOpacity , ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'



export default function  Onboard({ navigation }) {
  return (
  <View style={styles.container}>
    <ImageBackground  source={require('../assets/ashi.jpeg')} blurRadius={15} resizeMode="cover" style={styles.image}>

      <Text style={styles.textH}>Welcome Innocent Bystanders</Text>
      <Text style={styles.text}>your one-stop destination for the best CITIES to visit in South Africa.</Text>
      <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Dashboard')}>
      <Text style={styles.textB}>
      Get started
      </Text>
      </TouchableOpacity>

    </ImageBackground>
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

  },
  textH: {
    color: "#9932cc",
    fontSize: 35,
    fontWeight: "bold",
    marginLeft:15,
    position:'absolute'
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
    width :150,
    alignItems: "center",
    justifyContent:"center",
    backgroundColor: "#DDDDDD",
    marginTop:40,
    borderRadius:7
  },
  
})