import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './styles/style'
import CONSTANT from '../../../constant/constant'
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
                    <Text style={styles.titleText}>{CONSTANT.LIVE_ATTENDANCE}</Text>
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

export default HomeHeader