import React, {useEffect, useState} from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    Pressable,
    Image,
    SafeAreaView,
    Dimensions,
    TouchableWithoutFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from "@react-navigation/native";


import ColorPalette from "../assets/ColorPalette";
import ListingScreen from '../Views/ListingScreen';
import RoundProfileImage from "./RoundProfileImage";


const FeedCardMap = ({title, description, filter, distance, host, previewImage, people=[], highlight}) => {

    const [buttonText, setButtonText] = useState(highlight ? "LEAVE" : "JOIN");

    const [participants, setParticipants] = useState(people);
    const [backgroundColor, setBackgroundColor] = useState(highlight ? ColorPalette.lightOrange : ColorPalette.white);
    const [textColor, setTextColor] = useState(highlight ? ColorPalette.offwhite : ColorPalette.darkness);
    const [buttonEnabled, setButtonEnabled] = useState(true);
    const [animationActive,setAnimationActive] = useState(false);

    const navigation = useNavigation();

    useEffect(() => {
        console.log(highlight)
        if (highlight) {
            setTextColor(ColorPalette.offwhite)
            setBackgroundColor(ColorPalette.lightOrange)
            setButtonText("LEAVE")
        } else {
            setTextColor(ColorPalette.darkness)
            setBackgroundColor(ColorPalette.white)
            setButtonText("JOIN")
        }

        if (people.length===0) {
            setButtonText('JOIN')
        } else {
            if (people.length > 3) {
                setButtonText('FULL')
                setButtonEnabled(false)
            }
            let set = new Set(people)
            if(set.has(require(`../Resources/Avatars/Slavka.png`))) {
                setButtonText('LEAVE')
                setButtonEnabled(false)
            }
        }
    }, []);

    const profileRender = ({item}) => (
        <View style={{paddingHorizontal: 2}}>
            <RoundProfileImage
                image={item}
                size={31}
            />
        </View>
    )

    const updateParticipant = () => {
        let submission = {
            activityName: title,
            user: "Slavka"
        }

        if(buttonText == "JOIN") {
            people.push(require(`../Resources/Avatars/Slavka.png`))
            setParticipants(people)
            setButtonText("LEAVE")
            setBackgroundColor(ColorPalette.lightOrange)
            setTextColor(ColorPalette.offwhite)


            if (participants.length > 3) {
                //   setBackgroundColor(ColorPalette.offwhite)
                //         setAnimationActive(true)
                //         setTimeout(function () {
                //             setAnimationActive(false)
                //         }, 2000);

            }
            setButtonEnabled(false)
        } else {
            console.log("trying to remove");

            people.pop()
            setParticipants(people)
            setButtonText("JOIN")
            setTextColor(ColorPalette.darkness)

            setBackgroundColor(ColorPalette.white)
        }
    }

    const openListing = () => {
        navigation.navigate("ListingScreen", {
            title: title,
            description: description,
            filter: filter,
            distance: distance,
            host:host,
            previewImage:previewImage,
            people:participants
        })
    }

    if(animationActive) {

    } else {

        return (
            <Pressable onPress={openListing} style={[{backgroundColor: backgroundColor}, styles.listing]}>
                <View >

                    <View style={styles.content}>
                        <View style={styles.texts}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline'}}>
                                <Text style={[{color: textColor}, styles.title]}>{title}</Text>

                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                <Text style={styles.filter}>{filter}</Text>
                                <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
                                    <Icon name="location-sharp" size={18} style={{color: highlight ? ColorPalette.offwhite : ColorPalette.orange}}/>
                                    <Text style={[{color: textColor}, styles.location]}> {distance}km away</Text>
                                </View>
                            </View>
                            <Text style={[{color: textColor}, styles.textWhiteLower]}>{description}</Text>
                        </View>

                        <View style={styles.image}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={[{color: textColor}, styles.host]}>by {host} </Text>
                                <RoundProfileImage image={people[0]} size={25}/>
                            </View>
                            <Image style={{height: width * 0.33, width: width * 0.43, marginTop: -5}} source={previewImage}/>
                        </View>

                    </View>

                    <View style={styles.bottomPart}>
                        <View style={styles.button}>
                            <Pressable style={styles.joinButton} onPress={updateParticipant}>
                                <Text style={styles.buttonText}>{buttonText}</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Pressable>

        );

    }

}

const {width} = Dimensions.get("screen");

const styles = StyleSheet.create({
    listing: {
        flex: 1,
        width: '90%',
        //      height: 190,
        paddingHorizontal: 20,
        borderRadius: 30,
        flexWrap: 'nowrap',
        justifyContent:'space-between',
        marginVertical:15,
        marginHorizontal:'5%',
        //     backgroundColor: ColorPalette.lightOrange,
        elevation: 10,
    },
    content:{
        // justifyContent:'space-between'
        alignItems:'flex-end'
    },
    texts:{
        width: '55%',
        alignSelf:'flex-start',
        paddingTop: 10,
        paddingLeft: 20,
        //  backgroundColor: 'green'
    },
    image:{
        height: width*0.3,
        width: width*0.3,
        position:'absolute',
        //marginTop: -20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom:5,
        //      backgroundColor:'red'

    },
    bottomPart:{
        paddingBottom: 10,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        width: '60%',
        //     backgroundColor:'blue'
    },
    people:{
        //   flex: 1,
        justifyContent:'flex-start',
        //       backgroundColor:'green',
        flexDirection: 'row',
        width: '66%',
        marginRight:5
    },
    button:{
    },
    title: {
        //     color: 'white',
        fontWeight: 'bold',
        fontSize: 22,
    },
    filter:{
        backgroundColor: ColorPalette.orange,
        fontWeight: 'bold',
        paddingVertical: 2,
        paddingHorizontal: 10,
        color: ColorPalette.offwhite,
        borderRadius: 5,
        fontSize: 13
    },
    location: {
        //      color: ColorPalette.offwhite,

    },
    host:{
        //   fontWeight: 'bold',
        //     color: ColorPalette.offwhite,
        paddingRight: 5,
    },
    textWhiteLower: {
        paddingTop: 5,
        //       color: 'white',
        fontSize: 16,
    },
    joinButton: {
        backgroundColor: ColorPalette.offwhite,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 4,
        paddingHorizontal: 12,
        borderRadius: 10,
        elevation: 5,
        margin: 5,
    },
    buttonText: {
        color: '#FFAC00',
        fontWeight: 'bold',
        fontSize: 15
    }
})

export default FeedCardMap;
