import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Make sure to install expo icons or another icon library
import { TextInput } from 'react-native';
import {useState} from 'react' 

const Assessment4 = () => {
    
  return (
    <View>
        <View style={styles.headerContainer}>
            <Text style={styles.header}>Assessment</Text>
            <View style={styles.numberContainer}>
                <Text style={styles.number}>9 of 10</Text>
            </View>
        </View>
        
        <Text style={styles.bigHeader}>What's your sleep quality{'\n'}like?</Text>
        <View style={styles.Container}>
            <Text style={styles.blackText}>1: Excellent (~8 hours)</Text>
        </View>
        <View style={styles.Container}>
            <Text style={styles.blackText}>2: Great (7~8 hours)</Text>
        </View>
        <View style={styles.Container}>
            <Text style={styles.blackText}>3: Normal (6~7 hours)</Text>
        </View>
        <View style={styles.Container}>
            <Text style={styles.blackText}>4: Bad (3~6 hours)</Text>
        </View>
        <View style={styles.Container}>
            <Text style={styles.blackText}>5: Insomniac (~3 hours)</Text>
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
    fontWeight: 'bold'
  }, 
  headerContainer: {
    flexDirection: 'row' 
  },
  bigHeader: {
    marginTop: 42,
    marginLeft: 36, 
    fontSize: 26, 
    fontWeight: 'bold' , 
    marginBottom: 23 
  }, 
  container1: {
    flexDirection: 'row' 
  }, 

  kg: {
    color: 'white' , 
    
  }, 
  Container: {
    borderRadius: 20, 
    marginLeft: 24, 
    width: 342, 
    height: 74, 
    backgroundColor: '#f1f1f1', 
    justifyContent: 'center' , 
    marginTop: 17 
  },
  blackText: {
    marginLeft: 21 , 
    fontSize: 20 , 
    fontWeight: 'bold' 
  }, 
  number: {
    fontSize: 10
  }, 
  numberContainer: {
    borderRadius: 20 , 
    backgroundColor: '#e3f1d3',
    width: 61 , 
    height: 22,
    marginLeft: 153 , 
    marginTop: 60 , 
    paddingLeft: 15, 
    paddingTop: 5
  },
  continueButton: {
    marginTop: 36, 
    backgroundColor: '#799d00', 
    width: 342, 
    height: 62, 
    marginLeft: 24, 
    borderRadius: 20, 
    justifyContent: 'center', 
    alignItems: 'center'  
  }, 
  continueText: {
    fontSize: 20 , 
    fontWeight: 'bold', 
    color: 'white' ,
    
  }
  
  
});

export default Assessment4;
