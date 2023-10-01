import React from "react";
import { Image } from "react-native";


const Photos = () => {

    return (
        <Image 
            source={{uri: 'https://placehold.co/600x400/000000/FFFFFF.png'}}
            style={{width: 300, height: 200}} />
    )

}

export default Photos;