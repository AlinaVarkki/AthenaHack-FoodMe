import React from "react"
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';



import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";
import ColorPalette from "../assets/ColorPalette";

const BottomMenuButton = ({name, callback, text, font}) => {
    if (font == "AntDesign") {
        return (
            <TouchableWithoutFeedback onPress={callback}>
                <View style={styles.icon} >
                    <AntDesign name={name} size={30} color={ColorPalette.offwhite}/>
                    <Text style={{color: ColorPalette.offwhite, fontSize: 14, paddingTop: 4}}>{text}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    } else if (font == "Ionicons") {
        return (
            <TouchableWithoutFeedback onPress={callback}>
                <View style={styles.icon} >
                    <Ionicons name={name} size={30} color={ColorPalette.offwhite}/>
                    <Text style={{color: ColorPalette.offwhite, fontSize: 14, paddingTop: 4}}>{text}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    } else if (font == "Octicons") {
        return (
            <TouchableWithoutFeedback onPress={callback}>
                <View style={styles.icon} >
                    <Octicons name={name} size={30} color={ColorPalette.offwhite}/>
                    <Text style={{color: ColorPalette.offwhite, fontSize: 14, paddingTop: 4}}>{text}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    } 

};

const styles = StyleSheet.create({
    icon: {
        width:'20%',
        justifyContent:'center',
        alignItems:'center',
    }
});


export default BottomMenuButton;