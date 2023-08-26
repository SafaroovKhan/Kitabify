import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import {styles} from "../../screens/stylefolder/mainstyle"

const Genres = () => {
  return (
      <View style={styles.genrecontainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingLeft: 20}} >
                <TouchableOpacity style={styles.genrebtn}>
                    <Text style={styles.genretxt}>Genre</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.genrebtn}>
                    <Text style={styles.genretxt}>Genre</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.genrebtn}>
                    <Text style={styles.genretxt}>Genre</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.genrebtn}>
                    <Text style={styles.genretxt}>Genre</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.genrebtn}>
                    <Text style={styles.genretxt}>Genre</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.genrebtn}>
                    <Text style={styles.genretxt}>Genre</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.genrebtn}>
                    <Text style={styles.genretxt}>Genre</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.genrebtn}>
                    <Text style={styles.genretxt}>Genre</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
  )
}

export default Genres