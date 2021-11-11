import * as React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../modules/splash-screen/splashscreen'
import Home from '../modules/home/home'


const Stack = createStackNavigator();

function navigation() {
  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content"/>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="SplashScreen" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default navigation;