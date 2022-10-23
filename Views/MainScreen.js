import React, { useEffect, useState } from "react";

import ProfileScreen from "../Views/ProfileScreen";
import ImpactScreen from "../Views/ImpactScreen";
import FeedScreen from "../Views/FeedScreen"
import CommunityScreen from "../Views/CommunityScreen";

import BottomMenuButton from "../Components/BottomMenuButton";
import ColorPalette from "../assets/ColorPalette.js"

import { SafeAreaView, View, StyleSheet, StatusBar } from "react-native";
import ActionScreen from "./ActionScreen";

const MainScreen = ({route}) => {

    const [chosen, changeChosen] = useState("FeedScreen");

    useEffect(() => {
        changeChosen('FeedScreen')
    }, [route.params.screen]);

    const content = () => {
        switch (chosen) {
            case "FeedScreen":
                return (<FeedScreen/>);

            case "CommunityScreen":
                return (<CommunityScreen/>);

            case "ImpactScreen":
                return (<ImpactScreen/>);

            case "ActionScreen":
                return (<ActionScreen/>);

            case "ProfileScreen":
                return (<ProfileScreen/>);

            default:
                return (<FeedScreen/>);
        }
    }

    return (
        <SafeAreaView style={styles.screen}>
            <StatusBar/>
            <View style={styles.main}>
                {content()}
            </View>
                <View style={styles.row}>
            <View style={styles.bottom}>
                    <BottomMenuButton font="Ionicons" text="inspire" callback={()=>changeChosen("CommunityScreen")} name={chosen === "CommunityScreen" ? "md-people-circle-sharp" : "md-people-circle-outline"}/>
                    <BottomMenuButton font="Ionicons" text="action" callback={()=>changeChosen("ActionScreen")} name={chosen === "ActionScreen" ? "heart" : "heart-outline"}/>
                    <BottomMenuButton font="Ionicons" text="feed" callback={()=>changeChosen("FeedScreen")} name={chosen === "FeedScreen" ? "home" : "home-outline"}/>
                    <BottomMenuButton font="Ionicons" text="impact" callback={()=>changeChosen("ImpactScreen")} name={chosen === "ImpactScreen" ? "rocket-sharp" : "rocket-outline"}/>
                    <BottomMenuButton font="AntDesign" text="profile" callback={()=>changeChosen("ProfileScreen")} name={chosen === "ProfileScreen" ? "smile-circle" : "smileo"}/>
            </View>
                </View>
        </SafeAreaView>
    )

};

const styles = StyleSheet.create({
    screen: {
        height: '100%',
        flex: 1,
        paddingTop: 10,
        backgroundColor: ColorPalette.white
    },
    main: {
        height: '87.5%',
        paddingHorizontal: 0,
    },
    bottom:{
        backgroundColor: ColorPalette.orange,
        borderRadius: 25,
        width: '93%',
        alignItems: 'center',
        bottom: 10,
        flex:1,
        flexDirection: 'row',
        paddingTop: 5,
        elevation: 5
    },
    row:{
        width: '100%',
        alignItems: 'center',
        height: '10%',
    },
});

export default MainScreen;
