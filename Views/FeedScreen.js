import React, {useState} from "react";

import {StyleSheet, View} from "react-native";
import ColorPalette from "../assets/ColorPalette";
import OffersMap from "../homeScreenComponents/OffersMap";
import MapView from "react-native-maps";
import UpperMenuButton from "../Components/UpperMenuButton";

import Feeds from "../Components/Feeds";


const FeedScreen = () => {
    const [chosen, changeChosen] = useState("ListView");

    const content = () => {
        switch (chosen) {
            case "ListView":
                return (<Feeds/>);
            default:
                return (<OffersMap/>);
        }
    }

    return (
        <>
            <View style={styles.topNav}>
                <UpperMenuButton name="home" text="List" callback={() => changeChosen("ListView")}
                                 color={chosen === "ListView" ? ColorPalette.orange : ColorPalette.darkgrey}/>
                <UpperMenuButton name="home" text="Map" callback={() => changeChosen("MapView")}
                                 color={chosen === "MapView" ? ColorPalette.orange : ColorPalette.darkgrey}/>
            </View>
            {content()}
        </>
    )

};

const styles = StyleSheet.create({
    topNav: {
        height: '9.5%',
        width: '100%',
        alignItems: 'stretch',
        borderBottomWidth: 1,
        borderColor: ColorPalette.darkOrange,
        borderTopColor: 'grey',
        flexDirection: 'row',
    },
});
export default FeedScreen;
