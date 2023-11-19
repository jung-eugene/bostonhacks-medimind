import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Make sure to install expo icons or another icon library

const DashboardScreen = ( {navigation} ) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.dateText}>SUN NOV 19</Text>
            <Text style={styles.greetingText}>Hi, Sam</Text>
          </View>
          <Image style = {styles.profilePic} source={require('medimind/assets/image9.png')}></Image>
          
        </View>


        <View style={styles.healthScoreContainer}>
          
          <View style={styles.healthScoreBackground}>
            <Text style={styles.healthScore}>74</Text>
          </View>
          <View style={styles.healthTextContainer}>
          <Text style={styles.healthScoreTitle}>Health Score</Text>
          <Text style={styles.healthScoreDesc}>
            Based on your overall health test, {'\n'}your score is 74 and considered{'\n'}
            good.
          </Text>
          </View>
          
        </View>
      

        <View style={styles.metricsContainer}>
          <View style={styles.box1}>
            <Text style={styles.metricTitle}>CALORIES</Text>
            <Image style={styles.metricImage} source={require('medimind/assets/carbon_progress-bar-round.png')}></Image>
            <Text style={styles.metricValue}>500 <Text style= {styles.tinyText}>cal</Text></Text>
          </View>
          <View style={styles.box2}>
            <Text style={styles.metricTitle}>WEIGHT</Text>
            <Image style={styles.metricImage} source={require('medimind/assets/mdi_graph-line.png')}></Image>
            <Text style={styles.metricValue}>55 <Text style={styles.tinyText}>kg</Text></Text>
          </View>
          <View style={styles.box3}>
            <Text style={styles.metricTitle}>WATER</Text>
            <Image style={styles.metricImage} source={require('medimind/assets/ion_water-outline.png')}></Image>
            <Text style={styles.metricValue}>17.8 <Text style={styles.tinyText}>oz</Text></Text>
          </View>
          <View style={styles.box4}>
            <Text style={styles.metricTitle}>STEPS</Text>
            <Image style={styles.metricImage} source={require('medimind/assets/mdi_run.png')}></Image>
            <Text style={styles.metricValue}>5923 <Text style={styles.tinyText}>steps</Text></Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.navbarContainer}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Dashboard')}>
              <MaterialIcons name="home" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('FoodRec')}>
              <MaterialIcons name="restaurant-menu" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('SymptomChecker')}>
              <MaterialIcons name="check" size={24} color="black" />
          </TouchableOpacity>
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
  },
  profilePic:{
    marginLeft: 180
  }, 
  header: {
    alignItems: 'left',
    marginLeft: 32, 
    marginTop: 66 , 
    flexDirection: 'row'
  },
  dateText: {
    fontSize: 10,
    color: 'grey',
    fontWeight: 'bold'
  },
  greetingText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 10,
  },
  healthScoreContainer: {
    margin: 20,
    padding: 20, 
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    width: 356, 
    height: 131, 
  },
  healthScore: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    padding: 10,
    textAlign: 'center' 
  },
  healthScoreBackground: {
    backgroundColor: 'green', 
    borderRadius: 30, 
    marginRight: 20,
    width: 50, 
    height: 50, 
    justifyContent: 'center' , 
    alignContent: 'center' , 
    backgroundColor: '#799d00'
  }, 
  healthTextContainer: {
    flexDirection: 'column'
  }, 
  healthScoreTitle: {
    fontSize: 18, 
    fontWeight: 'bold'
  },
  healthScoreDesc: {
    fontSize: 16,
    color: 'grey',
  },
  metricsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  tinyText: {
    fontSize: 12
  }, 
  box1: {
    width: 160,
    height: 208,
    backgroundColor: '#a5c400',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  metricImage: {
    width: 75, 
    height: 75, 
    marginTop: 31, 
    marginBottom: 25
  },
  box2: {
    width: 160,
    height: 208,
    backgroundColor: '#587d32',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  box3 : {
    width: 160,
    height: 208,
    backgroundColor: '#00b1ae',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
  }, 
  box4: {
    width: 160,
    height: 208,
    backgroundColor: '#009b73',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
  }, 
  metricTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  metricValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
  navbarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#dddddd',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 70,
    paddingBottom: 10,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DashboardScreen;