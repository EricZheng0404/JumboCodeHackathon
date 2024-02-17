import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const ContactContainer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.boldtext}>Creators:</Text>
      <Text style={styles.text}>
        Eric Zheng: szheng08@tufts.edu
        {'\n\n'}
        Youssef Naguib: ynagui01@tufts.edu
        {'\n\n'}
        Mark Martirosian: mmarti40@tufts.edu
        {'\n\n'}
        Alexander Chanis: alexander.chanis@tufts.edu
        {'\n\n'}
        Chloe Xie: chloexie16@gmail.com
    </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D1FFBD', // Light blue background
    padding: 20,
    marginHorizontal: 50,
    marginTop: 20,
    borderRadius: 20, // Circular edges
    shadowColor: '#000', // Optional shadow
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Elevation for Android
  },
  text: {
    fontSize: 16,
    color: '#000', // Text color
    lineHeight: 24, // Adjust line height for readability
  },
  boldtext: {
    fontSize: 20,
    fontWeight: 600,
    color: '#000', // Text color
    lineHeight: 24, // Adjust line height for readability
  },
});

export default ContactContainer;
