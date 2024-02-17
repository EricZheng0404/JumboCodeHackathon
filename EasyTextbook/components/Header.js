import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Category" onPress={() => navigation.navigate('Category')} />
      <Button title="Contact" onPress={() => navigation.navigate('Contact')} />
      <Button title="GRE" onPress={() => navigation.navigate('GRE')} />
      <Button title="Resources" onPress={() => navigation.navigate('Resources')} />
      <Button title="QA" onPress={() => navigation.navigate('QA')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 60, // Adjust based on your needs
    width: '100%',
    backgroundColor: '#eee', // Your preferred header background color
  },
});

export default Header;
