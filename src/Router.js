import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from './screens/Login/Login';
import Home from './screens/Home/Home';
import Profile from './screens/Profile/Profile';
import Register from './screens/Register/Register';
import Settings from './screens/Settings/Settings';
import Watchlist from './screens/Watchlist/Watchlist';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const NestedTab = () => {
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Watchlist" component={Watchlist} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  </NavigationContainer>;
};

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={false}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
