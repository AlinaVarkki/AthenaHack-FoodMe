import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {StyleSheet, Text, View, Dimensions, Animated, Image, TouchableOpacity, Linking, ScrollView} from 'react-native';
import FOOD_OFFERS from './foodOffers';
import React, {useEffect, useRef, useState} from "react";

const {width} = Dimensions.get("window");
const CARD_HEIGHT = 180;
const CARD_WIDTH = width * 0.8;

export default function OffersMap() {
    const [markers, setMarkers] = useState([]);
    const [identifiers, setIdentifiers] = useState();

    let mapRef = React.useRef(null);
    let _scrollView = React.createRef();

    useEffect(() => {
        const markersLoad = [];
        const identifiersLoad = []

        for (let i = 0; i < FOOD_OFFERS.length; i++) {
            markersLoad.push({
                coordinates: {
                    latitude: FOOD_OFFERS[i].latitude,
                    longitude: FOOD_OFFERS[i].longitude,
                },
                identifier: 'mk' + i,
                name: FOOD_OFFERS[i].name,
                photoReference: ''
            });
            identifiersLoad.push('mk' + i)
        }

        setIdentifiers(identifiersLoad);
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

        mapRef.current.animateToRegion({
            latitude: 30,
            longitude: 30,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
        }, 350)
    }

    const onMarkerPress = (mapEventData) => {
        const markerID = mapEventData._targetInst.return.key;

        console.log(markerID)

        let x = (markerID * CARD_WIDTH) + (markerID * CARD_WIDTH);

        _scrollView.current?.scrollTo({x: x, y: 0, animated: false});
    }


    return (
        <View>
            <MapView
                ref={mapRef}
                onMapReady={() => {
                    mapRef.current.fitToSuppliedMarkers(identifiers, {
                        edgePadding:
                            {
                                top: 50,
                                right: 50,
                                bottom: 50,
                                left: 50
                            }
                    })
                }}
                style={styles.map}
                provider={PROVIDER_GOOGLE}
            >
                {markers?.map((marker, index) => (
                        <Marker
                            title={'Marcador'}
                            key={index}
                            coordinate={marker.coordinates}
                            ref={marker => marker}
                            identifier={marker.identifier}
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
            <Animated.ScrollView
                ref={_scrollView }
                horizontal
                pagingEnabled
                scrollEventThrottle={1}
                showsHorizontalScrollIndicator={false}
                snapToInterval={CARD_WIDTH + 20}
                snapToAlignment="center"
                style={styles.scrollView}
                contentInset={styles.scrollViewContentInset}
                contentContainerStyle={{
                    paddingHorizontal: 0
                }}
                onMomentumScrollEnd={(value) => moveCard(value.nativeEvent.contentOffset.x)}
            >
                {markers?.map((marker, index) => (
                    <View style={styles.card} key={index}>
                        <Image
                            style={{width: '100%', height: '70%'}}
                            source={{
                                uri: "https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg",
                            }}
                        />
                        <>
                            <Text style={{
                                fontSize: 19,
                                paddingTop: 5,
                                paddingLeft: 10,
                                fontWeight: 'bold',
                                color: 'white'
                            }}>
                                {marker.name}
                            </Text>
                            <TouchableOpacity style={{position: 'absolute', padding: 12, right: 0, bottom: 0}}
                                              onPress={() => {
                                                  Linking.openURL('geo:' + marker.coordinates.latitude + ',' + marker.coordinates.longitude + "?q=" + marker.name).then(r => console.log('lol', r))
                                              }}>
                            </TouchableOpacity>
                        </>
                    </View>
                ))}
            </Animated.ScrollView>
        </View>
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
        elevation: 2,
        borderRadius: 8,
        marginHorizontal: 8,
        color: 'white',
        height: CARD_HEIGHT,
        width: CARD_WIDTH,
        overflow: "hidden",
    },
    scrollView: {
        position: "absolute",
        bottom: 260,
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
