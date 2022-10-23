import React from "react";

import {StyleSheet, View, Text, Image, ScrollView} from "react-native";
import ColorPalette from "../assets/ColorPalette";
import Icon from "react-native-vector-icons/Feather";
import SettingsItem from "../Components/ProfileScreenComponents/SettingsItem";


const ProfileScreen = () => {
<<<<<<< HEAD
  return (
    <View style={styles.container}>
        <Text>profile</Text>
      </View>
      );
=======
    return (
        <ScrollView>
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
                <Text style={styles.settingsText}>Settings</Text>
                <SettingsItem name={"Notifications"} icon={"notifications-outline"} showToggle={true}/>
                <SettingsItem name={"Location"} icon={"location-outline"}/>
                <SettingsItem name={"Payments and payouts"} icon={"ios-card-outline"}/>
                <SettingsItem name={"Privacy and sharing"} icon={"ios-people-outline"}/>
            </View>
        </View>
        </ScrollView>
    );
>>>>>>> 0d46b403a6566f07fc66a30e74cfb816f1d8d24c
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        margin: 30,
    },
<<<<<<< HEAD
  });
    
=======
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
    settingsSection: {
        width: '100%',
        paddingVertical: 20
    },
    settingsText: {
        fontSize: 24,
    }
});
>>>>>>> 0d46b403a6566f07fc66a30e74cfb816f1d8d24c

export default ProfileScreen;
