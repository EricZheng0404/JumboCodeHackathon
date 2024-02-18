import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const IntroContainer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Welcome to TestBuddy, your comprehensive gateway to mastering standardized tests with ease and confidence. At easyTextbook, we understand the challenges and pressures that come with preparing for standardized tests. That's why we've created a platform that not only simplifies your study process but also enhances it by providing a wealth of resources tailored to your needs.
        {'\n\n'}
        Our platform offers an extensive collection of textbooks spanning various subjects and test types, ensuring you have the right material at your fingertips. But easyTextbook is more than just a resource library; it's a community. Connect with study partners who share your goals and challenges, making your preparation journey less daunting and more collaborative.
        {'\n\n'}
        Dive into our curated study resources, designed to streamline your study sessions and make every minute count. Benefit from insightful reviews on study materials, helping you choose the best resources without the guesswork. And when questions arise, our Q&A section is here for you, offering clarifications, tips, and support from a community of learners and experts alike.
        {'\n\n'}
        Whether you're gearing up for the GRE, SAT, ACT, or any other standardized test, easyTextbook is here to support you every step of the way. Join us today and take the first step towards turning your test-taking aspirations into achievements.
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

export default IntroContainer;
