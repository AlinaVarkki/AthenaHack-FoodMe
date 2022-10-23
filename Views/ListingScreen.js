import React from 'react';
import {FlatList, ScrollView, StyleSheet, View, Text, Image, TouchableWithoutFeedback, Dimensions, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import ColorPalette from '../assets/ColorPalette';
import DetailsThingy from '../Components/DetailsThingy';
import RoundProfileImage from '../Components/RoundProfileImage';
import Stories from '../Components/Stories';
import {useNavigation} from "@react-navigation/native";



const ListingScreen = (props) => {

    const title = props.route.params.title;
    const description = props.route.params.description;
    const filter = props.route.params.filter;
    const distance = props.route.params.distance;
    const host = props.route.params.host;
    const previewImage = props.route.params.previewImage; 
    const people = props.route.params.people;

    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    };

    const profileRender = ({item}) => (
        <View style={{paddingHorizontal: 6}}>
            <RoundProfileImage
                image={item}
                size={40}
            />
        </View>
    )

    const details = [
        {title: "G1 1BL",
        desc: "Rocky Road 42, buzzer 91",
        icon: "location-sharp"
        },
        {title: "Wednesday, 30th October",
            desc: "starting at 7pm",
            icon: "today-sharp"
            },
            {title: "Drinks are welcome",
                desc: "",
                icon: "restaurant"
                }
    ]

    const detialsRender = ({item}) => (
            <DetailsThingy
                title={item.title}
                desc={item.desc}
                icon={item.icon}
            />
    )

    const photos =       [
        {
            id: 'photo1',
            photo: require('../Resources/Dining/peopleeating.jpg')

        },{
        id: 'photo2',

        photo: require('../Resources/Dining/guycooking.jpg')

    }];




    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={goBack}>
                <Icon name="arrowleft" size={30} color={ColorPalette.orange}/>
            </TouchableWithoutFeedback>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <View style={{width: '55%'}}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>
                <Image source={previewImage} style={[{height: width * 0.33, width: width * 0.43, marginTop: -5}, styles.preview]}/>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                <Text style={styles.filter}>{filter}</Text>
                <Text style={styles.host}>by {host}</Text>
                <RoundProfileImage image={people[0]} size={40}/>
            </View>
            <Text style={styles.subheading}>Joining</Text>
            <View style={styles.people}>
                        <FlatList
                            horizontal={true}
                            data={people}
                            keyExtractor={image => image.toString()}
                            renderItem={profileRender}
                        />
                    </View>
           <Text style={styles.subheading}>Details</Text>
           <View style={styles.details}>
                        <FlatList
                            data={details}
                            keyExtractor={item => item.title}
                            renderItem={detialsRender}
                        />
                    </View>
            <Text style={styles.subheading}>Update</Text>

            <Stories pictures={photos}/>
            <View style={{flexDirection: 'row',justifyContent: 'center'}}>
            <Pressable onPress={goBack} style={styles.button}>
                <Text style={styles.buttonText}>Complete</Text>
            </Pressable>
            </View>

        </View>
    )

}

const {width} = Dimensions.get("screen");


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingVertical: 30,
        paddingLeft: 20,
        color: ColorPalette.white,
        flexWrap: 'nowrap',
        justifyContent:'space-between',
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        marginTop: -10
    },
    filter: {
        backgroundColor: ColorPalette.orange,
        fontWeight: 'bold',
        paddingVertical: 2,
        paddingHorizontal: 10,
        color: ColorPalette.offwhite,
        borderRadius: 5,
        fontSize: 15,
        marginRight:30
    },
    host: {
        color: ColorPalette.orange,
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 7
    },
    subheading: {
        fontSize: 24,
        marginTop: 5
    },
    details: {
        paddingLeft: 5
    },
    button: {
        backgroundColor: ColorPalette.orange,
        borderRadius: 30,
        paddingHorizontal: 30,
        paddingVertical: 10
    },
    buttonText: {
        color: ColorPalette.offwhite,
        fontSize: 20,
        fontWeight: 'bold',

    }
});

export default ListingScreen;