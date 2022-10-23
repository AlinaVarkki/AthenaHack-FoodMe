import React from "react";

import {View, Text, StyleSheet, ScrollView, Image} from "react-native";
import ColorPalette from "../assets/ColorPalette";
import YourImpactSection from "./YourImpactSection";


const ImpactScreen = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.helloText}>Hello Slavka</Text>
                    <Text style={styles.motoText}>share more, waste less</Text>
                </View>
                <View style={styles.stats}>
                    <View style={styles.firstStats}>
                        <View style={styles.statsPercentage}>
                            <Text style={styles.percentageText}>21%</Text>
                            <Text style={styles.co2Text}>less CO2 emissions</Text>
                        </View>
                        <Image style={styles.ecoImage} source={require('../Resources/SaveEarth.png')}/>
                    </View>
                    <View style={styles.secondStats}>
                        <View style={styles.secondStatsHeader}>
                            <Text style={styles.kgText}>24kg</Text>
                            <Text style={styles.savingsText}> CO2 savings</Text>
                        </View>
                        <View style={styles.goodJobText}>
                            <Text style={styles.comparisonText}>More than 64% of</Text>
                            <Text style={styles.comparisonText}>individuals in your</Text>
                            <Text style={styles.comparisonText}>neighbourhood</Text>
                        </View>
                    </View>
                    <View>
                    </View>
                </View>
                <YourImpactSection/>
            </View>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginHorizontal: 18,
    },
    header: {
        marginTop: 20
    },
    helloText: {
        fontSize: 25
    },
    motoText: {
        fontSize: 21,
        color: ColorPalette.orange
    },
    stats: {},
    firstStats: {
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    statsPercentage: {
        justifyContent: 'center'
    },
    percentageText: {
        fontSize: 55,
        fontWeight: "500"
    },
    co2Text: {
        fontSize: 18,
        fontWeight: "200"
    },
    ecoImage: {
        width: 160,
        height: 160,
    },
    secondStats: {},
    secondStatsHeader: {
        flexDirection: "row",
        alignItems: "flex-end"
    },
    kgText: {
        fontSize: 45,
        fontWeight: "bold",
        color: ColorPalette.orange
    },
    savingsText: {
        fontSize: 21,
        fontWeight: "400"
    },
    comparisonText: {
        alignSelf: "center",
        fontSize: 17,
        color: ColorPalette.grey
    },
    goodJobText: {
        marginTop: 10
    }
});

export default ImpactScreen;
