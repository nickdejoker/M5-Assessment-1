import * as firebase from 'firebase';
import { Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


export async function getIn(email, password, { navigation }) {
  try {
    firebase.auth().signInWithEmailAndPassword(email, password)
    Alert.alert(
      'Enjoy',
      '', // <- this part is optional, you can pass an empty string
      [
        { text: 'Login', onPress: () => navigation.navigate('Onboard') },
      ],
      { cancelable: false },
    );
  } catch (error) {
    Alert.alert(error.message);
  }
}

