import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import { OPENAI_KEY } from '@env';

const SymptomCheckerScreen = () => {
  const [symptom, setSymptom] = useState('');

  const getGPTResponse = async () => {
    if (!symptom.trim()) {
      Alert.alert('Input Error', 'Please enter a symptom');
      return;
    }

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/davinci-codex/completions',
        {
          prompt: `The following is a list of potential causes and remedies for the symptom: ${symptom}`,
          max_tokens: 150,
        },
        {
          headers: {
            'Authorization': `Bearer ${OPENAI_KEY}`, // Replace with your actual OpenAI API key
            'Content-Type': 'application/json',
          },
        }
      );

      // Handle the response as needed
      Alert.alert('Possible Causes', response.data.choices[0].text);
    } catch (error) {
      console.error(error);
      Alert.alert('API Error', 'An error occurred while trying to get a response from the API.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Symptom Checker</Text>
      <Text style={styles.description}>
        Experiencing symptoms but not sure what they mean? Use MediMind’s Symptom Checker
        powered by AI to help determine possible causes and treatments.
      </Text>
      
      <TextInput
        style={styles.input}
        placeholder="Type your symptom"
        onChangeText={setSymptom}
        value={symptom}
      />
      
      <TouchableOpacity style={styles.button} onPress={getGPTResponse}>
        <Text style={styles.buttonText}>Show possible causes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 150,
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: 'grey',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 5,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SymptomCheckerScreen;
