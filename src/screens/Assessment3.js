import React , { useState, useEffect }from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Make sure to install expo icons or another icon library
import { TextInput } from 'react-native';

const Assessment3 = ( {navigation} ) => {
  const [selectedUnit, setSelectedUnit] = useState('kg');

  const handleUnitSelection = (unit) => {
    setSelectedUnit(unit);
  };

  useEffect(() => {
    // Set initial selection to 'kg'
    setSelectedUnit('kg');
  }, []); // Runs only once when the component mounts

  return (
    <View>
        <View style={styles.headerContainer}>
            <Text style={styles.header}>Assessment</Text>
            <View style={styles.numberContainer}>
                <Text style={styles.number}>3 of 9</Text>
            </View>
        </View>
        
        <Text style={styles.bigHeader}>What is your weight?</Text>
        <View>
            <View style={styles.container1}>
                <View style={styles.kgBackground}>
                    <Text style = {styles.kg}>kg</Text>
                </View>
                <View style={styles.lbsBackground}>
                    <Text style={styles.lbs}>lbs</Text>
                </View>
                
            </View>
            
        </View>
        
        <TextInput style={styles.input} placeholder="Weight"/>

        <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('A4')}>
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
    borderRadius: 20 ,
    marginTop: 33, 
    textAlign: 'center' 
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