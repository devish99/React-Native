import React from 'react';
import 'react-native-gesture-handler';
import { Button, Image, KeyboardAvoidingView, SafeAreaView, Text, TextInput, TouchableHighlight, View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import Login from './components/Login';
import Settings from './components/Settings';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

 const HomeDrawStack = () =>{
   return (
    <Drawer.Navigator initialRouteName="Login">
    <Drawer.Screen name="Home" component={HomeScreen}/>
    <Drawer.Screen name="Settings" component={Settings} /> 
  </Drawer.Navigator>
    )}

const App = () => {
  
  return (
     <NavigationContainer>
       <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} /> 
          <Stack.Screen name="HomeNav" component={HomeDrawStack} />
           {/* <Stack.Screen name="Home" component={HomeDrawStack} /> */}
          
      </Stack.Navigator>   
      
     </NavigationContainer>
     
 )
}
export default App;
