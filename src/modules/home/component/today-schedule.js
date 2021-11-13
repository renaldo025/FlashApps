import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as width, heightPercentageToDP as height } from 'react-native-responsive-screen'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { getData } from '../../../services/dummy-data/dummyData'
import moment from "moment";
import 'moment/locale/en-sg'
moment.locale('en-sg')

function TodaySchedule({ navigation }) {
    const [todaySchedule, setTodaySchedule] = useState([]);
    let day = moment().format('dddd')

    useEffect(() => {
        getTodaySchedule()
    }, [])

    function getTodaySchedule() {
        const data = getData('todaySchedule')
        setTodaySchedule(data)
    }

    function renderTodaySchedule() {
        return (
            <View style={[styles.scheduleBox, styles.boxShadow]}>
                <Text style={styles.insideBoxTitle}>{todaySchedule.location}</Text>
                <View style={styles.timeBox}>
                    <Icon name='clock' size={18} color={'black'} light />
                    <Text style={styles.timeBoxText}>
                        {day === 'Sunday' ? 'No Schedule' : `${todaySchedule.startTime} - ${todaySchedule.endTime}`}
                    </Text>
                </View>
                <View style={styles.inOutContainer}>
                    <View style={styles.inOutbox}>
                        <View style={[styles.clockInOut, { backgroundColor: '#5bc4ba' }]}>
                            <Text style={styles.clockInOutTitle}>CLOCK IN</Text>
                        </View>
                        <View style={{ alignSelf: 'center' }}>
                            <Text style={styles.clockInOutTime}>{todaySchedule.clockIn}</Text>
                        </View>
                    </View>
                    <View style={[styles.inOutbox, { alignItems: 'flex-end' }]}>
                        <View style={[styles.clockInOut, { backgroundColor: '#fa275a' }]}>
                            <Text style={styles.clockInOutTitle}>CLOCK OUT</Text>
                        </View>
                        <View style={{ alignSelf: 'center' }}>
                            <Text style={styles.clockInOutTime}>
                                {todaySchedule.clockIn ? '-- : --' : todaySchedule.clockIn}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.headerContainer}>
                <View style={styles.titleSection}>
                    <Text style={styles.leftTitle}>TODAY'S SCHEDULE</Text>
                    <TouchableOpacity>
                        <Text style={styles.rightTitle}>Refresh</Text>
                    </TouchableOpacity>
                </View>
                {renderTodaySchedule()}
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'column',
        marginTop: 30,
        marginBottom: 10
    },
    titleSection: {
        flexDirection: 'row',
        width: width('100%'),
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        marginBottom: 10
    },
    leftTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black'
    },
    rightTitle: {
        fontSize: 16,
        color: 'red'
    },
    scheduleBox: {
        width: width('90%'),
        backgroundColor: 'rgb(244,244,244)',
        borderRadius: 8,
        paddingHorizontal: 9,
        paddingVertical: 8,
        alignSelf: 'center'
    },
    insideBoxTitle: {
        fontWeight: '500',
        fontSize: 18,
        color: 'black',
        marginBottom: 3
    },
    timeBox: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    timeBoxText: {
        marginLeft: 8,
        color: 'black',
        fontSize: 15
    },
    inOutContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    inOutbox: {
        marginBottom: 10,
    },
    clockInOut: {
        width: width('22.5%'),
        padding: 5,
        alignItems: 'center',
        borderRadius: 6
    },
    clockInOutTitle: {
        fontSize: 13,
        fontWeight: 'bold',
        color: 'white'
    },
    clockInOutTime: {
        fontSize: 25,
        fontWeight: '400',
        color: 'black',
        marginTop: 3
    },
    boxShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        marginRight: 10,
        marginBottom: 5,
        marginLeft: 8,
        elevation: 2,
    }

})

export default TodaySchedule