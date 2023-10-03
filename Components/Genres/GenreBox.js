import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../../screens/stylefolder/mainstyle.js'

const GenreBox = ({genreName}) => {
  return (
    <TouchableOpacity style={styles.genrebtn}>
        <Text style={styles.genretxt}>
            {genreName}
        </Text>
    </TouchableOpacity>
  )
}

export default GenreBox