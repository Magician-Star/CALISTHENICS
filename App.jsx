import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView, TextInput } from 'react-native-web';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();



export default function Menu(){
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='App' drawerStyle={{ backgroundColor: "#313131", paddingVertical: 20}}>
        <Drawer.Screen name='App' component={App}/>
        <Drawer.Screen name='MetApp' component={AppTwo}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
};
