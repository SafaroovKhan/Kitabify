import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import {styles} from "../../screens/stylefolder/mainstyle"
import GenreBox from './GenreBox'

const Genres = () => {
  return (
      <View style={styles.genrecontainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingLeft: 20}} >
                <GenreBox genreName={"Fantasy"}/>
                <GenreBox genreName={"Fiction"}/>
                <GenreBox genreName={"Non-Fiction"}/>
                <GenreBox genreName={"Astronomy"}/>
                <GenreBox genreName={"Mystery"}/>
                <GenreBox genreName={"Discipline"}/>
            </ScrollView>
        </View>
  )
}

export default Genres