import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../../screens/stylefolder/mainstyle.js'

const GenreBox = ({genreFigName, color}) => {
  return (
    <TouchableOpacity style={[styles.genrefigure, {backgroundColor: color}]}>
        <Text style={styles.genrefiguretext}>
            {genreFigName}
        </Text>
    </TouchableOpacity>
  )
}

export default GenreBox