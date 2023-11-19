import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

const Assessment3 = () => {
  const [selectedUnit, setSelectedUnit] = useState('kg');

  const handleUnitSelection = (unit) => {
    setSelectedUnit(unit);
  };

  useEffect(() => {
    // Set initial selection to 'kg'
    setSelectedUnit('kg');
  }, []); // Runs only once when the component mounts

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Assessment</Text>
        <View style={styles.numberContainer}>
          <Text style={styles.number}>3 of 10</Text>
        </View>
      </View>

      <Text style={styles.bigHeader}>What is your weight?</Text>

      <View style={styles.container1}>
        <TouchableOpacity
          style={[
            styles.kgBackground,
            selectedUnit === 'kg' && { backgroundColor: '#799d00' },
          ]}
          onPress={() => handleUnitSelection('kg')}
        >
          <Text style={[styles.kg, selectedUnit === 'kg' ? { color: 'white' } : { color: 'black' }]}>
            kg
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.lbsBackground,
            selectedUnit === 'lbs' && { backgroundColor: '#799d00' },
          ]}
          onPress={() => handleUnitSelection('lbs')}
        >
          <Text style={[styles.lbs, selectedUnit === 'lbs' ? { color: 'white' } : { color: 'black' }]}>
            lbs
          </Text>
        </TouchableOpacity>
      </View>

      <TextInput style={styles.input} placeholder="Weight" />

      <View style={styles.continueButton}>
        <Text style={styles.continueText}>Continue</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 60,
    marginLeft: 36,
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerContainer: {
    flexDirection: 'row',
  },
  bigHeader: {
    marginTop: 42,
    marginLeft: 36,
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 23,
  },
  container1: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
  },
  kg: {
    color: 'white',
    fontWeight: 'bold' 
  },
  lbs: {
    fontWeight: 'bold'
  }, 
  kgBackground: {
    backgroundColor: '#f1f1f1',
    width: 172,
    height: 41,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lbsBackground: {
    backgroundColor: '#f1f1f1',
    width: 172,
    height: 41,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  input: {
    width: 342,
    height: 62,
    fontSize: 20,
    marginLeft: 24,
    backgroundColor: '#f1f1f1',
    borderRadius: 20,
    marginTop: 33,
    textAlign: 'center',
  },
  number: {
    fontSize: 10,
  },
  numberContainer: {
    borderRadius: 20,
    backgroundColor: '#e3f1d3',
    width: 61,
    height: 22,
    marginLeft: 153,
    marginTop: 60,
    paddingLeft: 15,
    paddingTop: 5,
  },
  continueButton: {
    marginTop: 32,
    backgroundColor: '#799d00',
    width: 342,
    height: 62,
    marginLeft: 24,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Assessment3;
