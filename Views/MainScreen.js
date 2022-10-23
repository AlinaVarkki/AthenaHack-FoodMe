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
                    <BottomMenuButton font="AntDesign" name="home" text="inspire" callback={()=>changeChosen("CommunityScreen")} color={chosen === "CommunityScreen" ? ColorPalette.white : ColorPalette.darkgrey}/>
                    <BottomMenuButton font="AntDesign" name="home" text="action" callback={()=>changeChosen("ActionScreen")} color={chosen === "ActionScreen" ? ColorPalette.white : ColorPalette.darkgrey}/>
                    <BottomMenuButton font="AntDesign" name="home" text="feed" callback={()=>changeChosen("FeedScreen")} color={chosen === "FeedScreen" ? ColorPalette.white : ColorPalette.darkgrey}/>
                    <BottomMenuButton font="AntDesign" name="home" text="impact" callback={()=>changeChosen("ImpactScreen")} color={chosen === "ImpactScreen" ? ColorPalette.white : ColorPalette.darkgrey}/>
                    <BottomMenuButton font="AntDesign" name="home" text="profile" callback={()=>changeChosen("ProfileScreen")} color={chosen === "ProfileScreen" ? ColorPalette.white : ColorPalette.darkgrey}/>
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
        borderRadius: 20,
        width: '93%',
        alignItems: 'center',
        bottom: 10,
        flex:1,
        flexDirection: 'row',
        paddingTop: 5,
    },
    row:{
        width: '100%',
        alignItems: 'center',
        height: '12.5%',
    },
});

export default MainScreen;
