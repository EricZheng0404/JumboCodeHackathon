import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const FindInfoContainer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
      This screen is your gateway to not just ace your standardized exams but also to find the perfect study buddy! Whether you're diving into SAT/ACT prep or tackling challenging the GRE, this platform is designed with you in mind. By simply navigating to a specific section, you can easily input your study habits, subjects you're focusing on, and when you're free 
       to hit the books. 
       {'\n\n'}
       You can sift through the database and connect with peers who share your academic interests and goals. It's a fantastic way to make studying more interactive and fun, while also building a community of fellow students committed to academic excellence. 
       Plus, with the added bonus of 
       downloadable materials at your fingertips, you're all set for success!      
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d4ebf2', // Light blue background
    padding: 20,
    marginHorizontal: 100,
    marginTop: 40,
    marginBottom: 60,
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
});

export default FindInfoContainer;
