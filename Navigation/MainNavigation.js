import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from '@react-navigation/native';

import MainScreen from "../Views/MainScreen";
import ProfileScreen from "../Views/ProfileScreen";
import ImpactScreen from "../Views/ImpactScreen";

const Stack = createStackNavigator();

const MainNavigation = () => (

    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="app name" component={MainScreen} initialParams={{screen:0}}/>
            {/* <Stack.Screen name="ProfileScreen" component={ProfileScreen}/>
            <Stack.Screen name="ImpactScreen" component={ImpactScreen}/> */}
        </Stack.Navigator>
    </NavigationContainer>

)

export default MainNavigation;