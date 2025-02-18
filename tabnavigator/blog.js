import React from 'react';
import { StyleSheet, View ,ScrollView,Text,StatusBar,TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native"; 
import Icon from "react-native-vector-icons/FontAwesome";

import Tab from './tab';
const Blog = ({navigation}) => {
    return (
        <View>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <StatusBar/>
                <View style={styles.container}>
                    <TouchableOpacity>
                        <Icon name="heart" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="search" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="bell" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.profile}>

                        </View>
                    </TouchableOpacity>

                </View>
                <View style={styles.add}>
                    <TouchableOpacity>
                        <Icon name="plus-square" size={38} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Post")}>
                        <Text style={styles.post}>Add post.....</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <Tab/>
        </View>
    );
}

const styles = StyleSheet.create({
    scrollContainer:{
        height:"100%",
        padding:20
    },
    container:{
        flexDirection:'row',
        justifyContent:'flex-end',
        gap:30
    },
    profile:{
        width:30,
        height:30,
        backgroundColor:'black',
        borderRadius:50
    },
    add:{
        flexDirection:'row',
        textAlign:'center',
        alignItems:'center',
        marginTop:20,
        gap:10
    },
    post:{
        paddingVertical:7,
        paddingHorizontal:115,
        borderColor:'black',
        borderWidth:1,
        borderRadius:30,
        color:'gray'
    }
})

export default Blog;
