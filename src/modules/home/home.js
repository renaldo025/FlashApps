import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Modal, Dimensions, ScrollView, ImageBackground, StatusBar } from 'react-native';
import { widthPercentageToDP as width, heightPercentageToDP as height } from 'react-native-responsive-screen'
import HomeHeader from './component/header'
import HomeFooter from './component/footer'
import TodaySchedule from './component/today-schedule'
import NextSchedule from './component/next-schedule'

const splash_image = "../../../assets/images/flash_logo.png"

function Home({ navigation }) {

    return (
        <View style={styles.container}>
            <ScrollView style={styles.headerContainer} showsVerticalScrollIndicator={false}>
                <HomeHeader />
                <TodaySchedule />
                <NextSchedule />
            </ScrollView>
            <HomeFooter />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    splashPicture: {
        width: width('100%'),
        height: height('100%')
    },
    headerContainer: {
        flex: 1
    }

})

export default Home