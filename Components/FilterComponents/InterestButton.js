import {Text, View, StyleSheet, TouchableWithoutFeedback} from "react-native";
import ColorPalette from "../../assets/ColorPalette"
import {useContext, useState} from "react";

export default function InterestButton({name}) {
    const [active, setActive] = useState(false);
    return (
        <TouchableWithoutFeedback onPress={() => {
            setActive(!active);
        }}>
        <View style={active ? styles.selectedButton: styles.notSelectedButton} >
            <Text style={active ? styles.selectedButtonText: styles.notSelectedButtonText}>{name}</Text>
        </View>
        </TouchableWithoutFeedback>
    )
}


const styles = StyleSheet.create({
    selectedButton: {
        borderRadius: 20,
        borderWidth: 3,
        borderColor: ColorPalette.white,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginRight: 10,
        alignSelf: 'flex-start',
        backgroundColor: ColorPalette.orange,
    },
    selectedButtonText: {
        marginHorizontal: 20,
        marginVertical: 10,
        color: ColorPalette.white,
        fontWeight: 'bold'
    },
    notSelectedButton: {
        borderRadius: 20,
        borderWidth: 3,
        borderColor: ColorPalette.orange,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginRight: 10,
        alignSelf: 'flex-start',
        backgroundColor: ColorPalette.white,
    },
    notSelectedButtonText: {
        marginHorizontal: 20,
        marginVertical: 10,
        color: ColorPalette.orange,
        fontWeight: 'bold'
    },
})
