// Import necessary components here
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from "../context/BlogContext.tsx";

// Create Details screen
const ShowScreen = ({ route }) => {
    const { state } = useContext(Context)
    console.log(route.params.id);
    const blogPost = state.find((blogPost) => blogPost.id === route.params.id);
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <Text style={styles.label}> Başlık </Text>
                <Text style={styles.content}>{ blogPost.title }</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.label}>Başlık </Text>
                <Text style={styles.content}>{ blogPost.content }</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        marginTop: 10,

    },
    container: {
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 25,
        alignItems: 'center',
        width: '80%',
    },
    label:{
        fontSize: 25,
    },
    content:{
        fontSize: 20,
    },

});

// Export this component for use in other files
export default ShowScreen;
