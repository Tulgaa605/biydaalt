import React from 'react';
import { StyleSheet, View ,ScrollView,Text} from 'react-native';
import { useNavigation } from "@react-navigation/native"; 
import Tab from './tab';
const Profile = ({navigation}) => {
    return (
        <View>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text>hi</Text>
                </View>
            </ScrollView>
            <Tab/>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Profile;
