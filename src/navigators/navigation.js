import * as React from 'react';
import { StatusBar, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Splash from '../modules/splash-screen/splashscreen'
import Home from '../modules/home/home'
import UpcomingSchedule from '../modules/upcoming-schedule/upcomingSchedule'
import ScheduleDetail from '../modules/schedule-detail/scheduleDetail'
import moment from "moment";
import 'moment/locale/en-sg'
moment.locale('en-sg')

const Stack = createStackNavigator();

function navigation() {

  function headerOptions(param) {
    return {
      headerShown: true,
      headerStyle: {
        backgroundColor: 'rgb(255,222,0)',
        height: 100
      },
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold'
      },
      headerTitleAlign: 'center',
      title: param == 'Upcoming' ? 'UPCOMING SCHEDULE' : moment().format('DD MMMM YYYY'),
      headerRight: () => (
        param == 'Upcoming' ?
        <TouchableOpacity style={styles.buttonRight}>
          <Icon name='sync-alt' size={18} color={'black'} light />
        </TouchableOpacity>
        : null
      ),
    }

  }

  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="SplashScreen" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen options={headerOptions('Upcoming')} name="UpcomingSchedule" component={UpcomingSchedule} />
        <Stack.Screen options={headerOptions('Detail')} name="ScheduleDetail" component={ScheduleDetail} />

      </Stack.Navigator>

    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  buttonRight: {
    height: 20,
    right: 20
  }
})

export default navigation;