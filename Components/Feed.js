import React, {useEffect, useState} from 'react';
import { View } from 'react-native';
import FeedCard from './FeedCard';

const Feed = ({children}) => {

    // useEffect(() => {
    //     loadListings();
    // }, []);

    const [listings, setListings] = useState([]);

    const photos = [
        require('../Resources/Elements/Pizza.png')
    ]

    const getImages = (names) => {
        let images = []
        let namesArr = names.split(" ")
        console.log("Hey" + names)
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

    return (
        <View style={{flex: 1}}>

        <FeedCard
            title="Pissta"
            description="have some delicious food yum yum"
            filter="gluten"
            distance="100 m"
            host="Annie"
            previewImage={photos[0]}
            people={getImages("Alina Kathie")}
        />

        </View>
    );


}

export default Feed;