import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import IntroContainer from './IntroContainer'; // Adjust the import path as needed
import ContactContainer from './contactContainer'; // Ensure this path is correct

function HomeScreen() {
  return (
    <ScrollView style = {{height:700}}>
        <View style={styles.container}>
        <IntroContainer />
        <View style={styles.contentRow}>
          <Image
            source={require('../assets/logo.png')} // Replace with your local image path
            style={styles.logo} // Adjust size and spacing as needed
          />
          <ContactContainer />
          <Image
            source={require('../assets/jumbo.png')} // Replace with your local image path
            style={styles.jumbo} // Adjust size and spacing as needed
          />
        </View>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, 
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 20, // Adjust as needed
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  logo: {
    width: 280,
    height: 280,
    marginTop: 40,
    marginRight: 20,
    marginBottom: 20
  },
  jumbo: {
    width: 300,
    height: 100,
    marginTop: 40,
    marginRight: 20,
    marginBottom: 20
  },
});

export default HomeScreen;
