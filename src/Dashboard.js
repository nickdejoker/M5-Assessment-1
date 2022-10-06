import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text , StyleSheet , TouchableOpacity , ImageBackground,Image,Dimensions} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { Entypo } from '@expo/vector-icons'; 


export default function  Dashboard({ navigation })
{
  return (
<SafeAreaView style={{flex: 1 ,backgroundColor: 'black'}}>
  <ScrollView>
  <StatusBar translucent={false}/>
  <View style={styles.container}>
  <TouchableOpacity style={styles.container} onPress={()=> navigation.navigate('Onboard')}>
  <Ionicons name="arrow-back-circle-outline" size={45} color="gray" />
    </TouchableOpacity>
  <Text style={{color:'white' , textAlign:'center', fontSize:30 }}>South Africa</Text>
  <TouchableOpacity style={styles.container} onPress={()=> navigation.navigate('User')}>
  <FontAwesome5 name="user-circle" size={45} color="gray"  />
  </TouchableOpacity>
 </View>
<View>
<Text style={{color:'white' , textAlign:'left' , fontSize:30}}>Explore </Text>
<Text style={{color:'white' , textAlign:'left', fontSize:30 }}>the beautiful Cities </Text>
</View>
</ScrollView>
<ScrollView
horizontal
showsHorizontalScrollIndicator={false}
style={{marginRight:20,marginTop:-10}}
>
  <View 
  style={{
    backgroundColor:'black',
    height:510,
    width:330,
    borderRadius:20,
    marginRight:20,
    padding:4 ,
    overflow:'hidden'            
    
  }}>
      <ImageBackground
    source={require('../assets/PRE3.jpg')}
    style={{width:330,borderRadius:10,height:500}}
    >
      <View style={styles.items}>
      <Entypo name="location" size={24} color="pink" />
      <Text >Pretoria, Gauteng</Text>
      </View>

    </ImageBackground>
    <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Pretoria')}>
      <Text style={styles.textB}>
      Explore
      </Text>
      </TouchableOpacity>

  </View>
  <View 
  style={{
    backgroundColor:'black',
    height:510,
    width:330,
    borderRadius:20,
    marginRight:20,
    padding:4 ,
    overflow:'hidden'            
    
  }}>
      <ImageBackground
    source={require('../assets/2.jpg')}
    style={{width:330,borderRadius:10,height:500}}
    >
      <View style={styles.items}>
      <Entypo name="location" size={24} color="pink" />
      <Text >Johannesburg, Gauteng'</Text>
      </View>
    </ImageBackground>
    <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Jozi')}>
      <Text style={styles.textB}>
      Explore
      </Text>
      </TouchableOpacity>
  </View>
  <View 
  style={{
    backgroundColor:'black',
    height:510,
    width:330,
    borderRadius:20,
    marginRight:20,
    padding:4 ,
    overflow:'hidden'            
    
  }}>
      <ImageBackground
    source={require('../assets/C1.jpg')}
    style={{width:330,borderRadius:10,height:500}}
    >
      <View style={styles.items}>
      <Entypo name="location" size={24} color="pink" />
      <Text > CapeTown, Western Cape</Text>
      </View>
    </ImageBackground>
    <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Cape')}>
      <Text style={styles.textB}>
      Explore
      </Text>
      </TouchableOpacity>

  </View>
  <View 
  style={{
    backgroundColor:'black',
    height:510,
    width:330,
    borderRadius:20,
    marginRight:20,
    padding:4 ,
    overflow:'hidden'            
    
  }}>
      <ImageBackground
    source={require('../assets/D2.jpg')}
    style={{width:330,borderRadius:10,height:500}}
    >
      <View style={styles.items}>
      <Entypo name="location" size={24} color="pink" />
      <Text >Durban, Kwazulu Natal</Text>
      </View>
    </ImageBackground>
    <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Durban')}>
      <Text style={styles.textB}>
      Explore
      </Text>
      </TouchableOpacity>
  </View>
  <View 
  style={{
    backgroundColor:'black',
    height:510,
    width:330,
    borderRadius:20,
    marginRight:20,
    padding:4 ,
    overflow:'hidden'            
    
  }}>
      <ImageBackground
    source={require('../assets/p2.jpg')}
    style={{width:330,borderRadius:10,height:500}}
    >
      <View style={styles.items}>
      <Entypo name="location" size={24} color="pink" />
      <Text >Port Elizabeth, Eastern Cape</Text>
      
      </View>
  
    </ImageBackground>
    <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Port')}>
      <Text style={styles.textB}>
      Explore
      </Text>
      </TouchableOpacity>
  </View>
</ScrollView>
</SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingVertical:20,
    flexDirection:'row',
    justifyContent:'space-between',

  },
  imageCard :{
  height:300,
  width:200,
  marginRight:20,
  },
 items :{
  flexDirection:'row',
  width:150,
  alignItems:'center'
 },
 button: {
  height:30,
  width :150,
  bottom:1,
  marginLeft:70,
  position:'absolute',
  backgroundColor: "#DDDDDD",
  borderRadius:7
 },
 textB: {
   
  fontSize: 20,
  fontWeight: "bold",
  position:'absolute',
  marginLeft:46

},
})