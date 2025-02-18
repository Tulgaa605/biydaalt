import React from "react";
import { SafeAreaView, View, Text, Image, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { SharedElement } from 'react-navigation-shared-element';

const Details = ({ route }) => {
  const { item } = route.params;

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.rates}>
          <SharedElement id={`sharedBox-${item.id}`} style={styles.imageContainer}>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
          </SharedElement>
        </View>

        <View style={styles.container1}>
          <Text style={styles.garchig}>{item.name}</Text>
          <View style={styles.location}>
            <Icon name="enviroment" size={24} color="#FBBE21" />
            <Text style={styles.location1}>{item.name}</Text>
          </View>

          <View style={styles.rate}>
            <Text style={styles.rate1}>{item.rate}</Text>
            {[...Array(5)].map((_, index) => (
              <Icon key={index} name="star" size={20} color="#FBBE21" />
            ))}
          </View>

          <View style={styles.choice}>
            <Text style={styles.text}>About</Text>
            <Text style={styles.text}>Photo</Text>
            <Text style={styles.text}>Blog</Text>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  imageContainer: {
    width: 400,
    height: 490,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  container1: {
    width: 400,
    height: 400,
    backgroundColor: "white",
    borderRadius: 30,
    position: 'relative',
    zIndex: 1,
    bottom: 50,
    padding: 30
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10
  },
  garchig: {
    fontWeight: '900',
    fontSize: 22,
    marginBottom: 10
  },
  location1: {
    fontSize: 18,
  },
  rate: {
    flexDirection: "row",
    alignItems: "center",
  },
  rate1: {
    fontSize: 18,
    color: "#6F7789",
  },
  choice: {
    flexDirection: "row",
    marginTop: 30,
    gap: 97
  },
  text: {
    fontSize: 18,
    color: "#6F7789"
  }
});

export default Details;
