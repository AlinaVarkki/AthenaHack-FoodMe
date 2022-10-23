import React, {useState} from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from '@react-navigation/native';

import MainScreen from "../Views/MainScreen";
import ProfileScreen from "../Views/ProfileScreen";
import ImpactScreen from "../Views/ImpactScreen";
import ListingScreen from "../Views/ListingScreen";

const Stack = createStackNavigator();

const MainNavigation = () => (

    <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="app name" component={MainScreen} initialParams={{screen:0}}/>
            <Stack.Screen name="ListingScreen" component={ListingScreen} initialParams={   {
        "title":"Huel",
        "description":"Shake it (the protein shake) till you make it.",
        "filter":"vegan",
        "distance":0.1,
        "host":"Alina",
        "previewImage":require('../Resources/Elements/Pizza.png'),
        "people":["Alina"]
            }}/>
        </Stack.Navigator>
    </NavigationContainer>

)

export default MainNavigation;
