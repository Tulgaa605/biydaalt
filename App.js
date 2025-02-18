import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TravelScreen from "./TravelApp/TravelScreen";
import Details from "./TravelApp/Details";
import Blog from "./tabnavigator/blog";
import Profile from "./tabnavigator/Profile";
import TravelCompany from "./tabnavigator/travelCompany";
import Post from "./post/post";

const Stack = createStackNavigator();

export default function App() {
  
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={TravelScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Details" component={Details} options={{ headerShown: false }} sharedElementsConfig={Details.sharedElements} />
          <Stack.Screen name="Blog" component={Blog} options={{ headerShown: false }} />
          <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
          <Stack.Screen name="TravelCompany" component={TravelCompany} options={{ headerShown: false }} />
          <Stack.Screen name="Post" component={Post} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
