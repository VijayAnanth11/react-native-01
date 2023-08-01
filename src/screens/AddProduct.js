import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

import { SelectList } from 'react-native-dropdown-select-list';

const AddProduct = ({ navigation }) => {

    const [selected, setSelected] = React.useState("");

    const data = [
        { key: '1', value: 'Birthday' },
        { key: '2', value: 'Aniversary' },
        { key: '3', value: 'House' },
        { key: '4', value: 'Valentine' },
        { key: '5', value: 'Graduation' },
    ];

    const [fdata, setFdata] = useState({
        name: '',
        id: '',
        price:''
    })

    const [errormsg, setErrormsg] = useState(null);

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
                            <Text style={styles.text1}>ADD PRODUCT</Text>
                        </View>
                        {
                            errormsg ? <Text style={styles.errormessage}>{errormsg}</Text> : null
                        }

                        <View style={styles.name}>
                            <Text style={styles.nametext}>Choose Category</Text>
                            <SelectList data={data} setSelected={setSelected} />
                        </View>

                        <View style={styles.name}>
                            <Text style={styles.nametext}>Product Name</Text>
                            <TextInput style={styles.userinput} placeholder="Enter Name"
                                onPressIn={() => setErrormsg(null)}
                                onChangeText={(text) => setFdata({ ...fdata, name: text })}
                            />
                        </View>
                        <View style={styles.name}>
                            <Text style={styles.nametext}>Product ID</Text>
                            <TextInput style={styles.userinput} placeholder="Enter Id"
                                onPressIn={() => setErrormsg(null)}
                                onChangeText={(text) => setFdata({ ...fdata, id: text })}
                            />
                        </View>
                        <View style={styles.name}>
                            <Text style={styles.nametext}>Product Price</Text>
                            <TextInput style={styles.userinput} placeholder="Enter Price"
                                onPressIn={() => setErrormsg(null)}
                                onChangeText={(text) => setFdata({ ...fdata, price: text })}
                            />
                        </View>

                        <View>
                            <TouchableOpacity style={styles.btn1} onPress={() => navigation.navigate("sucessproduct")}>
                                <Text style={styles.text7}>ADD</Text>
                            </TouchableOpacity>
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
        marginTop: 10,
        padding: 10,
        backgroundColor: 'darkblue',
        borderRadius: 25,
        width: 90,
        marginLeft: 130,
        paddingLeft: -3,
        marginBottom: 50
    },
    text7: {
        fontSize: 15,
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 25
    },
});

export default AddProduct;
