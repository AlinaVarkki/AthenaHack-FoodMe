import React from "react";

import { StyleSheet, View, Text } from "react-native";


const FeedScreen = () => {
    return (
    <View style={styles.container}>
        <Feed/>
      </View>
      );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: '100%',
      width:'100%',
    },
  });

export default FeedScreen;