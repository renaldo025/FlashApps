import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP as width, heightPercentageToDP as height } from 'react-native-responsive-screen'
import moment from "moment";
import 'moment/locale/en-sg' 
moment.locale('en-sg')


function HomeHeader() {
    const profileImage = '../../../../assets/images/profile.png'
    const bellIcon = '../../../../assets/images/notification.png'
    const [currentTime, setCurrentTime] = useState('-- : --')
    const [currentDate, setCurrentDate] = useState('')

    useEffect(() => {
        setInterval(() => {
            setCurrentTime(moment().format('LT'))
            setCurrentDate(`${moment().format('dddd')}, ${moment().format('ll')}`)
        }, 1000)
    }, [])



    return (
        <View style={[styles.mainContainer, styles.boxShadow]}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={[styles.iconContainer, { alignItems: 'flex-start', left: 10 }]}>
                    <Image resizeMode="contain" source={require(profileImage)} style={styles.profileImg}></Image>
                </TouchableOpacity>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>LIVE ATTENDANCE</Text>
                </View>
                <TouchableOpacity style={[styles.iconContainer, { alignItems: 'flex-end', right: 10 }]}>
                    <Image resizeMode="contain" source={require(bellIcon)} style={styles.bellIcon}></Image>
                </TouchableOpacity>
            </View>
            <View style={styles.secondContainer}>
                <Text style={styles.hours}>{currentTime}</Text>
                <Text style={styles.date}>{currentDate}</Text>
            </View>
        </View>

    );
}


const styles = StyleSheet.create({
    mainContainer: {
        width: width('100%'),
        backgroundColor: 'rgb(255,222,0)',
        borderBottomStartRadius: 30,
        borderBottomEndRadius: 30,
        paddingBottom: 40
    },

    headerContainer: {
        marginTop: height('4%'),
        marginBottom: height('1.5%'),
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    secondContainer: {
        flexDirection: 'column',
    },

    titleText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black',
        marginTop: height('3.5%'),
        textAlign: 'center'
    },

    hours: {
        fontSize: 60,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black'
    },

    date: {
        fontSize: 12.5,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black'
    },

    profileImg: {
        width: width('13%'),
        height: height('10%'),
    },

    bellIcon: {
        width: width('7%'),
        height: height('10%')
    },

    iconContainer: {
        width: width('20%'),
    },

    titleContainer: {
        width: width('60%'),
    },

    boxShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.4,
        shadowRadius: 3,
        elevation: 4,
    }

})

export default HomeHeader