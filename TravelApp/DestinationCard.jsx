import React from "react";
import { View, StyleSheet, ImageBackground, Text } from "react-native";
import { BoxShadow } from 'react-native-shadow';  

const DestinationCard = ({ name, location }) => {
  const shadowOpt = {
    width: 340,  
    height: 340,
    color: "#000",  
    border: 10,  
    radius: 41,  
    opacity: 0.2,  
    x: 0,  
    y: 5,  
    style: styles.shadowStyle, 
  };

  return (
    <BoxShadow setting={shadowOpt}>
      <ImageBackground
        resizeMode="cover"
        source={{ uri: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=600" }}
        style={styles.destinationImage}
        imageStyle={{ borderRadius: 41 }} 
      >
        <View style={styles.destinationInfo}>
          <View style={styles.destinationNameContainer}>
            <Text style={styles.destinationName}>{name}</Text>
          </View>
          <View style={styles.destinationLocationContainer}>
            <Text style={styles.destinationLocation}>{location}</Text>
          </View>
        </View>
      </ImageBackground>
    </BoxShadow>
  );
};

const styles = StyleSheet.create({
  destinationImage: {
    borderRadius: 41,
    alignSelf: "center",
    minHeight: 340,
    width: 340,

    justifyContent: "flex-end", 
    marginBottom:30,
  },
  destinationInfo: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", 
    padding: 15,
    borderBottomLeftRadius: 41,
    borderBottomRightRadius: 41,
  },
  destinationName: {
    color: "#fff",
    fontSize: 23,
    fontWeight: "bold",
  },
  destinationLocation: {
    color: "#f3f3f3",
    fontSize: 16,
    fontWeight: "300",
  },
  shadowStyle: {
    marginTop: 30, 
    marginBottom: 30,
    marginRight: 25,
  },
});

export default DestinationCard;
