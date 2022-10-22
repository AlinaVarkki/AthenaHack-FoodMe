import React, {useEffect, useState} from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    Pressable,
    Image,
    SafeAreaView,
    Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';


import ColorPalette from "../assets/ColorPalette";
import RoundProfileImage from "./RoundProfileImage";


const FeedCard = ({title, description, filter, distance, host, previewImage, people=[]}) => {

    const [buttonText, setButtonText] = useState("JOIN");

    const [participants, setParticipants] = useState(people);
    const [backgroundColor, setBackgroundColor] = useState(ColorPalette.lightOrange);
    const [buttonEnabled, setButtonEnabled] = useState(true);
    const [animationActive,setAnimationActive] = useState(false);

    useEffect(() => {
        if (people.length===0) {
            setButtonText('JOIN')
        } else {
            if (people.length > 4) {
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

            if (participants.length > 3) {
                setBackgroundColor(ColorPalette.lightOrange)
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
            setBackgroundColor(ColorPalette.darkgrey)
        }
    }

    if(animationActive) {

    } else {

        return (
            <View style={[{backgroundColor: backgroundColor}, styles.listing]}>

                <View style={styles.content}>
                    <View style={styles.texts}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline'}}>
                            <Text style={styles.title}>{title}</Text>

                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline'}}>
                            <Text style={styles.filter}>{filter}</Text>
                            <Icon name="location" size={10} color={ColorPalette.white}/>
                            <Text style={styles.location}>{distance} away</Text>
                        </View>
                        <Text style={styles.textWhiteLower}>{description}</Text>
                    </View>

                    <View style={styles.image}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.host}>by {host}</Text>
                            <RoundProfileImage image={people[0]} size={25}/>
                        </View>
                        <Image style={{height: width * 0.30, width: width * 0.45}} source={previewImage}/>
                    </View>

                </View>

                <View style={styles.bottomPart}>

                    {(people.length !== 0) &&
                    <View style={styles.people}>
                        <FlatList
                            data={people}
                            keyExtractor={image => image.toString()}
                            renderItem={profileRender}
                            horizontal={true}

                        />
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 27}}>/5</Text>
                    </View>
                    }


                    <View style={styles.button}>
                        <Pressable style={styles.joinButton} onPress={updateParticipant}>
                            <Text style={styles.buttonText}>{buttonText}</Text>
                        </Pressable>
                    </View>
                </View>


            </View>

        );

    }

}

const {width} = Dimensions.get("screen");

const styles = StyleSheet.create({
    listing: {
        flex: 1,
        width: '100%',
  //      height: 190,
        paddingHorizontal: 20,
        borderRadius: 30,
        flexWrap: 'nowrap',
        justifyContent:'space-between',
        marginVertical:15,
        backgroundColor: ColorPalette.lightOrange

    },
    content:{
        // justifyContent:'space-between'
        alignItems:'flex-end'
    },
    texts:{
        width: '50%',
        alignSelf:'flex-start',
        paddingTop: 20,
        paddingLeft: 20,
        backgroundColor: 'green'
    },
    image:{
        height: width*0.3,
        width: width*0.3,
        position:'absolute',
        //marginTop: -20,
        paddingRight: 20,
        paddingTop: 20,
        paddingBottom:5,
        backgroundColor:'red'

    },
    bottomPart:{
        paddingBottom: 10,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent:'space-evenly',
        alignItems:'baseline',
        // backgroundColor:'red'
    },
    people:{
        // flex: 1,
        justifyContent:'flex-start',
        // backgroundColor:'green',
        flexDirection: 'row',
        width: '66%',
        marginRight:5
    },
    button:{
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 22,
    },
    filter:{
        backgroundColor: ColorPalette.offwhite,
        fontWeight: 'bold',
        paddingVertical: 2,
        paddingHorizontal: 10,
        color: ColorPalette.lightOrange,
        borderRadius: 5,
        fontSize: 13
    },
    location: {
        color: ColorPalette.offwhite,

    },
    host:{
        fontWeight: 'bold',
        color: ColorPalette.offwhite,
        paddingRight: 5,
    },
    textWhiteLower: {
        paddingTop: 5,
        color: 'white',
        fontSize: 16,
    },
    joinButton: {
        backgroundColor: '#FFF2D8',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 20,
        elevation: 3,
        margin: 5,
    },
    buttonText: {
        color: '#FFAC00',
        fontWeight: 'bold',
        fontSize: 19
    }
})

export default FeedCard;
