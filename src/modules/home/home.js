import React from 'react';
import { ScrollView, View } from 'react-native';
import styles from './component/styles/style'
import HomeHeader from './component/header'
import HomeFooter from './component/footer'
import TodaySchedule from './component/today-schedule'
import NextSchedule from './component/next-schedule'

function Home({ navigation }) {

    function goToUpcomingSchedule() {
        navigation.navigate('UpcomingSchedule')
    }

    function goToScheduleDetail() {
        navigation.navigate('ScheduleDetail')
    }

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <HomeHeader />
                <TodaySchedule />
                <NextSchedule goToUpcomingSchedule={goToUpcomingSchedule} goToScheduleDetail={goToScheduleDetail} />
            </ScrollView>
            <HomeFooter />
        </View>
    );
}

export default Home