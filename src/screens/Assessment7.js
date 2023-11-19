import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';

const Assessment7 = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleToggleItem = (item) => {
    setSelectedItem(item === selectedItem ? null : item);
  };

  const isItemSelected = (item) => item === selectedItem;

  const renderBox = (iconComponent, text, iconName) => (
    <TouchableOpacity
      style={[
        styles.boxes,
        isItemSelected(iconName) && { backgroundColor: '#799d00' },
      ]}
      onPress={() => handleToggleItem(iconName)}
    >
      {React.cloneElement(iconComponent, {
        style: [styles.Images, isItemSelected(iconName) && { color: 'white' }],
      })}
      <Text style={[styles.miniText, isItemSelected(iconName) && { color: 'white' }]}>{text}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Assessment</Text>
        <View style={styles.numberContainer}>
          <Text style={styles.number}>7 of 10</Text>
        </View>
      </View>

      <Text style={styles.bigHeader}>Do you have a specific{'\n'}exercise preference?</Text>
      <View style={styles.grid}>
        {renderBox(<MaterialIcons size={58} name="directions-run" />, 'Jogging', 'jogging')}
        {renderBox(<MaterialCommunityIcons size={58} name="dumbbell" />, 'Weightlifting', 'weightlifting')}
      </View>
      <View style={styles.grid}>
        {renderBox(<FontAwesome size={58} name="heartbeat" />, 'Cardio', 'cardio')}
        {renderBox(<FontAwesome5 size={58} name="biking" />, 'Biking', 'biking')}
      </View>

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
  grid: {
    flexDirection: 'row',
    marginLeft: 15,
    marginTop: 10,
  },
  Images: {
    textAlign: 'center',
    marginTop: 47,
    color: 'black',
  },
  boxes: {
    width: 163,
    height: 175,
    borderRadius: 20,
    marginLeft: 10,
    backgroundColor: '#f1f1f1',
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
  miniText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#000',
    marginTop: 25,
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
});

export default Assessment7;
