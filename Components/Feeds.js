import React from 'react';
import Feed from './Feed';
import {StyleSheet, View, FlatList} from 'react-native';

const lists = [
    {title: "Your dining experiences", joined: true},
    {title: "Join a dinner", joined: false}
]

const listingRender = ({item}) => (
    <Feed
    title={item.title}
    joined={item.joined}
    />
)

const Feeds = ({children}) => {

    return (
        <View style={styles.container}>
            <FlatList showsVerticalScrollIndicator={false}
                    data={lists}
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
    }
});

export default Feeds;