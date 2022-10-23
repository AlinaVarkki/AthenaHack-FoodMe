import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import UpperMenuButton from "../Components/UpperMenuButton";
import ColorPalette from "../assets/ColorPalette";
import FeedsAction from "../Components/FeedsAction";
import OffersMap from "../homeScreenComponents/OffersMap";


const ActionScreen = () => {

    const [chosen, changeChosen] = useState("Hosted");

    const content = () => {
        switch (chosen) {
            case "Hosted":
                return (<FeedsAction hosted={true}/>);
            default:
                return (<FeedsAction hosted={false}/>);
        }
    }


    return (
        <>
            <View style={styles.topNav}>
                <UpperMenuButton name="home" text="Hosted" callback={() => changeChosen("Hosted")}
                                 color={chosen === "Hosted" ? ColorPalette.orange : ColorPalette.darkgrey}/>
                <UpperMenuButton name="home" text="Attended" callback={() => changeChosen("Attended")}
                                 color={chosen === "Attended" ? ColorPalette.orange : ColorPalette.darkgrey}/>
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
        borderTopColor: 'grey',
        flexDirection: 'row',
        paddingLeft: 10,
    },
});

export default ActionScreen;