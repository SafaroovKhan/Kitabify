import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../../screens/stylefolder/mainstyle.js'

const GenreBox = () => {
  return (
    <TouchableOpacity style={styles.genreBoxBtn}>
        <Text style={styles.genreBoxBtnText}>
            Genre
        </Text>
    </TouchableOpacity>
  )
}

export default GenreBox