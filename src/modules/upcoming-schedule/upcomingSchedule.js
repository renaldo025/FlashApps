import React from 'react';
import { ScrollView, View } from 'react-native';
import styles from './styles/style'
import ScheduleList from './component/schedule-list';

function UpcomingSchedule({ navigation }) {

    async function goToScheduleDetail () {
        navigation.navigate('ScheduleDetail')
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <ScheduleList goToScheduleDetail={goToScheduleDetail} />
            </ScrollView>
        </View>
    );
}

export default UpcomingSchedule