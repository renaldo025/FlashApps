import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Modal, Dimensions, ScrollView, ImageBackground, ProgressBarAndroid } from 'react-native';
import { widthPercentageToDP as width, heightPercentageToDP as height } from 'react-native-responsive-screen'
import ScheduleList from './component/schedule-list';

function UpcomingSchedule({ navigation }) {
    const [scheduleDetail, setScheduleDetail] = useState([]);

    async function goToScheduleDetail () {
        navigation.navigate('ScheduleDetail', {scheduleData: scheduleDetail})
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <ScheduleList setScheduleDetail={setScheduleDetail} goToScheduleDetail={goToScheduleDetail} />
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default UpcomingSchedule