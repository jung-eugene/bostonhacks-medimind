import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Assessment4 = () => {
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
          <Text style={styles.number}>4 of 10</Text>
        </View>
      </View>

      <Text style={styles.bigHeader}>How would you rate your{'\n'}fitness level?</Text>
      {renderOption('1: No experience', '1')}
      {renderOption('2: I worked out once or twice', '2')}
      {renderOption('3: I sometimes work out', '3')}
      {renderOption('4: I regularly work out', '4')}
      {renderOption('5: I am a professional', '5')}

      <View style={styles.continueButton}>
        <Text style={styles.continueText}>Continue</Text>
      </View>
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

export default Assessment4;
