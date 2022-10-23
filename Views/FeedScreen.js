import React, {useState} from "react";

import {StyleSheet, TouchableWithoutFeedback, View} from "react-native";
import ColorPalette from "../assets/ColorPalette";
import OffersMap from "../homeScreenComponents/OffersMap";
import MapView from "react-native-maps";
import UpperMenuButton from "../Components/UpperMenuButton";

import Icon from 'react-native-vector-icons/Ionicons';
import Feeds from "../Components/Feeds";
import Filter from "../Components/FilterComponents/Filter";


const FeedScreen = () => {
    const [chosen, changeChosen] = useState("ListView");
    const [filterShown, setFilterShown] = useState(false);

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
                <TouchableWithoutFeedback onPress={() => {
                    console.log('heo')
                    setFilterShown(!filterShown)
                }}>
                    <Icon name={'filter'} size={34} style={styles.filterIcon}
                          color={filterShown ? ColorPalette.orange : ColorPalette.darkgrey}/>
                </TouchableWithoutFeedback>
            </View>
            {content()}
            {
                filterShown ?
                    <Filter></Filter>
                    : <></>
            }
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
    filterIcon: {
        position: 'absolute',
        top: 9,
        right: 20
    }
});
export default FeedScreen;
