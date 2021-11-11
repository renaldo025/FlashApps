import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Modal, Dimensions, ScrollView, ImageBackground, StatusBar } from 'react-native';
import { widthPercentageToDP as width, heightPercentageToDP as height } from 'react-native-responsive-screen'

function Footer({ navigation }) {

    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity style={[styles.buttonContainer, { backgroundColor: '#5bc4ba' }]}>
                <Text style={styles.buttonText}>CLOCK IN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>CLOCK OUT</Text>
            </TouchableOpacity>
        </View>

    );
}


const styles = StyleSheet.create({
    headerContainer: {
        marginTop: height('3%'),
        marginBottom: height('3%'),
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    buttonContainer: {
        width: width('40%'),
        height: height('6.5%'),
        backgroundColor: 'rgba(125,125,125,0.7)',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    }

})

export default Footer