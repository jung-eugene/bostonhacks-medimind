import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

const Assessment8 = ( {navigation} ) => {
    const [selectedDay, setSelectedDay] = useState(null);

const DayButton = ({ day }) => {
    const isSelected = selectedDay === day;
    const buttonStyle = isSelected ? styles.dayButtonSelected : styles.dayButton;
    const textStyle = isSelected ? styles.dayTextSelected : styles.dayText;

    return (
    <TouchableOpacity style={buttonStyle} onPress={() => setSelectedDay(day)}>
        <Text style={textStyle}>{day}</Text>
    </TouchableOpacity>
    );
};
return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={styles.header}>Assessment</Text>
            <View style={styles.numberContainer}>
                <Text style={styles.number}>8 of 9</Text>
            </View>
        </View>
        
        <Text style={styles.bigHeader}>How many days/wk will you commit?</Text>
        <View style={styles.dayContainer}>
        {[1, 2, 3, 4, 5].map((day) => (
        <DayButton key={day} day={day} />
        ))}
    </View>
    <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('A9')}>
            <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>

    </View>
);
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
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
    dayContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 30,
    },
    dayButton: {
        backgroundColor: '#f0f0f0',
        borderRadius: 20,
        padding: 20,
        width: 60,
        height: 60,
    },
    dayButtonSelected: {
        backgroundColor: '#799D00',
        borderRadius: 20,
        padding: 20,
        width: 60,
        height: 60,
    },
    dayText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#545454',
        paddingLeft: 5,
    },
    dayTextSelected: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        paddingLeft: 5
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

export default Assessment8;
