import React from 'react';
import {View, Text, Image} from 'react-native';
import {FontAwesome6} from "@expo/vector-icons";


const Movie = ({ title, year, icon_name, icon_color, poster,image_width,image_height}) => {
    return (
        <View>
            <Image source={poster} style={{width: image_width, height: image_height}}/>
            <Text>
                Movie:

                    {title} {year}
                    <FontAwesome6 name={icon_name} size={40} color={icon_color}/>
            </Text>
        </View>
    );
};

export default Movie;