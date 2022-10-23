import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import GetCookingObject from "./GetCookingObject";

const GetCookingObjects = () => {

    const previews = [
        {id: 1, photo: require('../Resources/Recipes/recipe1.png')},
        {id: 4, photo: require('../Resources/Recipes/recipe3.png')},
        {id: 5, photo: require('../Resources/Recipes/recipe4.png')},
        {id: 6, photo: require('../Resources/Recipes/recipe5.png')},
        {id: 7, photo: require('../Resources/Recipes/recipe6.png')},
        {id: 2, photo: require('../Resources/Recipes/recipe2.png')},
    ]

    const renderPreview = ({item}) => {
        return (<GetCookingObject 
            image={item.photo}
        />)
    }

    return (
        <View>
            <FlatList
                data={previews}
                renderItem={renderPreview}
                keyExtractor={item => item.id}
                horizontal={true}
            />
        </View>
    );

};

const styles = StyleSheet.create({
    
});

export default GetCookingObjects;