import React, { useState, useRef } from 'react';
import { View, Text, Animated, StyleSheet, TouchableOpacity } from 'react-native';

const FlipCard = ({ question, answer }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const frontAnimatedStyle = {
    transform: [
      {
        rotateY: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '180deg'],
        }),
      },
    ],
  };
  const backAnimatedStyle = {
    transform: [
      {
        rotateY: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: ['180deg', '360deg'],
        }),
      },
    ],
  };

  const flipCard = () => {
    if (isFlipped) {
      Animated.spring(animatedValue, {
        toValue: 0,
        friction: 8,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.spring(animatedValue, {
        toValue: 1,
        friction: 8,
        useNativeDriver: true,
      }).start();
    }
    setIsFlipped(!isFlipped);
  };

  return (
    <TouchableOpacity onPress={flipCard}>
      <View style={styles.container}>
        <Animated.View style={[styles.face, frontAnimatedStyle]}>
          <Text style={styles.text}>{question}</Text>
        </Animated.View>
        <Animated.View style={[styles.face, styles.backFace, backAnimatedStyle]}>
          <Text style={styles.text}>{answer}</Text>
        </Animated.View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 800, // Match the width of the faces
    height: 380, // Match the height of the faces
    alignItems: 'center',
    justifyContent: 'center',
    perspective: 1000, // Needed for the flip effect; adjust as necessary
  },
  face: {
    position: 'absolute', // Position faces absolutely within the container
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backfaceVisibility: 'hidden',
    backgroundColor: '#FAFAFA',
  },
  backFace: {
    backgroundColor: '#D6EFFF',
    transform: [{ rotateY: '180deg' }], // Initial rotation for the back face
  },
  text: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'normal',
    textAlign: 'center',
  },
});

export default FlipCard;
