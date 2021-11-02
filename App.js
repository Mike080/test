import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './screens/Main/Main';
import SignUp from './screens/SignUp/SignUp';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Feed"
        screenOptions={{
          headerTintColor: '#fff',
          headerStyle: { backgroundColor: 'blue' },
        }}
      >
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen
          options={{ headerLargeTitle: true }}
          name="SignUp"
          component={SignUp}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
