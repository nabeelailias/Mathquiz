// screens/QuizScreen.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const QuizScreen = ({ route, navigation }) => {
  const { grade } = route.params;
  const [question, setQuestion] = useState('What is 2 + 2?');
  const [answer, setAnswer] = useState(null);

  const checkAnswer = () => {
    if (answer === 4) {
      alert('Correct!');
    } else {
      alert('Incorrect.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question}</Text>
      <Button title="4" onPress={() => setAnswer(4)} />
      <Button title="5" onPress={() => setAnswer(5)} />
      <Button title="Check Answer" onPress={checkAnswer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  question: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default QuizScreen;
