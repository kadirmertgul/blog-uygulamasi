/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from "./src/screens/IndexScreen.tsx";
import CreateScreen from "./src/screens/CreateScreen.tsx";
import { Provider } from "./src/context/BlogContext.tsx";
import ShowScreen from "./src/screens/ShowScreen.tsx";
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import EditScreen from "./src/screens/EditScreen.tsx";


const Stack = createNativeStackNavigator();


export default function App() {
    return (
        <Provider>
            <NavigationContainer>
                <Stack.Navigator screenOptions={ { headerTitle: 'Kmg Blog' } }>
                    <Stack.Screen name="Index" component={ IndexScreen } options={({navigation})=>({headerRight:()=>(
                        <TouchableOpacity onPress={()=>navigation.navigate('Create')}>
                            <AntDesign name="plus" size={24} color="black" />
                        </TouchableOpacity>
                        )})}/>
                    <Stack.Screen name="Create" component={ CreateScreen }/>
                    <Stack.Screen name="Show" component={ ShowScreen } options={({navigation, route})=>({headerRight:()=>(
                            <TouchableOpacity onPress={()=>navigation.navigate('Edit',{id: route.params.id})}>
                                <AntDesign name="edit" size={24} color="black" />
                            </TouchableOpacity>
                        )})}/>
                    <Stack.Screen name="Edit" component={ EditScreen }/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
