import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Register from "./screens/Register";
import Settings from "./screens/Settings";
import Pokedex from "./screens/Pokedex";
import Watchlist from "./screens/Watchlist";
import PokemonDetail from "./screens/PokemonDetail";
import Abilities from "./screens/Abilities";
import Moves from "./screens/Moves";
import Locations from "./screens/Locations";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function NestedTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Watchlist" component={Watchlist} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

function Router() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Main" component={NestedTab} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Pokedex" component={Pokedex} />
      <Stack.Screen name="PokemonDetail" component={PokemonDetail} />
      <Stack.Screen name="Moves" component={Moves} />
      <Stack.Screen name="Abilities" component={Abilities} />
      <Stack.Screen name="Locations" component={Locations} />
    </Stack.Navigator>
  );
}

export default Router;
