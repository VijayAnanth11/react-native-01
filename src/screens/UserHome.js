import React from 'react';
import { StyleSheet, View, Text,TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

import b1 from '../../assets/images/b1.webp';
import a1 from '../../assets/images/a1.jpg';
import h1 from '../../assets/images/h1.webp';

import v1 from '../../assets/images/v1.png';
import g1 from '../../assets/images/g1.webp';
import m1 from '../../assets/images/m1.jpg';

import s1 from '../../assets/images/s1.jpg';

const UserHome = ({ navigation }) => {
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
                        
                        <View style={styles.item}>
                            <View style={styles.pack}>
                                <TouchableOpacity style={styles.product} onPress={() => navigation.navigate("birthday")}>
                                    <Image source={b1} style={styles.pic1} />
                                </TouchableOpacity>
                                <Text style={styles.name}>Birthday</Text>
                            </View>
                            <View style={styles.pack}>
                                <TouchableOpacity style={styles.product}>
                                    <Image source={a1} style={styles.pic1} />
                                </TouchableOpacity>
                                <Text style={styles.name}>Aniversary</Text>
                            </View>
                            <View style={styles.pack}>
                                <TouchableOpacity style={styles.product}>
                                    <Image source={h1} style={styles.pic1} />
                                </TouchableOpacity>
                                <Text style={styles.name}>House</Text>
                            </View>
                        </View>
                        <View style={styles.item}>
                            <View style={styles.pack}>
                                <TouchableOpacity style={styles.product} onPress={() => navigation.navigate("")}>
                                    <Image source={v1} style={styles.pic1} />
                                </TouchableOpacity>
                                <Text style={styles.name}>Valentine</Text>
                            </View>
                            <View style={styles.pack}>
                                <TouchableOpacity style={styles.product}>
                                    <Image source={g1} style={styles.pic1} />
                                </TouchableOpacity>
                                <Text style={styles.name5}>Graduation</Text>
                            </View>
                            <View style={styles.pack}>
                                <TouchableOpacity style={styles.product}>
                                    <Image source={m1} style={styles.pic1} />
                                </TouchableOpacity>
                                <Text style={styles.name5}>Mother's day</Text>
                            </View>
                        </View>
                        <View style={styles.item}>
                            <View style={styles.pack}>
                                <TouchableOpacity style={styles.product} onPress={() => navigation.navigate("")}>
                                    <Image source={s1} style={styles.pic1} />
                                </TouchableOpacity>
                                <Text style={styles.name}>Sympathy</Text>
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
        fontSize: 15,
        padding: 10
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
        borderRadius:10
    },
    setting:{
        marginLeft:20,
        marginTop:10
    },
    logout:{
        flexDirection:'row',
        marginLeft:120,
        padding:5,
        paddingTop:10,
        backgroundColor:'rgb(33, 33, 31)',
        marginBottom:13,
        borderRadius:15
    },
    logouttext:{
        fontSize:18,
        marginLeft:10,
        color:'white',
        marginRight:10
    }
});

export default UserHome;
