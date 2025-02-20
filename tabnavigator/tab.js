import React from 'react';
import { StyleSheet, View ,TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const Tab = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.tabs}>
            <TouchableOpacity style={styles.opacity} onPress={() => navigation.navigate("Home")}>
            <View style={styles.icon}>
                <Icon name="home" size={24} color="white" />

            </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.opacity} onPress={() => navigation.navigate("Blog")}>
            <View style={styles.icon}>
                <Icon name="thumbs-o-up" size={24} color="white" />
                
            </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.opacity} onPress={() => navigation.navigate("Profile")}>
            <View style={styles.icon}>
                <Icon name="globe" size={24} color="white" />

            </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.opacity} onPress={() => navigation.navigate("Profile")}>
            <View style={styles.icon} >
                <Icon name="user" size={24} color="white" />
            </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    tabs:{
        position:"absolute",
        bottom:20,
        backgroundColor:"#5CA79B",
        flexDirection:"row",
        gap:54,
        width:345,
        height:78,
        borderRadius:20,
        alignItems:'center',
        justifyContent:"center",
        marginLeft:25
    },
    opacity:{
        width:30,
        height:30
    }
    
})

export default Tab;
