import React from 'react';
import { View, Button, StyleSheet , Text} from 'react-native';

const Header = ({ title, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>{title}</Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Category" onPress={() => navigation.navigate('Category')} />
      <Button title="Contact" onPress={() => navigation.navigate('Contact')} />
      <Button title="Flashcards" onPress={() => navigation.navigate('Flashcards')} />
      <Button title="Resources" onPress={() => navigation.navigate('Resources')} />
      <Button title="Q&A" onPress={() => navigation.navigate('QA')} />
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
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;
