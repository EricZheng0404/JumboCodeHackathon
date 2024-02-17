import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Categoryscreen from './components/Category'; // Define these screen components
import ContactScreen from './components/Contact';
import GREscreen from './components/GRE';
import Header from './components/Header';
import QAscreen from './components/QA';
import ResourceScreen from './components/Resources';
import HomeScreen from './components/Home';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        header: ({ navigation, route, options }) => {
          return (
            <Header title={"TestBuddy"} navigation={navigation} route={route} />
          );
        },
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Category" component={Categoryscreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
        <Stack.Screen name="GRE" component={GREscreen} />
        <Stack.Screen name="Resources" component={ResourceScreen} />
        <Stack.Screen name="QA" component={QAscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 18, // Adjust size as needed
  },
});



export default App;

