import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const  Stack = createStackNavigator();

import StarMap from './screens/StarMap';
import DailyPic from './screens/DailyPic';
import SpaceCrafts from './screens/SpaceCrafts'
import Home from './screens/Home';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:true}}> 
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="SpaceCrafts" component={SpaceCrafts}/>
        <Stack.Screen name="DailyPic" component={DailyPic}/>
        <Stack.Screen name="StarMap" component={StarMap}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
