import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import b1 from '../../assets/images/b1.webp';
import b2 from '../../assets/images/b2.jpg';
import b3 from '../../assets/images/b3.webp';
import b4 from '../../assets/images/b4.jpg';
import b5 from '../../assets/images/b5.webp';
import b6 from '../../assets/images/v6.jpg';
import b7 from '../../assets/images/v7.jpg';
import b8 from '../../assets/images/v8.webp';
import b9 from '../../assets/images/v9.jpg';


const Birthday = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.root}>

                <View style={styles.head}>
                    <TouchableOpacity style={styles.nav} onPress={() => navigation.navigate("userhome")}>
                        <Text style={styles.navtext}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.nav} onPress={() => navigation.navigate("order")}>
                        <Text style={styles.navtext}>Orders</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView style={styles.body}>
                    <View style={styles.category}>

                        <View style={styles.top}>
                            <Text style={styles.text1}>Birthday Flowers</Text>
                            <Ionicons style={styles.backicon} name="return-up-back" color="rgb(97, 25, 4)" size={30} onPress={() => navigation.navigate("userhome")} />
                            <Text style={styles.back} onPress={() => navigation.navigate("userhome")}>back</Text>
                        </View>

                        <View style={styles.item}>
                            <View style={styles.pack}>
                                <TouchableOpacity style={styles.product}>
                                    <Image source={b1} style={styles.pic1} />
                                </TouchableOpacity>
                                <Text style={styles.name}>Rs.1000</Text>
                            </View>
                            <View style={styles.pack}>
                                <TouchableOpacity style={styles.product}>
                                    <Image source={b2} style={styles.pic1} />
                                </TouchableOpacity>
                                <Text style={styles.name}>Rs.1100</Text>
                            </View>
                            <View style={styles.pack}>
                                <TouchableOpacity style={styles.product}>
                                    <Image source={b3} style={styles.pic1} />
                                </TouchableOpacity>
                                <Text style={styles.name}>Rs.1200</Text>
                            </View>
                        </View>
                        <View style={styles.item}>
                            <View style={styles.pack}>
                                <TouchableOpacity style={styles.product}>
                                    <Image source={b4} style={styles.pic1} />
                                </TouchableOpacity>
                                <Text style={styles.name}>Rs.1300</Text>
                            </View>
                            <View style={styles.pack}>
                                <TouchableOpacity style={styles.product}>
                                    <Image source={b5} style={styles.pic1} />
                                </TouchableOpacity>
                                <Text style={styles.name5}>Rs.1400</Text>
                            </View>
                            <View style={styles.pack}>
                                <TouchableOpacity style={styles.product}>
                                    <Image source={b6} style={styles.pic1} />
                                </TouchableOpacity>
                                <Text style={styles.name5}>Rs.1500</Text>
                            </View>
                        </View>
                        <View style={styles.item}>
                            <View style={styles.pack}>
                                <TouchableOpacity style={styles.product}>
                                    <Image source={b7} style={styles.pic1} />
                                </TouchableOpacity>
                                <Text style={styles.name}>Rs.1600</Text>
                            </View>
                            <View style={styles.pack}>
                                <TouchableOpacity style={styles.product}>
                                    <Image source={b8} style={styles.pic1} />
                                </TouchableOpacity>
                                <Text style={styles.name}>Rs.1500</Text>
                            </View>
                            <View style={styles.pack}>
                                <TouchableOpacity style={styles.product}>
                                    <Image source={b9} style={styles.pic1} />
                                </TouchableOpacity>
                                <Text style={styles.name}>Rs.1400</Text>
                            </View>
                        </View>
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
        marginLeft: 35,
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
    top: {
        flexDirection: 'row'
    },
    back: {
        fontSize: 20,
        marginTop: 15,
        marginLeft: 5,
        color: 'rgb(97, 25, 4)'
    },
    backicon: {
        marginLeft: 50,
        marginTop: 10
    }
});

export default Birthday;
