import React from "react";

import {StyleSheet, View, Text, Image} from "react-native";
import ColorPalette from "../assets/ColorPalette";
import Icon from "react-native-vector-icons/Feather";


const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.photoNameSection}>
                <Image style={styles.profileImage} source={require(`../Resources/Avatars/Slavka.png`)}/>
                <View style={styles.nameUsernameSection}>
                    <Text style={styles.nameText}>Slavka Borovska</Text>
                    <Text style={styles.usernameText}>@slavkabo</Text>
                </View>
            </View>
            <View style={styles.bioSection}>
                <View style={styles.bioTitleEditSection}>
                    <Text style={styles.bioText}>Bio</Text>
                    <Icon name="edit-2" size={18} style={styles.editIcon}/>
                </View>
                <Text style={styles.bioDescriptionText}>
                    A zero-waste enthusiast and an active cyclist.
                    On the weekends, you can find me in the mountains,
                    Most proud of: stopped travelling by plane ✈️🚫️
                </Text>
            </View>
            <View style={styles.settingsSection}>

            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        margin: 30,
    },
    photoNameSection: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        maxHeight: 120,
        justifyContent: 'space-between',
    },
    profileImage: {
        height: 110,
        width: 110,
        borderRadius: 30
    },
    nameUsernameSection: {
        justifyContent: 'center'
    },
    nameText: {
        fontWeight: 'bold',
        fontSize: 26
    },
    usernameText: {
        fontSize: 22,
        color: ColorPalette.orange
    },
    bioSection: {
        borderRadius: 10,
        paddingVertical: 16,
        paddingHorizontal: 9,
        marginVertical: 15,
        marginHorizontal: -10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 2, height: 4},
        shadowRadius: 10,
        elevation: 4,
        backgroundColor: 'white'
    },
    bioTitleEditSection: {
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    editIcon: {
        color: ColorPalette.orange,
        marginHorizontal: 8
    },
    bioText: {
        fontSize: 17,
        fontWeight: "500",
        marginVertical: 5
    },
    bioDescriptionText: {
        fontSize: 15
    },
    settingsSection: {}
});

export default ProfileScreen;
