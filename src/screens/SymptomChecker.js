import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Make sure you have @expo/vector-icons installed
import { MaterialIcons } from '@expo/vector-icons';

const SymptomCheckerScreen = () => {
  const [symptom, setSymptom] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Symptom Checker</Text>
      <Text style={styles.description}>
        Experiencing symptoms but not sure what they mean? Use MediMind’s Symptom Checker
        powered by AI to help determine possible causes and treatments.
      </Text>
      
      <View style={styles.searchSection}>
        <Ionicons name="ios-search" size={20} color="#000" style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder="Type your symptom"
          onChangeText={text => setSymptom(text)}
          value={symptom}
        />
      </View>
      
      <TouchableOpacity style={styles.button} onPress={() => console.log('Show possible causes')}>
        <Text style={styles.buttonText}>Show possible causes</Text>
      </TouchableOpacity>

      <View style={styles.navbarContainer}>
          <TouchableOpacity style={styles.navItem}>
              <MaterialIcons name="home" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('FoodRec')}>
              <MaterialIcons name="restaurant-menu" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('SymptomChecker')}>
              <MaterialIcons name="calendar-today" size={24} color="black" />
          </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: 'grey',
    textAlign: 'center',
    marginBottom: 20,
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
  button: {
    backgroundColor: '#799d00',
    padding: 15,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  navbarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#dddddd',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 70,
    paddingBottom: 10,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SymptomCheckerScreen;
