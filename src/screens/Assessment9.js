import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Assessment9 = ( {navigation} ) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectOption = (option) => {
    setSelectedOption(option === selectedOption ? null : option);
  };

  const isOptionSelected = (option) => option === selectedOption;

  const renderOption = (text, option) => (
    <TouchableOpacity
      style={[
        styles.Container,
        isOptionSelected(option) && { backgroundColor: '#799d00' },
      ]}
      onPress={() => handleSelectOption(option)}
    >
      <Text style={[styles.blackText, isOptionSelected(option) && { color: 'white' }]}>{text}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Assessment</Text>
        <View style={styles.numberContainer}>
          <Text style={styles.number}>4 of 9</Text>
        </View>
      </View>

      <Text style={styles.bigHeader}>How would you rate your{'\n'}fitness level?</Text>
      {renderOption('1: Excellent (>8 hours)', '1')}
      {renderOption('2: Great (7-8 hours)', '2')}
      {renderOption('3: Normal (6-7 hours)', '3')}
      {renderOption('4: Bad (3-6 hours)', '4')}
      {renderOption('5: lnsomniac (<3 hours)', '5')}

      <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('Dashboard')}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
  Container: {
    borderRadius: 20,
    marginLeft: 24,
    width: 342,
    height: 74,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    marginTop: 17,
  },
  blackText: {
    marginLeft: 21,
    fontSize: 20,
    fontWeight: 'bold',
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
    marginTop: 36,
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

export default Assessment9;
