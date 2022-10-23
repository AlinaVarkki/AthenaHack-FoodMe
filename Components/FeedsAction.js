import React from 'react';
import FeedAction from './FeedAction';
import {StyleSheet, View, FlatList, Text} from 'react-native';

import ColorPalette from "../assets/ColorPalette";


const FeedsAction = ({hosted}) => {

    const hostedList = [
        {title: "You are the chef", hosted: true, inProgress: true},
        {title: "Past dinners", hosted: true, inProgress: false}
    ]

    const attendedList = [
        {title: "", hosted: false, inProgress: false}
    ]

    const listingRender = ({item}) => (
        <FeedAction
        title={item.title}
        hosted={item.hosted}
        inProgress={item.inProgress}
        />
    )

    return (
        <View style={styles.container}>
            {hosted &&
                <View style={styles.addButton}>
                    <Text style={styles.addButtonText}>ADD +</Text>
                </View> 
            }
            <FlatList showsVerticalScrollIndicator={false}
                    data={hosted ? hostedList : attendedList}
                    keyExtractor={item => item.title}
                    renderItem={listingRender}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    heading: {
        fontSize: 20
    },
    addButton: {
        width: '100%',
        justifyContent: 'space-around',
        flexDirection: 'row', 
        justifyContent: 'flex-end',
        position:'absolute',

    }, 
    addButtonText: {
        backgroundColor: ColorPalette.orange,
        color: ColorPalette.offwhite,
        paddingHorizontal: 17,
        paddingVertical: 8,
        marginRight: '7%',
        marginTop: 5,
        borderRadius: 15,
        fontSize: 15,
        fontWeight: 'bold',
        justifyContent:'center',
        elevation: 7

    }
});

export default FeedsAction;