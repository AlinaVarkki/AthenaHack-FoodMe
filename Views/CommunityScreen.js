import React from "react";

import { StyleSheet, View, Text } from "react-native";
import GetCookingFilters from "../Components/GetCookingFilters";
import GetInspired from "../Components/GetInspired";
import Stories from "../Components/Stories";
import GetCookingObjects from "../Components/GetCookingObjects";

const CommunityScreen = () => {


  const photos =       [
    {
        id: 'photo1',
        photo: require('../Resources/Dining/foodpic.jpg')

    },{
    id: 'photo2',

    photo: require('../Resources/Dining/peopleeating.jpg')

},{
    id: 'photo3',
    photo: require('../Resources/Dining/womaneating.jpg')
}];

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Hello Slavka</Text>

        <Text style={styles.heading}>Get hungry</Text>
        <Stories pictures={photos}/>
        <Text style={styles.heading}>Get inspired</Text>
        <GetInspired/>
        <Text style={styles.heading}>Get cooking</Text>
        <GetCookingFilters/>
        <GetCookingObjects/>

      </View>
      );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingLeft: '7%',
    },
    title: {
      fontSize: 35,
      paddingTop: 8,
      marginTop:3,
      paddingBottom:10
    },
    heading: {
      fontSize: 20,
      fontWeight: 'bold',
      paddingTop: 8,
      marginTop:3,
      paddingVertical:7
    }
  });


export default CommunityScreen;