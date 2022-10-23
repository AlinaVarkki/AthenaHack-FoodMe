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


const FeedCardAction = ({title, description, filter, distance, host, previewImage, people=[], hosted, inProgress}) => {

    const [participants, setParticipants] = useState(people);
    const [backgroundColor, setBackgroundColor] = useState(ColorPalette.white);
    const [textColor, setTextColor] = useState(ColorPalette.darkness);
    const [buttonEnabled, setButtonEnabled] = useState(true);
    const [animationActive,setAnimationActive] = useState(false);

    const profileRender = ({item}) => (
        <View style={{paddingHorizontal: 2}}>
            <RoundProfileImage
                image={item}
                size={31}
            />
        </View>
    )

        return (
            <View>
            <View style={[{backgroundColor: backgroundColor}, styles.listing]}>

                <View style={styles.content}>
                    <View style={styles.texts}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline'}}>
                            <Text style={[{color: textColor}, styles.title]}>{title}</Text>

                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline'}}>
                            <Text style={styles.filter}>{filter}</Text>
                            {!hosted &&
                            <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
                                <Icon name="home" size={10} style={{color: textColor}}/>
                                <Text style={[{color: textColor}, styles.location]}>  {distance} away</Text>
                            </View> }
                        </View>
                        {!hosted &&
                        <Text style={[{color: textColor}, styles.textWhiteLower]}>{description}</Text>}
                    </View>

                    <View style={styles.image}>
                    {!hosted &&
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>                            
                            <Text style={[{color: ColorPalette.orange}, styles.host]}>by {host} </Text>
                            <RoundProfileImage image={people[0]} size={25}/>
                        </View>
                        }
                        <Image style={{height: width * 0.33, width: width * 0.43, marginTop: hosted ? -12 : 5}} source={previewImage}/>
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
                    </View>
                    }
                </View>
            </View>
                {hosted &&
                <View style={styles.bottomButton}>
                    <Text style={styles.bottomButtonText}>{inProgress ? "MANAGE" : "AGAIN"}</Text>
                </View>
                }
            </View>

        );

    

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
        paddingBottom:5,
        paddingTop: 10,
  //      backgroundColor:'red'

    },
    bottomPart:{
        paddingVertical: 10,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        width: '60%',
     //   backgroundColor:'blue'
    },
    people:{
        // flex: 1,
        justifyContent:'flex-start',
        // backgroundColor:'green',
        flexDirection: 'row',
       // width: '66%',
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
         fontWeight: 'bold',
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
    },
    bottomButton: {
        width: '100%',
        justifyContent: 'space-around',
        flexDirection: 'row', 
        justifyContent: 'flex-end',

    }, 
    bottomButtonText: {
        backgroundColor: ColorPalette.darkness,
        color: ColorPalette.offwhite,
        paddingHorizontal: 18,
        paddingVertical: 8,
        marginRight: '7%',
        borderRadius: 15,
        fontSize: 12,
        fontWeight: 'bold',
        justifyContent:'center',
        elevation: 7,

    }
})

export default FeedCardAction;
