import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, StyleSheet } from 'react-native';
import GetStarted from './Components/GetStarted';
import LoginScreen from './Components/LogInScreen';
import SignUpScreen from './Components/SignUpScreen';
import HomePage from './Components/HomePage';
import Challenge from './Components/Challange';
import StreakScreen from './Components/StreakScreen';
import AboutUs from './Components/aboutScreen';
import Profile from './Components/Profile';
import ProfileEdit from './Components/ProfileEdit';
import ProgressTracker from './Components/ProgressTracker';
import CompletedTask from './Components/Completedtask'; // Import CompletedTask
import History from './Components/History'; // Import History

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GetStarted">
        {/* Add all screens */}
        <Stack.Screen
          name="GetStarted"
          component={GetStarted}
          options={{ headerShown: false }}
        />

        {/* Signup Screen */}
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            headerStyle: styles.header,
            headerTitle: () => <Text style={styles.headerText}>Sign Up</Text>,
          }}
        />

        {/* Login Screen */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerStyle: styles.header,
            headerTitle: () => <Text style={styles.headerText}>Login</Text>,
             headerTintColor: 'white'
          }}
        />

        {/* Home Screen */}
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ headerShown: false }}
        />

        {/* Challenge Screen */}
        <Stack.Screen
          name="Challenge"
          component={Challenge}
          options={{
            headerStyle: styles.header,
            headerTitle: () => 
              <Text style={styles.headerText}>Challenge Of The Day</Text>,
            headerTintColor: 'white',
             
          }}
        />

        {/* Streak Screen */}
        <Stack.Screen
          name="Streak"
          component={StreakScreen}
          options={{ headerShown: false }}
        />

        {/* About Us Screen */}
        <Stack.Screen
          name="aboutScreen"
          component={AboutUs}
          options={{
            headerStyle: styles.header,
            headerTitle: () => <Text style={styles.headerText}>About Us</Text>,
            headerTintColor: 'white',
          }}
        />

        {/* Profile Screen */}
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />

        {/* Profile Edit Screen */}
        <Stack.Screen
          name="ProfileEdit"
          component={ProfileEdit}
          options={{ headerShown: false }}
        />

        {/* Progress Tracker Screen */}
        <Stack.Screen
          name="ProgressTracker"
          component={ProgressTracker}
          options={{
            headerStyle: styles.header,
            headerTitle: () => 
              <Text style={styles.headerText}>Progress Tracker</Text>,
               headerTintColor: 'white',
          }}
        />

        {/* Completed Task Screen */}
        <Stack.Screen
          name="Completedtask" 
          component={CompletedTask}
          options={{ headerShown: false }}
         
        />


        <Stack.Screen name="History" component={History} options={{
    headerStyle: styles.header,
    headerTitle: () => <Text style={styles.headerText}>Challenge History</Text>,
    headerTintColor: 'white', 
  }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#32cd32',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
