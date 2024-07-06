// Import necessary components here
import React, { useContext, useEffect } from 'react';
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from 'react-native';
import {Context} from "../context/BlogContext.tsx";
import Feather from 'react-native-vector-icons/dist/Feather';
// Create Details screen
const IndexScreen = ({navigation}) => {
    const { state, addBlogPost, deleteBlogPost, getBlogPosts } = useContext(Context);

    useEffect(() => {
        getBlogPosts();

       const listener = navigation.addListener('focus', ()=>{
            getBlogPosts();
        })
        return ()=>{

        }

    }, []);
    return (
        <View>
            <FlatList
                data={ state }
                keyExtractor={ blogPosts => blogPosts.id }
                renderItem={ ({ item }) => {
                    return (
                        <TouchableOpacity onPress={()=> navigation.navigate('Show',{id: item.id})}>
                            <View style={styles.row}>
                                <Text style={styles.title}> { item.title }</Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <Feather name="trash" size={24} color="black" />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                } }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderColor: 'red',
    },
    title: {
        fontSize: 20,

    }
});

// Export this component for use in other files
export default IndexScreen;
