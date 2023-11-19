import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView , TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Make sure to install expo icons or another icon library

const Assessment1 = ({ navigation }) => {
  return (
    <View>
        <View style={styles.headerContainer}>
            <Text style={styles.header}>Assessment</Text>
            <View style={styles.numberContainer}>
                <Text style={styles.number}>1 of 9</Text>
            </View>
        </View>
        
        <Text style={styles.bigHeader}>What is your gender?</Text>
        <View style={styles.genderContainerWhite}>
            <Text style={styles.blackText}>Male</Text>
        </View>
        <View style={styles.genderContainerWhite}>
            <Text style={styles.blackText}>Female</Text>
        </View>
        <View style={styles.genderContainerWhite}>
            <Text style={styles.blackText}>Other</Text>
        </View>

        <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('A2')}>
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
  genderContainerWhite: { 
    width: 342, 
    height: 118, 
    backgroundColor: '#f1f1f1',
    marginLeft: 24, 
    borderRadius: 20, 
    marginTop: 15 

  }, 
  genderContainerGreen: {
    width: 342, 
    height: 118, 
    backgroundColor: '#799d00',
    marginLeft: 24, 
    borderRadius: 20 , 
    marginTop: 15 
  }, 
  blackText: {
    marginLeft: 52, 
    marginTop: 22, 
    color: 'black', 
    fontSize: 20, 
    fontWeight: 'bold' 
  }, 
  whiteText: {
    marginLeft: 52, 
    marginTop: 22,
    color: 'white',
    fontSize: 20, 
    fontWeight: 'bold' 
  }, 
  continueButton: {
    marginTop: 32, 
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

export default Assessment1;