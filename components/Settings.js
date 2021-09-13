import { StackActions } from "@react-navigation/routers";
import React, {useEffect, useState, Component} from "react";
import { Alert, Button, Image, KeyboardAvoidingView, SafeAreaView, Text, TextInput, TouchableHighlight, View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { getDeviceId, getBrand, getManufacturer } from 'react-native-device-info';

let deviceId = getDeviceId();
// let brand = getBrand();
// let manufacturer = getManufacturer();

class Settings extends Component {
    
    createButtonAlert = () =>
      Alert.alert(
        "Device Details",
        deviceId,
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
    
  
    render() {
      return (
        <View style={styles.container}>
          <Button title={"Device Details"} onPress={this.createButtonAlert} />
  
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-around",
      alignItems: "center"
    }
  });
  
  export default Settings;