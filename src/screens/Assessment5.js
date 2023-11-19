import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView , TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native';

const Assessment5 = ( {navigation} ) => {
  return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={styles.header}>Assessment</Text>
            <View style={styles.numberContainer}>
                <Text style={styles.number}>5 of 9</Text>
            </View>
        </View>
        
        <Text style={styles.bigHeader}>Do you have any medical conditions?</Text>
        <TextInput style={styles.input} placeholder="Medical conditions"/>
        <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('A6')}>
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
    marginLeft: 153, 
    marginTop: 60, 
    paddingLeft: 15, 
    paddingTop: 5
  }, 
  input: {
    height: 62,
    width: 342,
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#F1F1F1',
    borderRadius: 20, 
    textAlign: 'center',
    marginLeft: 24,
    fontSize: 20,
    fontWeight: 'bold'
  },
  continueButton: {
    marginTop: 32, 
    backgroundColor: '#799d00', 
    width: 342, 
    height: 62, 
    borderRadius: 20, 
    marginLeft: 24, 
    justifyContent: 'center', 
    alignItems: 'center'  
  }, 
  continueText: {
    fontSize: 20 , 
    fontWeight: 'bold', 
    color: 'white' ,
  }
});

export default Assessment5;
