import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import BookingScreen from './screens/BookingScreen';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabScreens = ({ route }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={HomeScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="home" size={size} color={color} />
        ),
        headerShown:false
      }}></Tab.Screen>
       <Tab.Screen name='Booking' component={BookingScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="calendar-outline" size={size} color={color} />
        ),
        headerShown:false
      }}></Tab.Screen>
    </Tab.Navigator>
  )
}
const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>

          <Stack.Screen name='Login' component={LoginScreen}></Stack.Screen>
          <Stack.Screen name='Tab' component={TabScreens}></Stack.Screen>
         
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

export default App

const styles = StyleSheet.create({})