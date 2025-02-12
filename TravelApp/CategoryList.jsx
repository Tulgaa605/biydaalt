import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import CategoryItem from "./CategoryItem";

const categories = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/44edad3176d5756f97c47538f7ed945e2a8839b139104db0586458ed3bf9d8e5", name: "Popular" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ec2ceede3f5526e412e9a22831884500636897667ad03ce00a642c21e65e58bc", name: "Lake" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2e34ebb555558f6ea8f136df728ce0e2c056819db3fbc585e3767f5da8119943", name: "Beach" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0f5fec1353eed617f2453dc7ffb39451d4dc974ae1b4f27f24792c1486d0f6ef", name: "Mountain" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef", name: "Forest" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890", name: "Desert" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/abcd1234efgh5678ijkl9101mnopqrstuvwxz234567890abcdef1234567890", name: "City" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/qwertyuiopasdfghjklmnbvcxz1234567890abcdefg", name: "Island" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9876543210abcdef9876543210abcdef9876543210abcdef9876543210abcdef", name: "Village" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/abcdefg12345678hijklmno1234567890abcdef1234", name: "Countryside" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/sunsetmountainbeachforest1234567890abcdefg", name: "Sunset" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/wildlife1234567890abcdef1234567890abcdefg", name: "Wildlife" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/beautiful1234567890abcdefg", name: "River" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/snowylandscape1234567890abcdefg", name: "Snowy" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/mountainrange1234567890abcdefg", name: "Range" },
];


const CategoryList = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryList}>
      {categories.map((category, index) => (
        <CategoryItem
          key={index}
          icon={category.icon}
          name={category.name}
          isActive={index === 0}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  categoryList: {
    flexDirection: "row",
    alignItems: "center", 
    marginTop: 20,
    textAlign:'center'
  },
});

export default CategoryList;
