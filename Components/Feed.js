import React, {useEffect, useState} from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import FeedCard from './FeedCard';

import foodList from '../homeScreenComponents/foodOffers'

const Feed = ({title, joined}) => {

    // useEffect(() => {
    //     loadListings();
    // }, []);

    const [listings, setListings] = useState([]);

    const [filteredListings, setFilteredListings] = useState([]);

    useEffect(() => {
        filterList();
    }, []);

    
    const photos = [
        require('../Resources/Elements/Pizza.png')
    ]

    const getImages = (namesArr) => {
        let images = []
        console.log("Hey" + namesArr)
        for (let i = 0; i < namesArr.length; i++) {
            if (namesArr[i] == 'Alina') images.push(require(`../Resources/Avatars/Alina.png`))
            if (namesArr[i] == 'Annie') images.push(require(`../Resources/Avatars/Annie.png`))
            if (namesArr[i] == 'Kathie') images.push(require(`../Resources/Avatars/Kathie.png`))
            if (namesArr[i] == 'Radina') images.push(require(`../Resources/Avatars/Radina.png`))
            if (namesArr[i] == 'Slavka') images.push(require(`../Resources/Avatars/Slavka.png`))
            if (namesArr[i] == 'Sophie') images.push(require(`../Resources/Avatars/Sophie.png`))
        }
        return images
    }

    const filterList = () => {
        let newList = []
        for (let i = 0; i < foodList.length; i++) {
            if (foodList[i].joined === joined) {
                newList.push(foodList[i]);
            }
        }
        setFilteredListings(newList);
    }

    const listingRender = ({item}) => (
        <FeedCard
            title={item.food}
            description={item.description}
            filter={item.filter}
            distance={item.distance}
            host={item.name}
            previewImage={photos[0]}
            people={getImages(item.people)}
            highlight={joined}
        />
    )

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>{title}</Text>

            <FlatList showsVerticalScrollIndicator={false}
                    data={filteredListings}
                    keyExtractor={item => item.food}
                    renderItem={listingRender}
            />

        </View>
    );


}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center'
    },
    heading: {
        paddingLeft: '7.5%',
        fontSize: 23,
        paddingTop: 7
    }
});


export default Feed;