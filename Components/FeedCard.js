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

import ColorPalette from "../assets/ColorPalette";
import RoundProfileImage from "./RoundProfileImage";


const FeedCard = ({title, description, filter, distance, host, previewImage, people=[]}) => {

    const [buttonText, setButtonText] = useState("JOIN");

    const [participants, setParticipants] = useState(images);
    const [backgroundColor, setBackgroundColor] = useState(ColorPalette.darkgrey);
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

    if(animationActive) {

    } else {

        return (
            <View style={[{backgroundColor: backgroundColor}, styles.listing]}>

                <View style={styles.content}>
                    <View style={styles.texts}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline'}}>
                            <Text style={styles.textWhite}>{activity}</Text>
                        </View>
                        <Text style={styles.textWhiteLower}>{description}</Text>
                    </View>

                    <View style={styles.image}>
                        <Image style={{height: width * 0.4, width: width * 0.4,}} source={photo}/>
                    </View>

                </View>

                <View style={styles.bottomPart}>

                    {(images.length !== 0) &&
                    <View style={styles.people}>
                        <FlatList
                            data={images}
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
        height: 190,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'black',
        flexWrap: 'nowrap',
        justifyContent:'space-between',
        marginVertical:15,
        // backgroundColor: ColorPalette.orange

    },
    content:{
        // justifyContent:'space-between'
        alignItems:'flex-end'


    },
    texts:{
        width: '57%',
        alignSelf:'flex-start',
        paddingTop: 20,
        // backgroundColor: 'green'
    },
    image:{
        height: width*0.4,
        width: width*0.4,
        position:'absolute',
        marginTop: -40,
        paddingBottom:5,
        // backgroundColor:'yellow'

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
    textWhite: {
        paddingLeft: 20,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 19
    }, 
    textWhiteLower: {
        paddingLeft: 20,
        paddingTop: 5,
        color: 'white',
        fontSize: 16
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