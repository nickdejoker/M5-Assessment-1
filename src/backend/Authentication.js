import * as firebase from 'firebase';
import { Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export async function registration(email,password,{navigation}){
  
  firebase.auth().createUserWithEmailAndPassword(email,password)
  .then(userCredentials =>{
    const user=userCredentials.user;
    Alert.alert(
      'Congratulations',
      'You are registered', // <- this part is optional, you can pass an empty string
      [
        {text: 'Login', onPress: () => navigation.navigate('Onboard')},
      ],
      {cancelable: false},
    );
  })
  .catch(error =>alert(error.message))
}


  