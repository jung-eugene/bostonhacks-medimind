// LoginScreen.js
import React from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }) => {
return (
    <View style={styles.container}>
        {/* Logo Image */}
        <Image style={styles.logo} source={require('medimind/assets/logo.png')} />

        {/* Logo and Welcome Text */}
        <Text style={styles.welcomeText}>Welcome to MediMind!</Text>
        <Text style={styles.smallText}>Let’s personalize your fitness and nutrition with AI.</Text>
        
        {/* Email Input */}
        <TextInput style={styles.input} placeholder="Email Address" keyboardType="email-address" />
        
        {/* Password Input */}
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />
        
        {/* Sign In Button */}
        <TouchableOpacity style={styles.button} onPress={() => { /* Handle sign in */ }}>
            <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>

        {/* Links to Signup and Forgot Password */}
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.foot}>
            Don't have an account? {' '}
            <Text style={styles.pressText}>Sign Up.</Text>
            </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { /* Handle forgot password */ }}>
            <Text style={styles.pressText}>Forgot Password</Text>
        </TouchableOpacity>
    </View>
);
};

// SignupScreen.js
const SignupScreen = ({ navigation }) => {
return (
    <View style={styles.container}>
    
    <Image style={styles.logo} source={require('medimind/assets/logo.png')} />

    {/* Logo and Sign Up Text */}
    <Text style={styles.welcomeText}>Sign Up For Free</Text>
    <Text style={styles.smallText}>Just a few quick things to start MediMind.</Text>
    
    {/* Email Input */}
    <TextInput style={styles.input} placeholder="Email Address" keyboardType="email-address" />
    
    {/* Password Input */}
    <TextInput style={styles.input} placeholder="Password" secureTextEntry />
    
    {/* Confirm Password Input */}
    <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry />
    
    {/* Sign Up Button */}
    <TouchableOpacity style={styles.button} onPress={() => { /* Handle sign up */ }}>
            <Text style={styles.buttonText}>Sign Up</Text>
    </TouchableOpacity>
    
    {/* Link to Login */}
    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
    <Text style={styles.foot}>
        Already have an account? {' '}
        <Text style={styles.pressText}>Sign In</Text>
    </Text>
    </TouchableOpacity>
    </View>
);
};

// Common styles
const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    alignItems: 'center',
    backgroundColor: 'white',
},
input: {
    height: 62,
    width: 350,
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#F1F1F1',
    borderRadius: 10, 
},
welcomeText: {
    fontSize: 26,
    fontWeight: 'bold',
    padding: 10,
    paddingTop: 30,
},
smallText: {
    color: '#878787',
    fontSize: 14,
    fontWeight: 'medium',
    paddingBottom: 50,
},
logo: {
    width: 200, 
    height: 150,
},
button: {
    width: 350, // Width of the button
    height: 62, // Height of the button
    borderRadius: 20, // Border radius for rounded corners
    backgroundColor: '#799D00', // Background color
    justifyContent: 'center', // Align text vertically
    alignItems: 'center', // Align text horizontally
},
buttonText: {
    color: 'white', // Text color
    fontSize: 20,
    fontWeight: 'bold',
},
foot: {
    fontWeight: 'bold',
    paddingTop: 10,
    padding: 10
},
pressText: {
    color: '#799D00',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
}
});

export { LoginScreen, SignupScreen };
