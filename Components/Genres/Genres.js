import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from '../../screens/stylefolder/mainstyle';
import GenreBox from './GenreBox';

const Genres = () => {
  const [selectedGenre, setSelectedGenre] = useState('');

  const handleGenrePress = (genre) => {
    setSelectedGenre(genre);
  };

  return (
    <>
      <View style={styles.genrecontainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingLeft: 20 }}>
          <GenreBox genreName={"Ən Çox Sevilənlər"} onPress={() => handleGenrePress("Ən Çox Sevilənlər")} />
          <GenreBox genreName={"Psixologiya"} onPress={() => handleGenrePress("Psixologiya")} />
          <GenreBox genreName={"Fəsəfə"} onPress={() => handleGenrePress("Fəsəfə")} />
          <GenreBox genreName={"Productivity"} onPress={() => handleGenrePress("Productivity")} />
          <GenreBox genreName={"Karyera və Uğur"} onPress={() => handleGenrePress("Karyera və Uğur")} />
          <GenreBox genreName={"Texnologiya"} onPress={() => handleGenrePress("Texnologiya")} />
          <GenreBox genreName={"Yaradıcılıq"} onPress={() => handleGenrePress("Yaradıcılıq")} />
          <GenreBox genreName={"Kommunikasiya"} onPress={() => handleGenrePress("Kommunikasiya")} />
        </ScrollView>
      </View>
      <View style={styles.booktextbox}>
        <Text style={styles.booktext}>{selectedGenre || 'Ən çox sevilənlər'}</Text>
      </View>
    </>
  );
};

export default Genres;
