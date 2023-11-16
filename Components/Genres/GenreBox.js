import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../../screens/stylefolder/mainstyle.js'

const GenreBox = ({genreName, onPress}) => {
  return (
    <TouchableOpacity style={styles.genrebtn}  onPress={onPress}>
        <Text style={styles.genretxt}>
            {genreName}
        </Text>
    </TouchableOpacity>
  )
}

export default GenreBox