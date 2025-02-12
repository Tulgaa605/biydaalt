import React from "react";
import { View, StyleSheet, Text } from "react-native";

const CategoryItem = ({  name, isActive }) => {
  return (
    <View style={[styles.categoryItem, isActive && styles.activeItem]}>
      <Text style={[styles.categoryName, isActive && styles.activeText]}>
        {name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryItem: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "rgba(214, 214, 214, 1)",
    paddingHorizontal: 13,
    paddingVertical: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginRight: 10, 
  },
  activeItem: {
    backgroundColor: "#275D5F",
    borderColor: "#275D5F",
  },
  categoryIcon: {
    width: 21,
    height: 21,
    marginRight: 10, 
  },
  categoryName: {
    color: "#6A778B",
    fontSize: 14,
  },
  activeText: {
    color: "#FFFFFF",
  },
});

export default CategoryItem;
