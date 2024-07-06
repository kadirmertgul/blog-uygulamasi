import React, { useState, useReducer } from 'react';
import createDataContext from "./CreateDataContext.tsx";
import jsonServer from "../../api/jsonServer.tsx";


const blogReducer = (state, action) => {
    switch (action.type) {
        case 'get_blogpost':
            return action.payload

        case 'edit_blogpost':
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id ? action.payload : blogPost;
            })


        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.payload)
        default:
            return state;
    }
};
const addBlogPost = () => {
    return async (title, content, callback) => {
        await jsonServer.post('/blogposts', {title, content})
        if (callback) {
            callback();
        }
    }
};
const editBlogPost = (dispatch) => {
    return async (id, title, content, callback) => {
        await jsonServer.put(`/blogposts/${id}`, {title, content})
        dispatch({ type: 'edit_blogpost', payload: { id, title, content } });
        if (callback) {
            callback();
        }
    }
};
const getBlogPosts = (dispatch) => {
    return async () => {
        const respone = await jsonServer.get('/blogposts')
        dispatch({ type: 'get_blogpost', payload: respone.data });

    }
};
const deleteBlogPost = (dispatch) => {
    return async (id) => {
        await jsonServer.delete(`/blogposts/${id}`)
        dispatch({ type: 'delete_blogpost', payload: id });
    }
}

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts }, []);
