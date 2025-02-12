import React from "react";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native";
import Header from "./Header";
import SearchList from "./SearchList";
import Icon from "react-native-vector-icons/AntDesign";
const TravelScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Header />
        <SearchList/>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, 
  },
  container: {
    backgroundColor: "white",
    maxWidth: 480,
    width: "100%",
    paddingLeft: 25,
    paddingTop: 30,
    paddingBottom: 30,
    flexDirection: "column",
    overflow: "hidden",
    alignItems: "stretch",
  },
  bottomImage: {
    borderRadius: 21,
    position: "relative",
    marginTop: 32,
    aspectRatio: 1.8,
  },
});

export default TravelScreen;
