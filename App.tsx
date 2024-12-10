/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/routes/Home';
import Profile from './src/routes/Profile';
import {Button} from 'react-native';

function App(): React.JSX.Element {
  const Tab = createBottomTabNavigator();
  const [tabState, setTabState] = useState('none');
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false, // This removes the header for all tabs
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          setTabState={setTabState}
        />
        <Tab.Screen
          name="Settings"
          component={Profile}
          options={{
            tabBarStyle: {display: tabState}, // Hides the tab bar for this screen
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
