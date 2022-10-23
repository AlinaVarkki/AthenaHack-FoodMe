import React from 'react';
import {StyleSheet, View, Dimensions, Text, TouchableWithoutFeedback, Image} from "react-native";
import ColorPalette from "../assets/ColorPalette";


const StoriesBubble = ({photo, storyID, callback}) => {



    const openStory = () => {
        console.log("opening a story")


    }

    return (
        <TouchableWithoutFeedback onPress={callback}>

        <View style={{...styles.box, backgroundColor: ColorPalette.blue}}>
            <Image source={photo} style={styles.photo}/>
        </View>

        </TouchableWithoutFeedback>

    );

}

const {width} = Dimensions.get("screen");
const squareSize = width*0.23;

const styles = StyleSheet.create({
    box: {
        width: squareSize,
        height: squareSize,
        borderRadius: 20,
        margin: 7.5,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,

    },
    photo: {
        width: squareSize,
        height: squareSize,
        borderRadius: 20,
        elevation: 1,
    }
});


export default StoriesBubble;
