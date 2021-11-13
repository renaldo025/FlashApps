import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as width, heightPercentageToDP as height } from 'react-native-responsive-screen'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { getData } from '../../../services/dummy-data/dummyData'
import styles from './styles/style'
import CONSTANT from '../../../constant/constant'
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
            <View style={[styles.scheduleBox, styles.boxShadow, { width: width('90%') }]}>
                <Text style={styles.insideBoxTitle}>{todaySchedule.location}</Text>
                <View style={styles.timeBox}>
                    <Icon name='clock' size={18} color={'black'} light />
                    <Text style={styles.timeBoxText}>
                        {day === CONSTANT.WEEKEND.SATURDAY || day === CONSTANT.WEEKEND.SUNDAY ? CONSTANT.NO_SCHEDULE : `${todaySchedule.startTime} - ${todaySchedule.endTime}`}
                    </Text>
                </View>
                <View style={styles.inOutContainer}>
                    <View style={styles.inOutbox}>
                        <View style={[styles.clockInOut, { backgroundColor: '#5bc4ba' }]}>
                            <Text style={styles.clockInOutTitle}>{CONSTANT.CLOCK_IN}</Text>
                        </View>
                        <View style={{ alignSelf: 'center' }}>
                            <Text style={styles.clockInOutTime}>{todaySchedule.clockIn}</Text>
                        </View>
                    </View>
                    <View style={[styles.inOutbox, { alignItems: 'flex-end' }]}>
                        <View style={[styles.clockInOut, { backgroundColor: '#fa275a' }]}>
                            <Text style={styles.clockInOutTitle}>{CONSTANT.CLOCK_OUT}</Text>
                        </View>
                        <View style={{ alignSelf: 'center' }}>
                            <Text style={styles.clockInOutTime}>
                                {todaySchedule.clockIn ? CONSTANT.EMPTY_TIME : todaySchedule.clockOut}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.todayHeaderContainer}>
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

export default TodaySchedule