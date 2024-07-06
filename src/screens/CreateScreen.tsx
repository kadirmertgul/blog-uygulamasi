// Import necessary components here
import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import BlogPostForm from "../components/BlogPostForm.tsx";
import { Context } from "../context/BlogContext.tsx";

// Create Details screen
const CreateScreen = ({navigation}) => {

    const { addBlogPost } = useContext(Context)
    return (
        <BlogPostForm
            isEditable={true}
            onSubmit={ (title, content) => {
            addBlogPost(title, content, ()=>navigation.navigate('Index'));
        } }/>
    );
};

// Export this component for use in other files
export default CreateScreen;
