import React, { useEffect, useState } from "react";

import ProfileScreen from "../Views/ProfileScreen";
import ImpactScreen from "../Views/ImpactScreen";
import FeedScreen from "../Views/FeedScreen"
import CommunityScreen from "../Views/CommunityScreen";

import BottomMenuButton from "../Components/BottomMenuButton";
import ColorPalette from "../assets/ColorPalette.js"

import { SafeAreaView, View, StyleSheet, StatusBar } from "react-native";

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
            <View style={styles.bottom}>
                <View style={styles.row}>
                    <BottomMenuButton font="AntDesign" name="home" text="impact" callback={()=>changeChosen("ImpactScreen")} color={chosen === "ImpactScreen" ? ColorPalette.green : ColorPalette.darkgrey}/>
                    <BottomMenuButton font="AntDesign" name="home" text="feed" callback={()=>changeChosen("FeedScreen")} color={chosen === "FeedScreen" ? ColorPalette.green : ColorPalette.darkgrey}/>
                    <BottomMenuButton font="AntDesign" name="home" text="community" callback={()=>changeChosen("CommunityScreen")} color={chosen === "CommunityScreen" ? ColorPalette.green : ColorPalette.darkgrey}/>

                </View>
            </View>

        </SafeAreaView>
    )

};

const styles = StyleSheet.create({
    screen: {
        height: '100%',
        flex: 1,
        paddingTop:10,
    },
    main: {
        height: '87.5%',
        paddingHorizontal: 20,
    },
    bottom:{
        height: '12.5%',
        width: '100%',
        alignItems: 'center',

        borderTopWidth: 1,
        borderTopColor: 'grey'
    },
    row:{
        flex:1,
        flexDirection: 'row',
        paddingTop: 5,
    },
});

export default MainScreen;