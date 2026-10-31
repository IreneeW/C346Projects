import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
// import {FontAwesome6} from "@expo/vector-icons";
import Movie from './components/Movie';

//
class AllMovies extends React.Component {
  render() {
    return (
        <ScrollView>
          <Movie poster={require('./img/doctor-sleep.jpg')} image_width={400} image_height={500} title={"Doctor Sleep"} year={2019} icon_name={"skull"} icon_color={"grey"}/>
          <Movie poster={require('./img/midway.jpg')} image_width={400} image_height={500} title={"Midway"} year={2020} icon_name={"person-rifle"} icon_color={"green"}/>
          <Movie poster={{uri: 'https://image.tmdb.org/t/p/original/1KDooHx1ArGgrxlcvMvmIHpZ4hN.jpg'}} image_width={400} image_height={500} title={"Chef"} year={2014} icon_name={"bowl-food"} icon_color={"orange"}/>

        </ScrollView>
    )
  }
}

export default AllMovies;