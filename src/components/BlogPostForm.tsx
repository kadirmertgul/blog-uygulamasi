// Import necessary components here
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

// Create Details screen
const BlogPostForm = ({ onSubmit, initialValues, isEditable }) => {
    const [title, setTitle] = useState(initialValues ? initialValues.title : '');
    const [content, setContent] = useState(initialValues ? initialValues.content : '');
    return (
        <View style={ styles.main }>
            <Text style={ styles.label }>Başlığı Giriniz:</Text>
            <TextInput style={ styles.input }
                       value={ title }
                       onChangeText={ (text) => setTitle(text) }
            />
            <Text style={ styles.label }>İçeriği Giriniz:</Text>
            <TextInput style={ styles.input }
                       value={ content }
                       onChangeText={ (text) => setContent(text) }
            />
            <TouchableOpacity style={ styles.butonMain } onPress={ () => onSubmit(title, content) }>
                <View style={ styles.butonView }>
                    { isEditable ? <Text style={ styles.butonText }>Kaydet</Text> :
                        <Text style={ styles.butonText }>Güncelle</Text>
                    }
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        marginTop: 10,
    },
    label: {
        fontSize: 20,
        marginLeft: 10,
    },
    input: {
        borderWidth: 1,
        margin: 10,
        borderRadius: 10,
        padding: 10,
        fontSize: 18,
        marginBottom: 15,
    },
    butonMain: {
        padding: 30,
    },
    butonView: {
        backgroundColor: 'green',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    butonText: {
        color: 'white',
        fontSize: 20,
    },
})

// Export this component for use in other files
export default BlogPostForm;
