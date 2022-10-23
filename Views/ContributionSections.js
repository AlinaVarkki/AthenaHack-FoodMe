import {StyleSheet, Text, View} from "react-native";
import ColorPalette from "../assets/ColorPalette";

const ContributionSections = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.contributionText}>Contribution</Text>
            <View style={styles.contributionCards}>
                <View style={styles.contributionCard}>
                    <Text style={styles.contributionCardText1}>40</Text>
                    <Text style={styles.contributionCardText2}>meals shared</Text>
                </View>

                <View style={styles.contributionCard2}>
                    <Text style={styles.contributionCardText1}>10</Text>
                    <Text style={styles.contributionCardText2}>dinners hosted</Text>
                </View>
                <View style={styles.contributionCard3}>
                    <Text style={styles.contributionCardText1}>13</Text>
                    <Text style={styles.contributionCardText2}>new friends</Text>
                </View>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingBottom: 30,

    },
    contributionText: {
        fontSize: 19,
        fontWeight: "bold",
        color: ColorPalette.darkgrey,
        marginBottom: 10
    },
    contributionCards: {
        flexDirection: 'row'
    },
    contributionCard: {
        width: 100,
        backgroundColor: ColorPalette.orange,
        height: 100,
        margin: 10,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: 'center'
    },
    contributionCard2: {
        width: 100,
        backgroundColor: ColorPalette.lightOrange,
        height: 100,
        margin: 10,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: 'center'
    },
    contributionCard3: {
        width: 100,
        backgroundColor: ColorPalette.darkgrey,
        height: 100,
        margin: 10,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: 'center'
    },
    contributionCardText1: {
        fontWeight: "bold",
        fontSize: 30,
        color: ColorPalette.white
    },
    contributionCardText2: {
        fontWeight: "bold",
        fontSize: 13,
        color: ColorPalette.white
    }
});


export default ContributionSections;
