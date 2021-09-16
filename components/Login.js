import React from 'react';
import { Button, Alert, Image, KeyboardAvoidingView,  SafeAreaView, Text, TextInput, TouchableHighlight, View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


// const DATA = [
//     {
//         id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//         title: 'First Item',
//     },
//     {
//         id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//         title: 'Second Item',
//     },
//     {
//         id: '58694a0f-3da1-471f-bd96-145571e29d72',
//         title: 'Third Item',
//     },
// ];


class Login extends React.Component {
    
    
    constructor(props) {

        super(props)

        this.state = {
            userName: '',
            password: '',
            mobileNo:'',
            txnID:'3fa85f64-5717-4562-b3fc-2c963f66afa6',
            loginStatus: false,
            loading: true,
            chartname: null
            
           
        }
    }
    // async componentDidMount() {
    //     // POST request using fetch with async/await
    //     // const requestOptions = {
    //     //     method: 'POST',
    //     //     headers: { 'Content-Type': 'application/json' },
    //     //     body: JSON.stringify({ title: 'React POST Request Example' })
    //     // };
    //     const response = await fetch('https://reqres.in/api/posts', requestOptions);
    //     const data = await response.json();
    //     this.setState({ postId: data.id });  
    // }

    async generateOTP () {
        
        
        const requestOptions = {
            method: 'POST',
             headers: { 'x-api-key' : '3sjOr2rmM52GzhpMHjDEE1kpQeRxwFDr4YcBEimi', 'Content-Type': 'application/json' },
            body: JSON.stringify({ mobile: this.state.mobileNo})
            
        };

        const response = await fetch('https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP', requestOptions);
        const data = await response.json();
        //console.log("API Response: " + JSON.stringify(requestOptions.body))
        // this.setState({ 
            
        //     OTP: data.txnID
        
        // })
        console.log("API Response: " + JSON.stringify(this.state.mobileNo))
        console.log("API Response: " + (this.state.txnID))

        
            

        } 
        // console.log("\n\nLogin Screen component Did mount called")
            
        //     .then(async (response) => {
        //         console.log("works" )

        //         const data = await response.json()

        //         console.log("API Response: " + JSON.stringify(response))
                
        //         this.setState({ 
                    
        //             txnID: data.id
        //         })

        //         console.log("API Response: " + this.state.txnID)

        //         if (this.state.txnID.length > 10)
        //         this.loginCheck()

        //         else
        //         Alert.alert()


        //     })

           // .catch(error => console.log("Error from fetch : " + error))


        // this.successResponse()
    

    successResponse = () => {
        setTimeout(() => this.setState({ loading: false }), 5000)
    }

    loginCheck = () => {
        console.log("\n\nLogin Check function called")
        if (this.state.userName.length > 0) {

            this.setState({ loginStatus: true, loading: false }, () => { console.log("\n\nLogin Status state changed to True ") })
            this.props.navigation.navigate('HomeNav', {screen:'Home' , params: {user: this.state.userName, pass: this.state.password }})
        }
        else
            this.setState({ loginStatus: false }, () => { console.log("\n\nLogin Status state changed to False ") })
    }

    listItemBox = (item) => {
        <View>
            {item.title}
        </View>
    }

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "#290",
                }}
            />
        );
    };


    render() {
        return (
            <KeyboardAwareScrollView
                contentContainerStyle={styles.container}
                extraHeight={10}
            // enableOnAndroid={true}
            >

                <View style={styles.header}>
                    <Text style={{ fontSize: 20 }}>Login</Text>
                </View>

                <View style={styles.mainLoginContainer}>

                    

                    <View style={{ flex: 8, maxHeight: '50%', width: '80%', backgroundColor: 'lightgrey', borderColor: 'grey', borderRadius: 10, borderWidth: 2, justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <TextInput
                            placeholder='Enter Username'
                            onChangeText={(text) => {
                                this.setState({ userName: text })
                                // console.log('\n\n' + this.state.userName)
                            }}
                            style={{ height: '20%', width: '80%', backgroundColor: 'white', borderRadius: 5, borderWidth: 2, borderColor: 'grey' }}
                        />

                        <TextInput
                            placeholder='Enter Password'
                            onChangeText={(text) => { this.setState({ password: text }) }}
                            style={{ height: '20%', width: '80%', backgroundColor: 'white', borderRadius: 5, borderWidth: 2, borderColor: 'grey' }}
                            secureTextEntry={true}
                        />

                        <TextInput
                            placeholder='Enter Mobile Number'
                            onChangeText={(text) => { this.setState({ mobileNo: text }) }}
                            style={{ height: '20%', width: '80%', backgroundColor: 'white', borderRadius: 5, borderWidth: 2, borderColor: 'grey' }}
                        />

                        <TouchableHighlight
                            style={{ height: '20%', width: '80%', backgroundColor: 'orange', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}
                            onPress={() => {this.generateOTP(),this.loginCheck()}}

                        >
                            <Text style={{ fontSize: 20 }}>Login</Text> 
                        </TouchableHighlight>
                    </View>

                    <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center', }}>
                        {/* <ActivityIndicator size='large' color='red' animating={this.state.loading} /> */}

                        <Text style={{ fontSize: 20 }}>User Status : {this.state.loginStatus ? 'Logged In' : 'Not Logged In'}</Text>
                    </View>

                </View>

            </KeyboardAwareScrollView>
        )

    }

}

export default Login


const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        flexDirection: 'column',
        backgroundColor: 'white'
    },

    header: {
        flex: 1,
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center'
    },

    mainLoginContainer: {
        flex: 9,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    logoContainer: {
        flex: 1,
        maxHeight: '25%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red'
    },

    logoImage: {
        height: '55%',
        width: '35%',
        borderColor: 'grey',
        borderWidth: 2
    }
})
