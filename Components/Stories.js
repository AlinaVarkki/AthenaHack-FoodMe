import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, View, FlatList} from "react-native";
import StoriesBubble from "./StoriesBubble";
import NewStoryAdder from "./NewStoryAdder";
import * as ImagePicker from "expo-image-picker";
import {useNavigation} from "@react-navigation/native";

const Stories = ({pictures}) => {


    const navigation = useNavigation();
    const [photos, addPhoto] = useState(pictures);

    const [refresh, toggleRefresh] = useState(true);

    const stories = [{
        id: 'capture',
        photo: require('../Resources/Squares/Boi2.png')
    },
    {
        id: 'upload',
        photo: require('../Resources/Squares/Boi4.png')

    }];

    useEffect(()=>{

    },[refresh]);

    const openStories = (id) => {
        // const args = {id:id, pictures:photos};
        // navigation.navigate("StoriesSlides", {args});
    };

    const captureImage = async () => {
        let options = {
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 0.5,
            saveToPhotos: true,
            storageOptions: {
                privateDirectory: true,
            },
            base64: true,
        };

        let result = await ImagePicker.launchCameraAsync(options);

        if (!result.cancelled) {
            const image = result.uri;
            const entry = {id: ""+Math.random(), photo: {uri:image}};
            photos.push(entry);
            addPhoto(photos);
            toggleRefresh(!refresh);

        }
    };

    const uploadImage = async () => {
        let options = {
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 0.5,
            saveToPhotos: true,
            storageOptions: {
                privateDirectory: true,
            },
            base64: true,
        };

        let result = await ImagePicker.launchImageLibraryAsync(options);

        if (!result.cancelled) {
            const image = result.uri;
            const entry = {id: ""+Math.random(), photo: {uri:image}};
            photos.push(entry);
            addPhoto(photos);
            toggleRefresh(!refresh);


        }
    };



    const renderStory = ({item}) => {
        if (item.id === 'capture' ) {
           return (
               <NewStoryAdder handler={captureImage} type={'capture'}/>
           );

        } else if (item.id === 'upload' ) {
            return (
                <NewStoryAdder handler={uploadImage} type={'upload'}/>

                );
        } else {
            return (
                <StoriesBubble photo={item.photo} storyID={item.id} callback={()=>openStories(item.id)}/>
            );
        }
    };

    return (
        <View style={styles.container}>

            <FlatList
                data={stories.concat(photos.reverse())}
                renderItem={renderStory}
                keyExtractor={item => item.id}
                horizontal={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            />


        </View>
    );

}

const {width} = Dimensions.get("screen");


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        height: width*0.3,

    },

});


export default Stories;
