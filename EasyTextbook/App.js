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
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2bUiboJDhbpHn5J3kiUXnI_G7avXrjqA",
  authDomain: "tuftshackathondb.firebaseapp.com",
  projectId: "tuftshackathondb",
  storageBucket: "tuftshackathondb.appspot.com",
  messagingSenderId: "885169630160",
  appId: "1:885169630160:web:97af9c7c36ad31a17227d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        header: ({ navigation, route, options }) => {
          return (
            <Header navigation={navigation} route={route} />
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

export default App;

