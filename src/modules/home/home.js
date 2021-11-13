import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Modal, Dimensions, ScrollView, ImageBackground, StatusBar } from 'react-native';
import { widthPercentageToDP as width, heightPercentageToDP as height } from 'react-native-responsive-screen'
import HomeHeader from './component/header'
import HomeFooter from './component/footer'
import TodaySchedule from './component/today-schedule'
import NextSchedule from './component/next-schedule'

function Home({ navigation }) {

    function goToUpcomingSchedule() {
        navigation.navigate('UpcomingSchedule')
    }

    function goToScheduleDetail() {
        navigation.navigate('ScheduleDetail')
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.headerContainer} showsVerticalScrollIndicator={false}>
                <HomeHeader />
                <TodaySchedule />
                <NextSchedule goToUpcomingSchedule={goToUpcomingSchedule} goToScheduleDetail={goToScheduleDetail} />
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