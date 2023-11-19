import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Make sure to install expo icons or another icon library

const Navbar = () => {
    return (
      <View style={styles.navbarContainer}>
        <View style={styles.navbarContainer}>
            <TouchableOpacity style={styles.navItem}>
                <MaterialIcons name="home" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}>
                <MaterialIcons name="restaurant-menu" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}>
                <MaterialIcons name="calendar-today" size={24} color="black" />
            </TouchableOpacity>
        </View>
      </View>
    );
  };

const FoodRecommendation = () => {
    return (
        <View style={styles.container}>
        <ScrollView style={styles.content}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerText}>Today's Meal</Text>
          </View>
    
          {/* Challenge Section */}
          <TouchableOpacity style={styles.challengeCard}>
            <Image
              source={require('medimind/assets/Vegan_Month.png')}
              style={styles.challengeImage}
            />
          </TouchableOpacity>
    
          {/* AI Suggestions Header */}
          <View style={styles.suggestionsHeader}>
            <Text style={styles.suggestionsTitle}>AI Suggestions For You</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
    
          {/* Meal Suggestions List */}
          <View style={styles.mealList}>
            {/* Each meal item is a TouchableOpacity */}
            <TouchableOpacity style={styles.mealItem}>
              <Image
                source={require('medimind/assets/Salmon_Dish.png')}
                style={styles.mealImage}
              />
            </TouchableOpacity>
    
            <TouchableOpacity style={styles.mealItem}>
              <Image
                source={require('medimind/assets/Roasted_Pork.png')}
                style={styles.mealImage}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.mealItem}>
              <Image
                source={require('medimind/assets/Salad.png')}
                style={styles.mealImage}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.mealItem}>
              <Image
                source={require('medimind/assets/Potatos_and_Beans.png')}
                style={styles.mealImage}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.mealItem}>
              <Image
                source={require('medimind/assets/Steak_Tacos.png')}
                style={styles.mealImage}
              />
            </TouchableOpacity>
    
            {/* ... Other meals */}
          </View>
        </ScrollView>

        <Navbar/>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      content: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 50,
        paddingRight: 10,
        paddingLeft: 10,
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
      },
      headerText: {
        fontSize: 40,
        fontWeight: 'bold',
      },
      challengeCard: {
        margin: 10,
        borderRadius: 10,
        overflow: 'hidden',
      },
      challengeImage: {
        width: 400,
        height: 200,
        resizeMode: 'cover',
      },
      challengeOverlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.3)',
        paddingHorizontal: 10,
        paddingVertical: 5,
      },
      suggestionsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
      },
      suggestionsTitle: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      seeAllText: {
        fontSize: 16,
        color: '#74B72E',
      },
      mealList: {
        // List styling
      },
      mealItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        marginVertical: 5,
        marginLeft: 10,
      },
      mealImage: {
        width: 360,
        height: 150,
        borderRadius: 10,
      },
      mealTitle: {
        fontWeight: 'bold',
        fontSize: 18,
      },
      mealInfo: {
        fontSize: 14,
        color: 'gray',
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

export default FoodRecommendation;
