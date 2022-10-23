import {Image, StyleSheet, Text, View} from "react-native";
import ColorPalette from "../assets/ColorPalette";

const YourBadgesSection = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.badgesText}>Your badges</Text>
            <View style={styles.badges}>
            <View style={styles.achievementCard}>
                <Image style={styles.image}
                       source={{uri: "https://media4.giphy.com/media/quSS6yNl2otzNTdayz/giphy.gif?cid=790b76116e300a89e22b38a2c2f3fd17915d534502861a68&rid=giphy.gif&ct=g"}}/>
                <Text>Excellent</Text>
                <Text>host</Text>
            </View>
            <View style={styles.achievementCard}>
                <Image style={styles.image}
                       source={{uri: "https://media1.giphy.com/media/vXOqjRRrZ3xG3XyCLJ/giphy.gif?cid=790b7611a3588e684cf9e93480023e77cbf80748a56b93b9&rid=giphy.gif&ct=g"}}/>
                <Text>Green</Text>
                <Text>eater</Text>
            </View>
            <View style={styles.achievementCard}>
                <Image style={styles.image}
                       source={{uri: "https://media4.giphy.com/media/4yyEiscodtG0Cj3KG9/giphy.gif?cid=790b7611d8912e55694f2deb59f0be4beacf876a3b2d9a09&rid=giphy.gif&ct=g"}}/>
                <Text>Zero-waste</Text>
                <Text>newbie</Text>
            </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 0,
        paddingBottom: 10,

    },
    badges: {
      flexDirection: "row"
    },
    badgesText: {
        fontSize: 19,
        fontWeight: "bold",
        marginTop: 20,
        color: ColorPalette.darkgrey
    },
    image: {
        width: 120,
        height: 160,
        marginBottom: -5
    },
    achievementCard: {
        alignItems: 'center',
        width: '32%'
    }
});

export default YourBadgesSection;
