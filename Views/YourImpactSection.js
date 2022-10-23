import {StyleSheet, Text, View} from "react-native";
import ColorPalette from "../assets/ColorPalette";

const YourImpactSection = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.impactText}>Your Impact 👏</Text>
            <View style={styles.impactCard}>
                <View style={styles.emojiView}>
                    <Text style={styles.emojiText}>🌳</Text>
                </View>
                <Text style={styles.impactDescription}>
                    You have saved a total of 120kg CO2 emissions this year. An equivalent of 10 trees being planted!
                </Text>
            </View>
            <View style={styles.impactCard}>
                <View style={styles.emojiView}>
                    <Text style={styles.emojiText}>🌿</Text>
                </View>
                <Text style={styles.impactDescription}>
                    Your overall footprint is 85% smaller than the European average this year
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20
    },
    impactText: {
        fontSize: 19,
        fontWeight: "bold",
        color: ColorPalette.darkgrey
    },
    impactCard: {
        flexDirection: "row",
        alignItems: 'center',
        marginTop: 16,
        width: '70%'
    },
    emojiView: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: ColorPalette.lightGrey,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 14
    },
    emojiText: {
        fontSize: 24
    },
    impactDescription: {
        // marginRight: 50
    }
});

export default YourImpactSection;
