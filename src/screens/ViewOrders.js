import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';


const ViewOrders = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={styles.root}>

                <View style={styles.head}>
                    <TouchableOpacity style={styles.nav} onPress={() => navigation.navigate("adminhome")}>
                        <Text style={styles.navtext}>Category</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.nav} onPress={() => navigation.navigate("addproduct")}>
                        <Text style={styles.navtext}>Product</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.nav} onPress={() => navigation.navigate("vieworders")}>
                        <Text style={styles.navtext}>Orders</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView style={styles.body}>
                    <View style={styles.category}>

                        <View style={styles.top}>
                            <Text style={styles.text1}>VIEW ORDERS</Text>
                        </View>

                        <TouchableOpacity style={styles.row}>
                            <Text style={styles.text2}>Order No - 1 </Text>
                            <Text style={styles.text2}>Date - 30/07/2023 </Text>
                            <Text style={styles.text2}>customer name - Ruban Shingh </Text>
                            <Text style={styles.text2}>mobile no - 0774529376 </Text>
                            <Text style={styles.text2}>category - Birthday </Text>
                            <Text style={styles.text2}>product - #01 </Text>
                            <Text style={styles.text2}>count - 2 </Text>
                            <View>
                                <TouchableOpacity style={styles.btn1}>
                                    <Text style={styles.text7}>Close</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.row}>
                            <Text style={styles.text2}>Order No - 2 </Text>
                            <Text style={styles.text2}>Date - 30/07/2023 </Text>
                            <Text style={styles.text2}>customer name - Maheer jorj </Text>
                            <Text style={styles.text2}>mobile no - 0772739472 </Text>
                            <Text style={styles.text2}>category - Aniversary </Text>
                            <Text style={styles.text2}>product - #05 </Text>
                            <Text style={styles.text2}>count - 1 </Text>
                            <View>
                                <TouchableOpacity style={styles.btn1}>
                                    <Text style={styles.text7}>Close</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>

                    </View>
                </ScrollView>

                <View style={styles.foot}>
                    <TouchableOpacity style={styles.setting}>
                        <AntDesign style={styles.icon} name="setting" color="rgb(97, 25, 4)" size={35} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.setting}>
                        <FontAwesome style={styles.icon} name="user-circle" color="rgb(97, 25, 4)" size={35} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.logout} onPress={() => navigation.navigate("Enter")}>
                        <SimpleLineIcons style={styles.icon} name="logout" color="white" size={22} />
                        <Text style={styles.logouttext}>LogOut</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    root: {
        margin: 10,
        backgroundColor: '#fff',
        height: '100%',
        borderRadius: 20
    },
    head: {
        padding: 10,
        paddingLeft: 20,
        flexDirection: 'row',
        backgroundColor: 'rgb(188, 188, 199)',
        borderRadius: 10
    },
    nav: {
        padding: 10,
        backgroundColor: 'rgb(241, 133, 230)',
        margin: 5,
        borderRadius: 15
    },
    navtext: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'rgb(97, 25, 4)'
    },
    body: {
        backgroundColor: 'rgb(188, 188, 199)',
        marginTop: 10,
        borderRadius: 10,
        padding: 10,
    },
    text1: {
        fontSize: 25,
        padding: 10,
        color: 'rgb(97, 25, 4)',
        fontWeight: 'bold'
    },
    text2: {
        fontSize: 15,
        margin: 5,
        color: 'rgb(97, 25, 4)',
        fontWeight: 'bold'
    },
    item: {
        marginTop: 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderRadius: 10
    },
    product: {
        height: 100,
        width: 100,
        margin: 8,
        marginTop: 10,
        backgroundColor: 'rgb(218, 210, 111)',
        borderRadius: 20
    },
    pic1: {
        height: '100%',
        width: '100%',
        borderRadius: 20
    },
    name: {
        marginLeft: 10,
        fontSize: 15,
        marginBottom: 10
    },
    name5: {
        marginLeft: 20,
        fontSize: 15,
        marginBottom: 10
    },
    foot: {
        backgroundColor: 'rgb(188, 188, 199)',
        height: '11%',
        marginTop: 10,
        padding: 10,
        flexDirection: 'row',
        borderRadius: 10
    },
    setting: {
        marginLeft: 20,
        marginTop: 10
    },
    logout: {
        flexDirection: 'row',
        marginLeft: 120,
        padding: 5,
        paddingTop: 10,
        backgroundColor: 'rgb(33, 33, 31)',
        marginBottom: 13,
        borderRadius: 15
    },
    logouttext: {
        fontSize: 18,
        marginLeft: 10,
        color: 'white',
        marginRight: 10
    },
    nametext: {
        marginTop: 5,
        fontSize: 17
    },
    userinput: {
        padding: 5,
        borderWidth: 1,
        borderRadius: 20,
        width: 300,
        paddingLeft: 20
    },
    btn1: {
        marginTop: 5,
        padding: 10,
        backgroundColor: 'red',
        borderRadius: 25,
        width: 90,
        marginLeft: 230,
        paddingLeft: -3,
        marginBottom: 5
    },
    text7: {
        fontSize: 15,
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 25
    },
    row: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 13,
        marginTop:10,
        marginBottom:10
    }
});

export default ViewOrders;
