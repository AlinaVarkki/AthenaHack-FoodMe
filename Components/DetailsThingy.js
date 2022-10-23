import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ColorPalette from '../assets/ColorPalette';

const DetailsThingy = ({title, desc, icon}) => {

    return (
        <View style={styles.container}>
            <Icon name={icon} size={20} color={ColorPalette.orange}/>
            <View style={{paddingLeft: 10}}>
            <Text style={{fontWeight: 'bold'}}>{title}</Text>
            {!(desc=="") && <Text>{desc}</Text>}
            </View>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        justifyContent: 'flex-start', 
        alignItems: 'center',
        paddingVertical: 5
    }
});

export default DetailsThingy;