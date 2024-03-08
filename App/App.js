import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './screens/Splash';
import SignUp from './screens/SignUp';
import Login from './screens/Login';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();


export default function App() {
  
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name ="HomePage" component={HomeScreen}/>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name= "Login" component={Login} />
      <Stack.Screen name = "SignUp" component={SignUp}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

