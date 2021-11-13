import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux'
import { setScheduleData } from '../../../redux/reducer'
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../styles/style'
import CONSTANT from '../../../constant/constant'
import { getData } from '../../../services/dummy-data/dummyData'


function ScheduleList({ goToScheduleDetail }) {
    const [upcomingSchedule, setUpcomingSchedule] = useState([]);
    const dispatch = useDispatch()

    useEffect(() => {
        getUpcomingSchedule()
    }, [])

    function getUpcomingSchedule() {
        const data = getData('upcomingSchedule', 30)
        setUpcomingSchedule(data)
    }

    async function setData(item) {
        dispatch(setScheduleData(item))
        goToScheduleDetail()
    }

    return (
        <View style={styles.headerContainer}>
            {upcomingSchedule.map((item, key) => {
                return item.day === CONSTANT.WEEKEND.SAT || item.day === CONSTANT.WEEKEND.SUN ?
                    noSchedule(item, key)
                    :
                    gotSchedule(item, key)
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
                                        <Text style={styles.todayBoxTitle}>{CONSTANT.TODAY}</Text>
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

export default ScheduleList