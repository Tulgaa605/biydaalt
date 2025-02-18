import React from "react";
import { View, FlatList, StyleSheet, Image, Text } from "react-native";
import Card from "./card"; 
import { useNavigation } from "@react-navigation/native";
import { SharedElement } from 'react-native-shared-element';

const Cards = ({ data }) => {
  const navigation = useNavigation();

  return (
    <FlatList
      style={styles.container}
      data={data}
      horizontal
      keyExtractor={(item) => item.id.toString()}  
      renderItem={({ item }) => (
        <SharedElement id={`sharedBox-${item.id}`}>
          <Card
            item={item}
            onPress={() => navigation.navigate("Details", { item })}
          />
        </SharedElement>
      )}
      showsHorizontalScrollIndicator={false}  
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 40,
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#EDEDED',
    borderRadius: 6,
    marginRight: 20,
    marginBottom: 25,
  },
});

export default Cards;
