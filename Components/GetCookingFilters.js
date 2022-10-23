import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';

import GetCookingFilter from './GetCookingFilter';


const GetCookingFilters = () => {

    const filters = [
        {name: "vegan", selected: true}, 
        {name: "vegetarian", selected: false}, 
        {name: "pescaterian", selected: false}, 
        {name: "dairy-free", selected: false}, 
        {name: "gluten-free", selected: false}];

    const renderFilter = ({item}) => {
        return (<GetCookingFilter 
            name={item.name}
            selected={item.selected}
        />)
    }

    return (
        <View style={styles.container}>
            <FlatList 
                data={filters}
                renderItem={renderFilter}
                keyExtractor={item => item.name}
                horizontal={true}
            />
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
  
    }
});

export default GetCookingFilters;