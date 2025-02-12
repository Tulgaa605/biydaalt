import React, { useState, useContext } from "react"; 
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const Card = ({ item, onPress }) => {

  return (
    <View style={styles.cars}>
      <TouchableOpacity style={styles.card} onPress={onPress}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
        <View style={styles.sagsandNemeh}>
          <View style={styles.info}>
            <Text style={styles.name}>{item.name}</Text>
            <View style={styles.rate}>
              <Icon name="star" size={24} color="#FBBE21" />
              <Text style={styles.description}>{item.rate}</Text>
              <Text style={styles.price}>${item.price}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cars: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginRight:10
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 5,
    marginBottom: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    width: 170,
    height:250
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    color: "#666",
  },
  rate: {
    flexDirection: "row",
    alignItems: "center",
  },
  sagsandNemeh: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  price:{
    marginLeft:20,
    color:'gray'
  }
});

export default Card;
