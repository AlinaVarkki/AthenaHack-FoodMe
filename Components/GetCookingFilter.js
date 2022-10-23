import React, {useState} from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import ColorPalette from '../assets/ColorPalette';



const GetCookingFilter = ({name, selected}) => {

    const [isSelected, setIsSelected] = useState(selected);

    const toggleSelected = () => {
        setIsSelected(!isSelected);
    }

    return (
        <Pressable onPress={toggleSelected}>
            <View style={[styles.container, {backgroundColor: isSelected ? ColorPalette.orange : ColorPalette.white}]}>
                <Text style={[styles.text, {color: isSelected ? ColorPalette.offwhite : ColorPalette.orange}]}>{name}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 7,
        marginHorizontal: 5
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold'
    }
    
});
 export default GetCookingFilter;