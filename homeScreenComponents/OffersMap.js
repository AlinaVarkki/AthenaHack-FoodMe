import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {
    StyleSheet,
    View,
    Dimensions,
    Animated,
    FlatList,
} from 'react-native';
import FOOD_OFFERS from './foodOffers';
import React, {useEffect, useState} from "react";
import FeedCard from "../Components/FeedCard";
import FeedCardMap from "../Components/FeedCardMap";

const {width} = Dimensions.get("window");
const CARD_HEIGHT = 200;
const CARD_WIDTH = width * 0.92;

export default function OffersMap() {
    const [markers, setMarkers] = useState([]);

    const mapRef = React.useRef();
    let _scrollView = React.createRef();

    const photos = [
        require('../Resources/Elements/burgernew.png'),
        require('../Resources/Elements/Taco.png'),
        require('../Resources/Elements/Tokoyaki.png'),
        require('../Resources/Elements/sushinew.png'),
        require('../Resources/Elements/Burrito.png'),
    ]

    useEffect(() => {
        const markersLoad = [];

        for (let i = 0; i < FOOD_OFFERS.length; i++) {
            markersLoad.push({
                coordinates: {
                    latitude: FOOD_OFFERS[i].latitude,
                    longitude: FOOD_OFFERS[i].longitude,
                },
                name: FOOD_OFFERS[i].name,
                food: FOOD_OFFERS[i].food,
                description: FOOD_OFFERS[i].description,
                people: FOOD_OFFERS[i].people,
                filter: FOOD_OFFERS[i].filter,
                distance: FOOD_OFFERS[i].distance,
                photoReference: ''
            });
        }

        setMarkers(markersLoad);
    }, []);

    const moveCard = (offset) => {
        let index = Math.floor(offset / CARD_WIDTH + 0.3);
        if (index >= markers.length) {
            index = markers.length - 1;
        }
        if (index <= 0) {
            index = 0;
        }

        const {coordinates} = markers[index];
        console.log(coordinates)

        mapRef.current?.animateToRegion({
            longitude: coordinates.longitude,
            latitude: coordinates.latitude - 0.006,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
        }, 400)
    }

    const onMarkerPress = (mapEventData) => {
        const markerID = mapEventData._targetInst.return.key;

        console.log(markerID)

        let x = (markerID * CARD_WIDTH) + (markerID * CARD_WIDTH);

        _scrollView.current?.scrollTo({x: x, y: 0, animated: true});
    }

    const getImages = (namesArr) => {
        let images = []
        console.log("Hey" + namesArr)
        for (let i = 0; i < namesArr.length; i++) {
            if (namesArr[i] === 'Alina') images.push(require(`../Resources/Avatars/Alina.png`))
            if (namesArr[i] === 'Annie') images.push(require(`../Resources/Avatars/Annie.png`))
            if (namesArr[i] === 'Kathie') images.push(require(`../Resources/Avatars/Kathie.png`))
            if (namesArr[i] === 'Radina') images.push(require(`../Resources/Avatars/Radina.png`))
            if (namesArr[i] === 'Slavka') images.push(require(`../Resources/Avatars/Slavka.png`))
            if (namesArr[i] === 'Sophie') images.push(require(`../Resources/Avatars/Sophie.png`))
        }
        return images
    }

    return (
        <>
            <MapView
                ref={mapRef}
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: 51.4880,
                    longitude: 0.1500,
                    latitudeDelta: 0.08,
                    longitudeDelta: 0.08,
                }}
            >
                {markers?.map((marker, index) => (
                        <Marker
                            title={'`food`'}
                            key={index}
                            coordinate={marker.coordinates}
                            ref={marker => marker}
                            onPress={(e) => onMarkerPress(e)}>
                            <Animated.View style={[styles.markerWrap]}>
                                <Animated.Image
                                    source={{uri: 'https://raw.githubusercontent.com/itzpradip/Food-Finder-React-Native-App/master/assets/map_marker.png'}}
                                    style={[styles.marker]}
                                    resizeMode="cover"
                                />
                            </Animated.View>
                        </Marker>
                    )
                )}
            </MapView>
            <FlatList ref={_scrollView}
                      horizontal={true}
                      snapToAlignment="center"
                      style={styles.scrollView}
                      data={markers}
                      pagingEnabled
                      scrollEventThrottle={1}
                      showsHorizontalScrollIndicator={false}
                      snapToInterval={CARD_WIDTH + 10}
                      contentInset={styles.scrollViewContentInset}
                      contentContainerStyle={{
                          paddingHorizontal: 0
                      }}
                      onMomentumScrollEnd={(value) => moveCard(value.nativeEvent.contentOffset.x)}
                      renderItem={({marker, index}) => {
                          return (
                              <View style={styles.card}>
                                  <FeedCardMap
                                      title={markers[index].food}
                                      description={markers[index].description}
                                      filter={markers[index].filter}
                                      distance={markers[index].distance}
                                      host={markers[index].name}
                                      people={getImages(markers[index].people)}
                                      previewImage={photos[index]}
                                  />
                              </View>
                          )
                      }}/>
        </>
    );
}

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    markerWrap: {
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        height: 50,
    },
    marker: {
        width: 40,
        height: 40,
    },
    card: {
        marginHorizontal: 1,
        color: 'white',
        height: CARD_HEIGHT,
        width: CARD_WIDTH,
        overflow: "hidden",
    },
    scrollView: {
        position: "absolute",
        bottom: 20,
        left: 0,
        right: 0,
        paddingVertical: 10,
    },
    scrollViewContentInset: {
        top: 0,
        left: 20,
        bottom: 0,
        right: 20
    }
});
