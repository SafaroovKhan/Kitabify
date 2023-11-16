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
          <GenreBox genreName={"Fantasy"} onPress={() => handleGenrePress("Fantasy")} />
          <GenreBox genreName={"Fiction"} onPress={() => handleGenrePress("Fiction")} />
          <GenreBox genreName={"Non-Fiction"} onPress={() => handleGenrePress("Non-Fiction")} />
          <GenreBox genreName={"Astronomy"} onPress={() => handleGenrePress("Astronomy")} />
          <GenreBox genreName={"Mystery"} onPress={() => handleGenrePress("Mystery")} />
          <GenreBox genreName={"Discipline"} onPress={() => handleGenrePress("Discipline")} />
        </ScrollView>
      </View>
      <View style={styles.booktextbox}>
        <Text style={styles.booktext}>{selectedGenre || 'Ən çox sevilənlər'}</Text>
      </View>
    </>
  );
};

export default Genres;
