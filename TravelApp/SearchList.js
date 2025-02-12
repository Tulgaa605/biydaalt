import React, { useState } from "react";
import { View, TextInput, StyleSheet ,Text} from "react-native";
import Cards from "./cards";
import DestinationCard from "./DestinationCard";
import CategoryList from "./CategoryList";
import { BoxShadow } from 'react-native-shadow';
import MoveAnimationExample from "../MoveAnimationExample";
const DATA = [
    { 
      id: 1, 
      name: "Landmannalaugar", 
      description: "A stunning natural reserve in Iceland known for its colorful mountains and geothermal hot springs.", 
      imageUrl: "https://images.pexels.com/photos/2245436/pexels-photo-2245436.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
      price: 1500, 
      rate: 4.9 
    },
    { 
      id: 2, 
      name: "Great Wall of China", 
      description: "One of the most iconic landmarks in the world, stretching over 13,000 miles.", 
      imageUrl: "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=600", 
      price: 1000, 
      rate: 4.7 
    },
    { 
      id: 3, 
      name: "Machu Picchu", 
      description: "An ancient Incan city set high in the Andes Mountains in Peru, famous for its breathtaking views.", 
      imageUrl: "https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg?auto=compress&cs=tinysrgb&w=600", 
      price: 1200, 
      rate: 4.8 
    },
    { 
      id: 4, 
      name: "Eiffel Tower", 
      description: "A world-famous iron tower in Paris, offering stunning views of the city.", 
      imageUrl: "https://images.pexels.com/photos/2087391/pexels-photo-2087391.jpeg?auto=compress&cs=tinysrgb&w=600", 
      price: 800, 
      rate: 4.6 
    },
    { 
      id: 5, 
      name: "Grand Canyon", 
      description: "A vast and breathtaking canyon carved by the Colorado River, offering scenic views and hiking trails.", 
      imageUrl: "https://images.pexels.com/photos/2132126/pexels-photo-2132126.jpeg?auto=compress&cs=tinysrgb&w=600", 
      price: 400, 
      rate: 4.9 
    },
    { 
      id: 6, 
      name: "Tokyo Skytree", 
      description: "A broadcasting and observation tower offering panoramic views of Tokyo.", 
      imageUrl: "https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&w=600", 
      price: 700, 
      rate: 4.7 
    },
    { 
      id: 7, 
      name: "Santorini", 
      description: "A picturesque Greek island known for its white-washed houses, stunning sunsets, and crystal-clear waters.", 
      imageUrl: "https://images.pexels.com/photos/2070485/pexels-photo-2070485.jpeg?auto=compress&cs=tinysrgb&w=600", 
      price: 2000, 
      rate: 4.8 
    },
    { 
      id: 8, 
      name: "Bora Bora", 
      description: "A tropical paradise in the South Pacific, famous for its turquoise lagoons and luxurious overwater bungalows.", 
      imageUrl: "https://images.pexels.com/photos/2178175/pexels-photo-2178175.jpeg?auto=compress&cs=tinysrgb&w=600", 
      price: 2500, 
      rate: 4.9 
    },
    { 
      id: 9, 
      name: "Banff National Park", 
      description: "A beautiful national park in Canada, known for its turquoise lakes, snow-capped peaks, and hiking trails.", 
      imageUrl: "https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=600", 
      price: 1300, 
      rate: 4.8 
    },
    { 
      id: 10, 
      name: "Sydney Opera House", 
      description: "An iconic architectural masterpiece in Australia, renowned for its unique design and cultural significance.", 
      imageUrl: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=600", 
      price: 900, 
      rate: 4.7 
    },
    { 
      id: 11, 
      name: "Dubai Burj Khalifa", 
      description: "The tallest building in the world, offering panoramic views of Dubai and luxurious experiences.", 
      imageUrl: "https://images.pexels.com/photos/2253821/pexels-photo-2253821.jpeg?auto=compress&cs=tinysrgb&w=600", 
      price: 1500, 
      rate: 4.8 
    },
    { 
      id: 12, 
      name: "Victoria Falls", 
      description: "One of the largest and most famous waterfalls in the world, located on the Zambezi River between Zambia and Zimbabwe.", 
      imageUrl: "https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg?auto=compress&cs=tinysrgb&w=600", 
      price: 1200, 
      rate: 4.8 
    },
    { 
      id: 13, 
      name: "Antarctica", 
      description: "A pristine and remote continent, known for its glaciers, wildlife, and breathtaking ice formations.", 
      imageUrl: "https://images.pexels.com/photos/2662086/pexels-photo-2662086.jpeg?auto=compress&cs=tinysrgb&w=600", 
      price: 5000, 
      rate: 5.0 
    },
    { 
      id: 14, 
      name: "Petra", 
      description: "An ancient city carved into red sandstone cliffs, known for its impressive ruins and historical significance.", 
      imageUrl: "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=600", 
      price: 1100, 
      rate: 4.7 
    },
    { 
      id: 15, 
      name: "Niagara Falls", 
      description: "A famous waterfall on the border of Canada and the USA, known for its sheer power and breathtaking beauty.", 
      imageUrl: "https://images.pexels.com/photos/210012/pexels-photo-210012.jpeg?auto=compress&cs=tinysrgb&w=600", 
      price: 800, 
      rate: 4.6 
    },
    { 
      id: 16, 
      name: "Galapagos Islands", 
      description: "A remote archipelago known for its unique wildlife and pristine ecosystems.", 
      imageUrl: "https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=600", 
      price: 3500, 
      rate: 5.0 
    },
    { 
      id: 17, 
      name: "Pyramids of Giza", 
      description: "One of the Seven Wonders of the Ancient World, located in Egypt and home to the famous Great Pyramid.", 
      imageUrl: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=600", 
      price: 950, 
      rate: 4.8 
    },
    { 
      id: 18, 
      name: "Mount Fuji", 
      description: "An iconic volcanic mountain in Japan, famous for its symmetrical shape and cultural importance.", 
      imageUrl: "https://images.pexels.com/photos/531602/pexels-photo-531602.jpeg?auto=compress&cs=tinysrgb&w=600", 
      price: 1100, 
      rate: 4.7 
    },
    { 
      id: 19, 
      name: "Kruger National Park", 
      description: "A world-renowned safari destination in South Africa, known for its wildlife and natural beauty.", 
      imageUrl: "https://images.pexels.com/photos/2105937/pexels-photo-2105937.jpeg?auto=compress&cs=tinysrgb&w=600", 
      price: 2000, 
      rate: 4.9 
    },
    { 
      id: 20, 
      name: "Santorini", 
      description: "A picturesque Greek island known for its white-washed houses, stunning sunsets, and crystal-clear waters.", 
      imageUrl: "https://images.pexels.com/photos/2772586/pexels-photo-2772586.jpeg", 
      price: 1800, 
      rate: 4.9 
    },
  ];
  


const SearchList = () => {
  const [searchText, setSearchText] = useState("");
  const [focused, setFocused] = useState(false);
  const shadowOpt = {
    width: 344,
    height: 60,
    color: '#ff0000',
    border: 10,
    radius: 15,
    opacity: 0.5,
    x: 0,
    y: 5,
    
  };
  const filteredData = DATA.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <BoxShadow setting={focused ? { ...shadowOpt, color: "#D0D0D0" } : { ...shadowOpt, color: "#ccc" }}>
        <TextInput
          style={[styles.input, focused && styles.inputFocused]} 
          placeholder="Search"
          placeholderTextColor="#888"
          value={searchText}
          onChangeText={setSearchText}
          autoComplete="off"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      </BoxShadow>
      <View style={styles.greetingContainer}>
        <Text style={styles.greeting}>Hi John,</Text>
        </View>
        <View style={styles.questionContainer}>
            <Text style={styles.question}>Where do you wanna go?</Text>
        </View>
      <DestinationCard/>
      <CategoryList/>
      <Cards data={filteredData} />
      <MoveAnimationExample/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  input: {
    height: 60,
    width: 344,
    paddingHorizontal: 20,
    fontSize: 16,
    marginBottom: 20,
    color: 'black',
    borderWidth: 0,
    borderRadius: 15,
    padding: 16,
    backgroundColor: '#F0F0F0',
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: { width: 2, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  inputFocused: {
    backgroundColor: 'white',
    transform: [{ scale: 1.05 }], 
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: { width: 13, height: 13 },
    shadowOpacity: 0.5,
    shadowRadius: 5, 
    elevation: 3,
  },
  greetingContainer: {
    marginTop: 18,
  },
  greeting: {
    color: "#39414B",
    fontSize: 23,
    fontWeight: "300",
  },
  questionContainer: {
    marginTop: 14,
  },
  question: {
    color: "#0A2753",
    fontSize: 41,
    fontWeight: "700",
    lineHeight: 56,
  },
});

export default SearchList;
