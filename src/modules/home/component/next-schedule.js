import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { getData } from '../../../services/dummy-data/dummyData'
import { useDispatch } from 'react-redux'
import { setScheduleData } from '../../../redux/reducer'
import styles from './styles/style'
import CONSTANT from '../../../constant/constant'

function NextSchedule({ goToUpcomingSchedule, goToScheduleDetail }) {
    const [nextSchedule, setNextSchedule] = useState([]);
    const dispatch = useDispatch()

    useEffect(() => {
        getNextSchedule()
    }, [])

    function getNextSchedule() {
        const data = getData('nextSchedule', 7)
        setNextSchedule(data)
    }

    function navigateTo(item) {
        dispatch(setScheduleData(item))
        goToScheduleDetail()
    }

    function renderNextSchedule() {
        {
            return nextSchedule.map((item, key) => {
                return (
                    <TouchableOpacity
                        key={key}
                        style={[styles.scheduleBox, styles.boxShadow]}
                        onPress={() => navigateTo(item)}>
                        <View style={{ marginBottom: 30 }}>
                            <Text style={styles.dayText}>{item.day}</Text>
                            <Text style={styles.dateText}>{item.date}</Text>
                        </View>
                        <View>
                            <Text style={styles.insideBoxTitle}>{item.location}</Text>
                            <View style={styles.timeBox}>
                                <Icon name='clock' size={18} color={'black'} light />
                                <Text style={styles.timeBoxText}>
                                    {item.day === CONSTANT.WEEKEND.SUNDAY || item.day === CONSTANT.WEEKEND.SATURDAY ? CONSTANT.NO_SCHEDULE : `${item.startTime} - ${item.endTime}`}
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
            <View style={styles.nextHeaderContainer}>
                <View style={styles.titleSection}>
                    <Text style={styles.leftTitle}>NEXT SCHEDULE</Text>
                    <TouchableOpacity>
                        <Text style={styles.rightTitle} onPress={goToUpcomingSchedule}>See all</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollView}>
                    {renderNextSchedule()}
                </ScrollView>
            </View>
        </View>
    );

}

export default NextSchedule