import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.locationContainer}>
        <Icon name="enviroment" size={24} color="black" />
        <Text style={styles.locationText}>Dhaka, Bangladesh</Text>
      </View>

      <Image
        resizeMode="contain"
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/21066a2dd5aab136588af9ed786a4705be3460547c86cd6fb3d0fc41350ddc09",
        }}
        style={styles.profileIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center", 
    justifyContent: "space-between",
    paddingHorizontal: 20, 
    paddingVertical: 10,
    width: "100%",
  },
  locationContainer: {
    flexDirection: "row", 
    marginRight:30
     
  },
  locationText: {
    fontSize: 18,
    color: "#6A778B",
    fontWeight: "300",
    marginLeft:30
  },
  profileIcon: {
    width: 53,
    height: 53, 
    borderRadius: 26.5,
  },
});

export default Header;
