import React, {useEffect, useState, Component} from "react";
import { Alert, Button, Modal, PermissionsAndroid, Image, KeyboardAvoidingView, SafeAreaView, Text, TextInput, TouchableHighlight, View, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import DocumentPicker from 'react-native-document-picker';
import {check, PERMISSIONS, permission, rationale, PermissionStatus, Promise, RESULTS} from 'react-native-permissions';


class Settings extends Component {

  constructor(props) {

    super(props)

    this.state = {
        brand:'',
        deviceId:''   

    }
}

    createButtonAlert = async () =>{
        const brand = DeviceInfo.getBrand()
        const deviceId = DeviceInfo.getDeviceId()
        

        console.log(brand)
        console.log(deviceId)  
      
        
       Alert.alert("Brand of device: " + brand + "\nDevice ID: "+ deviceId)



        this.setState({
            brand: brand,
            deviceId: deviceId,
            


        })
    }

    createDocumentPicker = async () =>{

      // Single File Picker
try {
  const res = await DocumentPicker.pick({
    type: [DocumentPicker.types.images]
  });
  console.log(
    res.uri,
    res.type,
    res.name,
    res.size,
  )
} catch (err) {
  if (DocumentPicker.isCancel(err)) {
  
  } else {
    throw err
  }
}


    }

    createLogoutBox = () =>
    Alert.alert(
      "Do you want to Logout?",
      "",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { text: "OK", onPress: () => this.props.navigation.navigate('Login')}
      ]
    );
   //this.props.navigation.navigate('Login');
  
    render() {
      return (
        <><View style={styles.header}>      

          <TouchableHighlight
            underlayColor='lightblue'
            style={{ height: '20%', width: '20%', justifyContent: 'center', alignItems: 'center', }}
            onPress={this.createLogoutBox}>
            <Text>Back</Text>
          </TouchableHighlight>


          <Text style={{ fontSize: 20 }}>Settings</Text>
          
    
        </View>
        
        <View style={styles.container}>
            <Button title={"Device Details"} onPress={this.createButtonAlert} />
             <Button title={"Browse Files"} onPress={this.createDocumentPicker} />
             <Button title={"Permissions"}  />
          </View>

          
          </>

        
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      
      
      alignItems: "center",
      flex: 9,
      backgroundColor: 'white',
      
      alignItems: 'center'
      
    },

    header: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'lightblue',
      justifyContent: 'flex-start',
      alignItems: 'center',
      
  }
  });
  
  export default Settings;
