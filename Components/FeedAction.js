import React, {useEffect, useState} from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import FeedCardAction from './FeedCardAction';

import foodList from '../homeScreenComponents/foodOffers';
import pastDinnersList from '../homeScreenComponents/foodOffersPast'


const FeedAction = ({title, hosted, inProgress}) => {

    const [listings, setListings] = useState([]);

    const [yourCurrentExperiences, setYourCurrentExperiences] = useState([]);
    const [yourPastExperiences, setYourPastExperiences] = useState([]);
    const [attendedExperiences, setAttendedExperiences] = useState([]);



    useEffect(() => {
        setCurrentExp();
        setPastExp();
        console.log(yourCurrentExperiences);
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

    const setCurrentExp = () => {
        let newList = [];
        for (let i = 0; i < foodList.length; i++) {
            if (foodList[i].name == "Slavka") {
                newList.push(foodList[i]);
            }
        }
        setYourCurrentExperiences(newList);
    }

    const setPastExp = () => {
        let hosted = [];
        let attended = [];
        for (let i = 0; i < pastDinnersList.length; i++) {
            if (pastDinnersList[i].name == "Slavka") {
                hosted.push(pastDinnersList[i]);
            } else {
                attended.push(pastDinnersList[i]);
            }
        }
        setYourPastExperiences(hosted);
        setAttendedExperiences(attended);
    }


    const listingRender = ({item}) => (
        <FeedCardAction
            title={item.food}
            description={item.description}
            filter={item.filter}
            distance={item.distance}
            host={item.name}
            previewImage={photos[0]}
            people={getImages(item.people)}
            hosted={hosted}
            inProgress={inProgress}
        />
    )

    return (
        <View style={styles.container}>
            {hosted &&
                        <Text style={styles.heading}>{title}</Text>
                    }

            <FlatList showsVerticalScrollIndicator={false}
                    data={hosted ? (inProgress ? yourCurrentExperiences : yourPastExperiences) : (attendedExperiences)}
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
        paddingLeft: '7%',
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 8,
        marginTop:3
    }
});


export default FeedAction;