import React from "react";

import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";
import ColorPalette from "../assets/ColorPalette";

const UpperMenuButton = ({callback, text, color}) => {
    return (
        <TouchableWithoutFeedback onPress={callback}>
            <View style={[styles.wordButton, {borderBottomColor: color==ColorPalette.orange ? color : ColorPalette.offwhite}]} >
                <Text style={{color: color, fontSize: 30, fontWeight: "bold"}}>{text}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    wordButton: {
//        width:'33%',
        justifyContent:'center',
        marginBottom: 5,
        marginHorizontal: 20,
        paddingRight: 30,
        borderBottomWidth: 4,
    }
});


export default UpperMenuButton;
