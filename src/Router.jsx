import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./screens/Login/Login";
import Home from "./screens/Home/Home";
import Profile from "./screens/Profile/Profile";
import Register from "./screens/Register/Register";
import Settings from "./screens/Settings/Settings";
import Watchlist from "./screens/Settings/Watchlist/Watchlist";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const NestedTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Watchlist" component={Watchlist} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator screenOptions={false}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Main" component={NestedTab} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default Router;
