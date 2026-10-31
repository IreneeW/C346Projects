import React from 'react';
import {View, Text,ScrollView, Image} from 'react-native';
import {FontAwesome6} from "@expo/vector-icons";

const GetABoat = ({ name, description, picture,icon_color,icon_name,width,height}) => {
  return (

      <View>
          <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 10, color:'grey' }}>
               <FontAwesome6 name={icon_name} size={28} color={icon_color}/> {name}
          </Text>
          <Text>{description}</Text>

        <Image source={picture} style={{width, height}}/>
      </View>
  );
};

export default GetABoat;
