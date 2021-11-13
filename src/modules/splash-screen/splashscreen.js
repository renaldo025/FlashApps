import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Modal, Dimensions, ScrollView, ImageBackground, ProgressBarAndroid } from 'react-native';
import { widthPercentageToDP as width, heightPercentageToDP as height } from 'react-native-responsive-screen'

const splash_image = "../../../assets/images/flash_logo.png"

function Splash({ navigation }) {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home')
        }, 2000)
    }, [])

    return (
        <View style={styles.container}>
            <ImageBackground resizeMode='contain' style={styles.splashPicture} source={require(splash_image)}>

            </ImageBackground>

        </View>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(255,222,0)'
    },
    splashPicture: {
        width: width('100%'),
        height: height('100%')
    },

})

export default Splash