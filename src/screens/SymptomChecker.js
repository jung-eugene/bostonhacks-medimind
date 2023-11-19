import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import axios from 'axios';
import { OPENAI_KEY } from '@env'; // Make sure you have the react-native-dotenv package installed and configured

const ChatSymptomCheckerScreen = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const sendMessage = async () => {
    const userMessage = { role: 'user', content: inputText };
  
    // Update the messages state with the new user message
    setMessages(prevMessages => [...prevMessages, userMessage]);
  
    setInputText('');
  
    try {
      // Using a timeout to allow the state to update before making the API call
      setTimeout(async () => {
        const response = await axios.post(
          'https://api.openai.com/v1/chat/completions',
          {
            model: 'gpt-3.5-turbo',
            messages: [...messages, userMessage], // This may still be using the old state
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${OPENAI_KEY}`,
            },
          }
        );
  
        const botMessage = {
          role: 'bot',
          content: response.data.choices[0].message.content,
        };
  
        // Update the messages state with the new bot message
        setMessages(prevMessages => [...prevMessages, botMessage]);
      }, 100);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chat with Symptom Checker</Text>

      <ScrollView style={styles.messageContainer}>
        {messages.map((message, index) => (
          <Text key={index} style={[styles.message, message.role === 'user' ? styles.userMessage : styles.botMessage]}>
            {message.content}
          </Text>
        ))}
      </ScrollView>

      <TextInput
        style={styles.input}
        placeholder="Type your symptom or message"
        onChangeText={setInputText}
        value={inputText}
        onSubmitEditing={sendMessage} // Send message when 'return' key is pressed
      />

      <TouchableOpacity style={styles.button} onPress={sendMessage}>
        <Text style={styles.buttonText}>Send</Text>
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
    marginTop: 35,
    marginBottom: 10,
    textAlign: 'center',
  },
  messageContainer: {
    flex: 1,
    marginTop: 20,
    marginBottom: 20,
  },
  message: {
    fontSize: 16,
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#daf1da',
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#f1f1f1',
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
    marginBottom: 10,
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

export default ChatSymptomCheckerScreen;
