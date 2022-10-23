import {StyleSheet, Text, View} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import React, {useState} from "react";
import ColorPalette from "../../assets/ColorPalette";
import Switch from "react-native/Libraries/Components/Switch/Switch";

const SettingsItem = ({name, icon, showToggle = false}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={styles.container}>
            <View style={styles.leftSection}>
                <Icon name={icon} size={23} style={styles.iconStyle}/>
                <Text style={styles.nameText}>{name}</Text>
            </View>
            <View>
                {
                    showToggle ?
                        <Switch
                            thumbColor={ColorPalette.orange}
                            trackColor={{ false: "#767577", true: ColorPalette.lightOrange }}
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                        :
                        <Icon2 name={'arrow-forward-ios'} size={21} style={styles.arrowIcon}
                               color={ColorPalette.orange}/>
                }

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 9,
        marginVertical: 15,
        marginHorizontal: -10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 2, height: 4},
        shadowRadius: 10,
        elevation: 4,
        backgroundColor: 'white',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center'
    },
    leftSection: {
        flexDirection: "row"
    },
    nameText: {
        fontSize: 16,
        margin: 10
    },
    iconStyle: {
        margin: 10
    },
    arrowIcon: {
        margin: 7
    }
})

export default SettingsItem;
