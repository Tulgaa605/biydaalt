import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TravelScreen from "./TravelApp/TravelScreen";
import Details from "./TravelApp/Details";
import Blog from "./tabnavigator/blog";
import Profile from "./tabnavigator/Profile";
import TravelCompany from "./tabnavigator/travelCompany";
import Post from "./post/post";
import LoginScreen from "./TravelApp/login/login";  // Import your login screen
import SignupScreen from "./TravelApp/login/signUp";  // Import your signup screen

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={TravelScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={Details} options={{ headerShown: false }} />
        <Stack.Screen name="Blog" component={Blog} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name="TravelCompany" component={TravelCompany} options={{ headerShown: false }} />
        <Stack.Screen name="Post" component={Post} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
