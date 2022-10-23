import React from "react"
import Icon from 'react-native-vector-icons/AntDesign';

import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";

const BottomMenuButton = ({name, callback, text, color, font}) => {
    return (
        <TouchableWithoutFeedback onPress={callback}>
            <View style={styles.icon} >
                <Icon name={name} size={30} color={color}/>
                <Text style={{color: color, fontSize: 14}}>{text}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    icon: {
        width:'20%',
        justifyContent:'center',
        alignItems:'center',
    }
});


export default BottomMenuButton;