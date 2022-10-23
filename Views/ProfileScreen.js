import React from "react";

import {StyleSheet, View, Text, Image} from "react-native";
import ColorPalette from "../assets/ColorPalette";


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
        justifyContent: 'space-between'
    },
    profileImage: {
        height: 110,
        width: 110,
        borderRadius: 30
    },
    nameUsernameSection: {
        margin: 23
    },
    nameText: {
        fontWeight: 'bold',
        fontSize: 26
    },
    usernameText: {
        fontSize: 22,
        color: ColorPalette.orange
    }
});

export default ProfileScreen;
