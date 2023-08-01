import React, { useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, TextInput, ImageBackground } from 'react-native';

import cover from '../../assets/images/cover.jpg';

const AdminLogin = ({ navigation }) => {

    const [fdata, setFdata] = useState({
        email: '',
        password: ''
    })

    const [errormsg, setErrormsg] = useState(null)

    return (
        <ImageBackground source={cover} style={styles.container}>

            <View style={{ alignItems: "center", width: 400 }}>
                <Text style={{ color: "white", fontSize: 54, fontWeight: 'bold', marginVertical: 15 }}> Login </Text>
                <View style={{
                    backgroundColor: "white", height: 700, width: 400, borderTopLeftRadius: 130,
                    paddingTop: 100, alignItems: 'center'
                }}>
                    <Text style={{ fontSize: 30, color: 'red', fontWeight: 'bold' }}>Welcome Back</Text>
                    <Text style={{ color: "grey", fontSize: 19, fontWeight: "bold", marginBottom: 20 }}>Login to admin account</Text>

                    {
                        errormsg ? <Text style={styles.errormessage}>{errormsg}</Text> : null
                    }

                    <TextInput style={styles.userinput} placeholder="Username"
                        keyboardType={"email-address"}
                        onChangeText={(text) => setFdata({ ...fdata, email: text })}
                        onPressIn={() => setErrormsg(null)}
                    />
                    <TextInput style={styles.userinput} placeholder="Password"
                        onChangeText={(text) => setFdata({ ...fdata, password: text })}
                        secureTextEntry={true}
                        onPressIn={() => setErrormsg(null)} />

                    <View>
                        <TouchableOpacity style={styles.btn1} onPress={() => navigation.navigate("adminhome")}>
                            <Text style={styles.text7}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </ImageBackground>
    );
};

const styles = StyleSheet.create({

    adminchoose: {
        borderRadius: 30,
        flexDirection: 'row',
    },
    container: {
        flex: 1,
    },
    head: {
        backgroundColor: '#ff0000',
        marginTop: 30,
        borderRadius: 40,
        padding: 10,
        width: '70%',
        marginLeft: 50,

    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 75
    },
    titletwo: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 70
    },
    root: {
        height: '55%',
        marginTop: 30,
        margin: 15,
        backgroundColor: 'rgb(188, 188, 199)',
        padding: 15,
        borderRadius: 30,
        marginBottom: 1,
        marginTop: 10
    },
    sub: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'darkblue',
        marginLeft: 30,
        marginBottom: 10
    },
    name: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 5
    },
    userinput: {
        borderRadius: 100,
        color: 'grey',
        paddingHorizontal: 10,
        width: '85%',
        backgroundColor: 'rgb(220,220, 220)',
        marginVertical: 10
    },
    back: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#ff0000',
        borderRadius: 25,
        width: '30%',
        marginLeft: 240
    },
    btn1: {
        backgroundColor: '#ff2424',
        borderRadius: 100,
        alignItems: 'center',
        width: 250,
        paddingVertical: 5,
        marginVertical: 10
    },
    btn3: {
        marginTop: 30,
        padding: 10,
        backgroundColor: 'darkblue',
        borderRadius: 25,
        width: '30%',
        marginLeft: 10,
        width: 150,
        paddingLeft: 8
    },
    text7: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    footbutton: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 10
    },
    errormessage: {
        marginTop: 10,
        color: "#fff",
        fontSize: 18,
        textAlign: 'center',
        backgroundColor: '#ff2424',
        padding: 5,
        paddingLeft: 10,
        width: '85%'
    }

});

export default AdminLogin;

