import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { getData } from '../../../services/dummy-data/dummyData'
import { useSelector } from 'react-redux'
import styles from '../styles/style'
import CONSTANT from '../../../constant/constant'
import moment from "moment";
import 'moment/locale/en-sg'
moment.locale('en-sg')

const flash_store = "../../../../assets/images/flash_store.jpg"

function DetailItem() {
    const [scheduleData, setScheduleData] = useState([]);
    const data = useSelector((state) => state.scheduleData)
    let day = moment().format('dddd')

    useEffect(() => {
        getScheduleData()
    }, [])

    function getScheduleData() {
        const data = getData('todaySchedule')
        setScheduleData(data)
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.headerContainer}>
                <View style={styles.titleSection}>
                    <Text style={styles.leftTitle}>{CONSTANT.STORE}</Text>
                </View>
                {renderStoreView()}
                <View style={[styles.titleSection, { marginTop: 20 }]}>
                    <Text style={styles.leftTitle}>{CONSTANT.TIME_SCHEDULE}</Text>
                </View>
                {renderTimeSchedule()}
                <View style={[styles.titleSection, { marginTop: 20 }]}>
                    <Text style={styles.leftTitle}>{CONSTANT.CLOCK_IN}</Text>
                </View>
                {renderClockInOut('in')}
                <View style={[styles.titleSection, { marginTop: 20 }]}>
                    <Text style={styles.leftTitle}>{CONSTANT.CLOCK_OUT}</Text>
                </View>
                {renderClockInOut('out')}
            </View>
        </View>

    );

    function renderStoreView() {
        return (
            <View style={[styles.scheduleBox, styles.boxShadow]}>
                <View style={styles.imageContainer}>
                    <Image resizeMode='cover' source={require(flash_store)} style={styles.storeImage}></Image>
                </View>
                <View style={styles.addressBox}>
                    <Text style={styles.locationText}>{scheduleData.location}</Text>
                    <Text numberOfLines={2} style={styles.detailLocation}>{scheduleData.detailLocation}</Text>
                    <TouchableOpacity style={styles.buttonMaps}>
                        <Text style={{ color: '#fa275a' }}>{CONSTANT.VIEW_MAPS}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    function renderTimeSchedule() {
        return (
            <View style={[styles.scheduleBox, styles.boxShadow]}>
                <View style={styles.timeBox}>
                    <Icon name='clock' size={25} color={'black'} light />
                    <Text style={styles.timeBoxText}>
                        {data.day === CONSTANT.WEEKEND.SATURDAY || data.day === CONSTANT.WEEKEND.SUNDAY ? CONSTANT.NO_SCHEDULE : `${scheduleData.startTime} - ${scheduleData.endTime}`}
                    </Text>
                </View>
            </View>
        )
    }

    function renderClockInOut(inOut) {
        return (
            <View style={[styles.scheduleBox, styles.boxShadow]}>
                <View style={styles.timeBox}>
                    <Icon name='qrcode' size={25} color={'black'} light />
                    <Text style={styles.timeBoxText}>
                        -- : --
                    </Text>
                </View>
            </View>
        )
    }
}

export default DetailItem