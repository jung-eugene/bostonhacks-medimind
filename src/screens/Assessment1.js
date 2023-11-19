import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Assessment1 = ( {navigation} ) => {
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
    <View style={styles.page}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Assessment</Text>
        <View style={styles.numberContainer}>
          <Text style={styles.number}>1 of 9</Text>
        </View>
      </View>

      <Text style={styles.bigHeader}>What is your gender?</Text>
      {renderOption('Male', '1')}
      {renderOption('Female', '2')}
      {renderOption('Other', '3')}

      <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('A3')}>
            <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white'
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
  Container: {
    borderRadius: 20,
    marginLeft: 24,
    width: 342,
    height: 118,
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

export default Assessment1;
