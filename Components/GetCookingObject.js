import React from 'react';
import {StyleSheet, Image, View,Dimensions} from 'react-native';

const GetCookingObjects = ({image}) => {

    return (
        <View style={styles.box}>
            <Image source={image} style={styles.image}/>

        </View>
    );
}

const {width} = Dimensions.get("screen");


const styles = StyleSheet.create({
    box: {
        width: width*0.6,
        height: width*0.4, 
        resizeMode:'stretch',
        borderRadius: 20,
        margin: 7.5,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        backgroundColor: 'yellow'

    },
    image: {
        borderRadius: 15, 
        width: width*0.6,
        height: width*0.4, 
    }
});

export default GetCookingObjects;