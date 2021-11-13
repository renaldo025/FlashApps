import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Modal, Dimensions, ScrollView, ImageBackground, StatusBar } from 'react-native';
import { widthPercentageToDP as width, heightPercentageToDP as height } from 'react-native-responsive-screen'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { getData } from '../../../services/dummy-data/dummyData'


function ScheduleList({ setScheduleDetail, goToScheduleDetail }) {
    const [upcomingSchedule, setUpcomingSchedule] = useState([]);

    useEffect(() => {
        getUpcomingSchedule()
    }, [])

    function getUpcomingSchedule() {
        const data = getData('upcomingSchedule', 30)
        setUpcomingSchedule(data)
    }

    async function setData(item){
        await setScheduleDetail(item)
        goToScheduleDetail()
    }

    return (
        <View style={styles.headerContainer}>
            {upcomingSchedule.map((item, key) => {
                return item.day === 'SUN' || item.day === 'SAT' ? noSchedule(item, key) : gotSchedule(item, key)
            })}
        </View>
    );

    function gotSchedule(item, key) {
        return (
            <View key={key}>
                {
                    item.isShowMonth === true &&
                    <View style={{ marginBottom: 20 }}>
                        <Text style={[styles.dateText, styles.textBold]}>{item.month}</Text>
                    </View>
                }

                <View style={styles.scheduleContainer}>
                    <View style={styles.dateBox}>
                        <Text style={styles.dateText}>{item.day}</Text>
                        <Text style={[styles.dateText, styles.textBold]}>{item.date}</Text>
                    </View>
                    <TouchableOpacity style={[styles.boxShadow, styles.scheduleBox]} onPress={() => { setData(item) }}>
                        <Text style={styles.locationText}>{item.location}</Text>
                        <View style={styles.timeBox}>
                            <Icon name='clock' size={18} color={'black'} light />
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={styles.timeBoxText}>
                                    {item.day === 'Sunday' ? 'No Schedule' : `${item.startTime} - ${item.endTime}`}
                                </Text>
                                {item.isToday &&
                                    <View style={[styles.todayBox, { backgroundColor: '#fa275a' }]}>
                                        <Text style={styles.todayBoxTitle}>TODAY</Text>
                                    </View>
                                }

                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

        )
    }

    function noSchedule(item, key) {
        return (
            <View key={key}>
                {
                    item.isShowMonth === true &&
                    <View style={{ marginBottom: 20 }}>
                        <Text style={[styles.dateText, styles.textBold]}>{item.month}</Text>
                    </View>
                }
                <View style={styles.scheduleContainer}>
                    <View style={styles.dateBox}>
                        <Text style={[styles.dateText]}>{item.day}</Text>
                        <Text style={[styles.dateText, styles.textBold, { color: 'red' }]}>{item.date}</Text>
                    </View>
                    <View style={[styles.noScheduleBox]}>
                        <Text style={[styles.locationText, { color: 'grey' }]}>NO SCHEDULE</Text>
                    </View>
                </View>
            </View>

        )
    }
}


const styles = StyleSheet.create({
    headerContainer: {
        marginTop: height('3%'),
        marginBottom: height('3%'),
        flexDirection: 'column',
        justifyContent: 'space-around',
        paddingHorizontal: 10
    },
    scheduleContainer: {
        flexDirection: 'row',
        width: width('100%'),
        alignSelf: 'center',
        paddingHorizontal: 10,
        marginBottom: 15
    },
    scheduleBox: {
        width: width('78%'),
        backgroundColor: 'rgb(244,244,244)',
        paddingHorizontal: 13,
        paddingVertical: 8,
        borderRadius: 8,
    },
    noScheduleBox: {
        width: width('78%'),
        padding: 20,
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 2,
        borderColor: 'rgba(125,125,125,0.3)',
        borderStyle: 'dashed',
    },
    dateBox: {
        alignItems: 'center',
        marginTop: 6,
        paddingRight: 10,
        width: width('15%')
    },
    dateText: {
        fontSize: 18,
        color: 'grey'
    },
    textBold: {
        color: 'black',
        fontWeight: 'bold'
    },
    locationText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18
    },
    timeBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 7
    },
    timeBoxText: {
        marginLeft: 8,
        color: 'black',
        fontSize: 15,
        bottom: 1
    },
    todayBox: {
        width: width('22.5%'),
        padding: 5,
        alignItems: 'center',
        borderRadius: 6,
        marginLeft: 10
    },
    todayBoxTitle: {
        fontSize: 13,
        fontWeight: 'bold',
        color: 'white'
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
        elevation: 5,
        marginLeft: 1
    },

})

export default ScheduleList