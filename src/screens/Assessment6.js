import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Assessment6 = ( {navigation} ) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionPress = (option) => {
    setSelectedOption(option);
  };

  const getTextStyles = (option) => {
    return {
      color: selectedOption === option ? 'white' : 'black',
      fontWeight: 'bold',
    };
  };

  const getOptionStyles = (option) => {
    return {
      backgroundColor: selectedOption === option ? '#799D00' : '#f1f1f1',
    };
  };

  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Assessment</Text>
        <View style={styles.numberContainer}>
          <Text style={styles.number}>6 of 9</Text>
        </View>
      </View>

      <Text style={styles.bigHeader}>Do you have a specific{'\n'}diet preference?</Text>

      <View style={styles.grid}>
        <TouchableOpacity
          style={[styles.boxes, getOptionStyles('Plant Based')]}
          onPress={() => handleOptionPress('Plant Based')}
        >
          <Text style={[styles.blackText, getTextStyles('Plant Based')]}>Plant Based</Text>
          <Text style={[styles.miniText, getTextStyles('Plant Based')]}>Vegan</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.boxes, getOptionStyles('Carbo Diet')]}
          onPress={() => handleOptionPress('Carbo Diet')}
        >
          <Text style={[styles.blackText, getTextStyles('Carbo Diet')]}>Carbo Diet</Text>
          <Text style={[styles.miniText, getTextStyles('Carbo Diet')]}>Bread, etc</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.grid}>
        <TouchableOpacity
          style={[styles.boxes, getOptionStyles('Specialized')]}
          onPress={() => handleOptionPress('Specialized')}
        >
          <Text style={[styles.blackText, getTextStyles('Specialized')]}>Specialized</Text>
          <Text style={[styles.miniText, getTextStyles('Specialized')]}>Paleo, keto, etc</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.boxes, getOptionStyles('Traditional')]}
          onPress={() => handleOptionPress('Traditional')}
        >
          <Text style={[styles.blackText, getTextStyles('Traditional')]}>Traditional</Text>
          <Text style={[styles.miniText, getTextStyles('Traditional')]}>Fruit diet</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('A7')}>
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
  container1: {
    flexDirection: 'row',
  },
  grid: {
    flexDirection: 'row',
    marginLeft: 15,
    marginTop: 10,
  },

  boxes: {
    width: 163,
    height: 175,
    borderRadius: 20,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
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
    fontSize: 20,
    marginTop: 21,
  },
  miniText: {
    fontSize: 12,
    marginTop: 5,
    color: '#878787',
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
    marginTop: 34,
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

export default Assessment6;
