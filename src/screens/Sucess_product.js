import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';

import cover from '../../assets/images/cover.jpg';
import n1 from '../../assets/images/suc.jpg';

const SucessProduct = ({ navigation }) => {
    return (
        <ImageBackground source={cover} style={styles.container}>

            <View style={styles.root}>
                <Text style={styles.title}>Product Sucessfully Added !! </Text>
                <View style={styles.picnew}>
                    <Image source={n1} style={styles.pic2} />
                </View>
                <View>
                    <TouchableOpacity style={styles.btn1} onPress={() => navigation.navigate("addproduct")}>
                        <Text style={styles.text7}>OK</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    root: {
        marginTop: 100,
        backgroundColor: 'white',
        borderRadius: 30,
        height: '30%',
        width:'80%',
        padding:20,
        marginLeft:40
    },
    title: {
        color: 'rgb(97, 25, 4)',
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 20
    },
    btn1: {
        marginTop: 10,
        padding: 10,
        backgroundColor: 'rgb(97, 25, 4)',
        borderRadius: 15,
        width: 90,
        marginLeft: 120,
        paddingLeft: -3,
        marginBottom: 50
    },
    text7: {
        fontSize: 15,
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 30
    },
    picnew: {
        height: '30%',
        width: '30%',
        marginTop: 10,
        marginLeft: 130
    },
    pic2: {
        height: '100%',
        width: '100%',
        borderRadius: 10,
    },

});

export default SucessProduct;
