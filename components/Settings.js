import React, {useEffect, useState, Component} from "react";
import { Alert, Button, Modal, PermissionsAndroid, KeyboardAvoidingView, ToastAndroid, SafeAreaView, Text, TextInput, TouchableHighlight, View, StyleSheet, TouchableOpacity } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import DocumentPicker from 'react-native-document-picker';
import {check, PERMISSIONS, permission, rationale, PermissionStatus, Promise, RESULTS} from 'react-native-permissions';




class Settings extends Component {
   

  constructor(props) {

    super(props)

    this.state = {
        brand:'',
        deviceId:'',
        modalVisible: false   

    }
}

    setModalVisible = async (visible) =>{
    
      this.setState({ modalVisible: visible })

        const brand = DeviceInfo.getBrand()
        const deviceId = DeviceInfo.getDeviceId()


        this.setState({
            brand: brand,
            deviceId: deviceId,
            
        })

    }

    showPositiveToast = () => {
      ToastAndroid.show("Access Granted!", ToastAndroid.SHORT);
    };

    showNegativeToast = () => {
      ToastAndroid.show("Access Denied!", ToastAndroid.SHORT);
    };

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
   
      createPermission = async () => {
        Alert.alert(
          "This app wants to access your camera.",
          "",
          [
            {
              text: "Cancel",
              style: "cancel",
              onPress: () => {this.showNegativeToast()}
            },
            { text: "Grant Access", onPress: () => {this.requestPermission(), this.showPositiveToast()}}
          ]
        );


      }

    requestPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA);
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("You can use the camera");
          
          
        } else {
          console.log("Camera permission denied");
        }
      } catch (err) {
        console.warn(err);
      }
    };

    



  
    render() {
      const { modalVisible } = this.state;
      return (
        <>
        
        <View style={styles.header}>      

          <TouchableHighlight
            underlayColor='lightblue'
            style={{ height: '20%', width: '20%', justifyContent: 'center', alignItems: 'center', }}
            onPress={this.createLogoutBox}>
            <Text>Back</Text>
          </TouchableHighlight>


          <Text style={{ fontSize: 20 }}>Settings</Text>
          
    
        </View>
        
        <View style={styles.container}>
            <Button title={"Device Details"} onPress={() => this.setModalVisible(!modalVisible)} />
             <Button title={"Browse Files"} onPress={this.createDocumentPicker} />
             <Button title={"Permissions"} onPress={this.createPermission}  />

             
             <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
        >

         <View style= {{justifyContent: "center", alignItems: "center", backgroundColor: "white", 
         borderRadius: 5, 
          height:'100%', 
          width:"100%",
          marginRight: 50,
          marginBottom: 100,
          backgroundColor: 'rgba(0,0,0,0.6)'}}>
                    
         

          <View style={{backgroundColor: 'white', borderRadius: 5, height: '25%', width:'85%'}}>
          <Button title={"Close"}  onPress={() => this.setModalVisible(!modalVisible)} />
          <Text >Brand of device: {this.state.brand}</Text>
          <Text >Device ID: {this.state.deviceId}</Text>
            
             </View>
             
             </View>
             </Modal>
             
             
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
      
      
      
    },

    centeredView: {
      
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white", 
      borderRadius: 5, 
      height:'25%', 
      width:"75%",
      marginLeft: 50,
      marginRight: 50,
      marginTop: 100,
      marginBottom: 100
     
      
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
