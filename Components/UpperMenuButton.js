import React from "react";

import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";

const UpperMenuButton = ({callback, text, color}) => {
    return (
        <TouchableWithoutFeedback onPress={callback}>
            <View style={styles.wordButton} >
                <Text style={{color: color, fontSize: 30}}>{text}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    wordButton: {
        width:'33%',
        justifyContent:'center',
        alignItems:'center',
    }
});


export default UpperMenuButton;
