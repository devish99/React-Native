import React from 'react';
import { Button, Image, KeyboardAvoidingView, SafeAreaView, Text, TextInput, TouchableHighlight, View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/HomeScreen';
import Login from './components/Login';
import Settings from './components/Settings';


const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

 function HomeStack(){
   return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Settings" component={Settings} /> 
  </Tab.Navigator>
    );}

function LoginStack(){
  return(
       <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login" >
  
        <Stack.Screen name="Login" component={Login} />
   
        </Stack.Navigator>
  );
}
 

const App = () => {
  return (
     <NavigationContainer>
       <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login" >
  
  <Stack.Screen name="Login" component={Login} />
  <Tab.Screen name="Home" component={HomeStack} />
    <Tab.Screen name="Settings" component={Settings} /> 
</Stack.Navigator>
    
     </NavigationContainer>
     

    
  )
}


export default App;
