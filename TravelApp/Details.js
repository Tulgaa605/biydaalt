import React, { useState } from "react";
import { SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const Details = ({ route }) => {
  const { item } = route.params;
  const navigation = useNavigation();

  const [selectedSize, setSelectedSize] = useState(null);
  const [count, setCount] = useState(item.price);
  console.log(count)

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header2}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ padding: 10 }}>
          <Icon name="left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.text}>Detail</Text>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ padding: 10 }}>
          <Icon name="hearto" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.rates}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <TouchableOpacity style={styles.rate}>
          <Icon name="star" size={24} color="#FBBE21" />
          <Text style={styles.text1}>{item.rate}</Text>
        </TouchableOpacity>
        <View style={styles.zuraas}></View>
      </View>

      <View>
        <Text style={styles.desc}>Description</Text>
        <View style={styles.descarea}></View>
      </View>

      <View>
        <Text style={styles.size}>Size</Text>
      </View>

      <View style={styles.sizes}>
        {["S", "M", "L"].map((size) => (
          <TouchableOpacity
            key={size}
            style={[
              styles.button,
              selectedSize === size && styles.selectedButton, 
            ]}
            onPress={() => setSelectedSize(size)}
          >
            <Text
              style={[
                styles.buttonText,
                selectedSize === size && styles.selectedButtonText,
              ]}
            >
              {size}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.buy}>
        <View >
          <Text style={styles.prices}>Price</Text>
          <Text style={styles.price}>${count}</Text>
        </View>
        <View style={styles.count}>
          <TouchableOpacity>
            <Text style={styles.delete} onPress={() => setCount(count-item.price)}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.add} onPress={() => setCount(count+item.price)}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.buys}>Buy now</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    gap: 20,
    marginTop: 50,
  },
  header2: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 120,
  },
  image: {
    width: 350,
    height: 230,
    borderRadius: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    color: "#666",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  rate: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  text1: {
    fontSize: 20,
    fontWeight: "bold",
  },
  rates: {
    gap: 10,
  },
  zuraas: {
    backgroundColor: "#E3E3E3",
    width: 340,
    height: 1,
  },
  desc: {
    color: "black",
    fontSize: 20,
    fontWeight: "600",
    marginRight: 240,
  },
  descarea: {
    marginTop: 10,
    width: 350,
    height: 100,
    backgroundColor: "#E3E3E3",
    borderRadius: 20,
  },
  size: {
    color: "black",
    fontSize: 20,
    fontWeight: "600",
    marginRight: 310,
  },
  sizes: {
    flexDirection: "row",
    gap: 20,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 46,
    backgroundColor: "white",
    borderRadius: 20,
    borderColor: "#E3E3E3",
    borderWidth: 1,
  },
  selectedButton: {
    backgroundColor: "#F9F2ED", 
    borderColor: "#C67C4E",
    borderWidth: 1,

  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  selectedButtonText: {
    color: "#C67C4E", 
  },
  buy:{
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'white',
    width:'100%',
    height:65,
    justifyContent:'center',
    gap:20
  },
  buys:{
    paddingVertical: 15,
    paddingHorizontal: 66,
    backgroundColor: "#C67C4E",
    color:'white',
    borderRadius: 20,
    

  },
  price:{
    fontSize:20,
    color:'#C67C4E'
  },
  prices:{
    fontSize:14,
    color:'#909090'
  },
  count:{
    flexDirection:'row',
  },
  delete:{
    padding:10,
    fontSize:28
  },
  add:{
    padding:10,
    fontSize:28
  }
});

export default Details;
