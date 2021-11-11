import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as width, heightPercentageToDP as height } from 'react-native-responsive-screen'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { getData } from '../../../services/dummy-data/dummyData'

function NextSchedule({ navigation }) {
    const [nextSchedule, setNextSchedule] = useState([]);


    useEffect(() => {
        getNextSchedule()
    }, [])

    function getNextSchedule() {
        const data = getData('nextSchedule')
        setNextSchedule(data)
    }

    function renderNextSchedule() {
        {
            return nextSchedule.map((item, key) => {
                return (
                    <TouchableOpacity style={[styles.scheduleBox, styles.boxShadow]}>
                        <View style={{ marginBottom: 30 }}>
                            <Text style={styles.dayText}>{item.day}</Text>
                            <Text style={styles.dateText}>{item.date}</Text>
                        </View>
                        <View>
                            <Text style={styles.insideBoxTitle}>{item.location}e</Text>
                            <View style={styles.timeBox}>
                                <Icon name='clock' size={18} color={'black'} light />
                                <Text style={styles.timeBoxText}>
                                    {item.day === 'Sunday' ? 'No Schedule' : `${item.startTime} - ${item.endTime}`}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )

            })
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.headerContainer}>
                <View style={styles.titleSection}>
                    <Text style={styles.leftTitle}>NEXT SCHEDULE</Text>
                    <TouchableOpacity>
                        <Text style={styles.rightTitle} onPress={() => { alert(nextSchedule) }}>See all</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollView}>
                    {renderNextSchedule()}
                </ScrollView>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'column',
        marginTop: 20,
    },
    titleSection: {
        flexDirection: 'row',
        width: width('100%'),
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        marginBottom: 10
    },
    scrollView: {
        paddingLeft: 15,
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
        width: width('80%'),
        backgroundColor: 'rgb(244,244,244)',
        borderRadius: 8,
        paddingHorizontal: 9,
        paddingVertical: 8,
        alignSelf: 'center',

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
        fontSize: 15,
        bottom: 1
    },
    dayText: {
        fontSize: 16,
        marginBottom: 2,
        color: 'grey'
    },
    dateText: {
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold'
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
        elevation: 2,
        marginLeft: 2.5
    }
})

export default NextSchedule