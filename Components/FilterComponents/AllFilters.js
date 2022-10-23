import {ScrollView, Text, View, StyleSheet} from "react-native";
import InterestButton from "./InterestButton";
import ColorPalette from "../../assets/ColorPalette";
import {useState} from "react";
import Slider from "@react-native-community/slider";

export default function AllFilters() {
    const categories = [
        {id: 0, name: "Amusement Park"},
        {id: 2, name: "Church"},
        {id: 3, name: "Art gallery"},
        {id: 4, name: "City hall"},
        {id: 6, name: "Library"},
        {id: 8, name: "Museum"},
    ];

    const [sliderValue, setSliderValue] = useState(1);

    return (
        <>
            <Text style={styles.preferencesText}>Preferences</Text>
            <ScrollView
                contentContainerStyle={styles.buttonsSection}>
                {
                    categories.map((item) => (
                        <View key={item.id}>
                            <InterestButton name={item.name}/>
                        </View>
                    ))
                }
            </ScrollView>
            <View style={styles.distanceSliderAndName}>
                <Text style={styles.distanceText}>Distance</Text>
                <Text style={styles.distanceNumText}>{sliderValue.toString().substring(0, 3)}km</Text>
            </View>
            <Slider
                step={0.2}
                maximumValue={10}
                minimumValue={0}
                value={sliderValue}
                style={styles.slider}
                onValueChange={value => setSliderValue(value)}
                thumbTintColor={ColorPalette.orange}
                minimumTrackTintColor={ColorPalette.lightOrange}
                maximumTrackTintColor={ColorPalette.orange}
            />

        </>

    )
}

const styles = StyleSheet.create({
    buttonsSection: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: '2%'
    },
    preferencesText: {
        color: ColorPalette.darkgrey,
        fontSize: 19,
        fontWeight: 'bold',
        right: -7
    },
    distanceSliderAndName: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline'
    },
    distanceText: {
        color: ColorPalette.darkgrey,
        fontSize: 19,
        fontWeight: 'bold',
        marginTop: 40,
        marginBottom: 10,
        right: -7
    },
    distanceNumText: {
        color: ColorPalette.darkgrey,
        fontSize: 19,
        fontWeight: 'bold',
        marginTop: 40,
        marginBottom: 10,
    },
    slider: {
        marginBottom: 15
    }
})
