import React from 'react';
import { Button, Image, KeyboardAvoidingView, SafeAreaView, Text, TextInput, TouchableHighlight, View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


class Login extends React.Component {
    constructor(props) {

        super(props)

        this.state = {
            userName: '',
            password: '',
            loginStatus: false,
            loading: true,
            chartname: null,
            USD_data: {}
        }
    }
    

    componentDidMount = async () => {
        console.log("\n\nLogin Screen component Did mount called")

        fetch('https://api.coindesk.com/v1/bpi/currentprice.json', { method: 'GET' })

            .then(async (response) => {

                const data = await response.json()
                const USD = await data.bpi.USD

                await this.setState({
                    chartname: data.chartName,
                    USD_data: USD,
                    loading: true
                })

            })

            .catch(error => console.log("Error from fetch : " + error))


        // this.successResponse()
    }

    successResponse = () => {
        setTimeout(() => this.setState({ loading: false }), 5000)
    }

    loginCheck = () => {
        console.log("\n\nLogin Check function called")
        if (this.state.userName.length > 0) {

            this.setState({ loginStatus: true, loading: false }, () => { console.log("\n\nLogin Status state changed to True ") })
            this.props.navigation.navigate('Home', { user: this.state.userName, pass: this.state.password })
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

                    {/* <ActivityIndicator size='large' color='red' animating={this.state.loading} /> */}


                    {/* <FlatList
                    data={DATA}
                    renderItem={({ item }) => <Text>{item.title}</Text>}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={this.renderSeparator}
                  // style={{ height: '50%', borderColor: 'black', borderWidth: 2 }}
                  />
                    */}
                    {/* <View style={styles.logoContainer}>
                        <Image
                            style={styles.logoImage} resizeMode='contain'
                            source={require('../assets/download.png')} />
                    </View> */}

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

                        <TouchableHighlight
                            style={{ height: '20%', width: '80%', backgroundColor: 'orange', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}
                            onPress={() => { this.loginCheck() }}

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
