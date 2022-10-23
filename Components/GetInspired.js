import React from 'react';
import {StyleSheet, View, Image, Dimensions, Text} from 'react-native';
import ColorPalette from '../assets/ColorPalette';
import Icon from 'react-native-vector-icons/AntDesign';


const GetInspired = () => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={require('../Resources/Avatars/Kathie.png')} style={styles.photo}/>
                <View style={{marginLeft: 10}}>
                    <Text style={styles.text}>Super chef of the month</Text>
                    <Text>Kathie made 12 meals</Text>
                </View>
            </View>
            <Icon name="heart" size={30} color={ColorPalette.orange}/>
        </View>
    )

};

const {width} = Dimensions.get("screen");
const squareSize = width*0.17;
const {height} = squareSize+40;

const styles = StyleSheet.create({
    container: {
        width:'93%',
        backgroundColor: ColorPalette.white,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 20,
        elevation: 5,
        padding:20
    },
    photo: {
        width: squareSize,
        height: squareSize,
        borderRadius: 15,
        elevation: 1,
    },
    text: {
        fontSize: 15
    }
});

export default GetInspired;
