import { StackActions } from "@react-navigation/routers";
import React, {useEffect, useState, Component} from "react";
import { Alert, Button, Modal, Image, KeyboardAvoidingView, SafeAreaView, Text, TextInput, TouchableHighlight, View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import DeviceInfo from 'react-native-device-info';



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
      

    
  
    render() {
      return (
        <><View style={styles.header}>

          <TouchableHighlight
            underlayColor='lightblue'
            style={{ height: '20%', width: '20%', justifyContent: 'center', alignItems: 'center', }}
            onPress={() => { this.props.navigation.navigate('Login'); } }>
            <Text>Back</Text>
          </TouchableHighlight>


          <Text style={{ fontSize: 20 }}>Settings</Text>
          
    
        </View>
        
        <View style={styles.container}>
            <Button title={"Device Details"} onPress={this.createButtonAlert} />
            {/* <Button title={"Browse Files"} onPress={this.createDocumentPicker} /> */}
          </View></>

        
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
