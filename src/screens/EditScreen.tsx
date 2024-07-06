// Import necessary components here
import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { Context } from "../context/BlogContext.tsx";
import BlogPostForm from "../components/BlogPostForm.tsx";

// Create Details screen
const EditScreen = ({ route, navigation }) => {
    const { state, editBlogPost } = useContext(Context)
    const id = route.params.id;
    const blogPost = state.find((blogPost) => blogPost.id === route.params.id);
    return (
        <BlogPostForm
            isEditable={ false }
            initialValues={ { title: blogPost.title, content: blogPost.content } }
            onSubmit={ ( title, content) => {
                editBlogPost(id, title, content, ()=>navigation.pop());
            } }   />

    );
};

// Export this component for use in other files
export default EditScreen;
