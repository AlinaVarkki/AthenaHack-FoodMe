import React from 'react';
import {Image, View} from 'react-native';

export default function RoundProfileImage({size = 29, image, }){
    return (
        <View style = {{width: size, height: size, justifyContent: 'center', alignItems: 'center', borderRadius: 20, overflow: 'hidden', margin:1.5}}>
            <Image  source={image} style={{width: size, height: size}}/>
        </View>
    );
}
