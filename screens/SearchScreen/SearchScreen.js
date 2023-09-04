import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from "@react-navigation/native"
import {Column as Col, Row} from 'react-native-flexbox-grid';
import { SearchBar } from 'react-native-elements'
import {styles} from "../stylefolder/mainstyle.js"
import GenreBox from '../../Components/Genres/GenreBox.js'
import FullBar from '../../Components/FullBar/FullBar.js'

const SearchScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, []);
  return (
    <SafeAreaView style={styles.androidsafearea}>
    <View style={styles.searcbarscreen}>
        <View style={styles.searchbarbox}>
        <SearchBar style={styles.searcbar}
          placeholder="Search..."
          inputContainerStyle={{ backgroundColor: 'white', borderRadius: 10 }}
          containerStyle={{ backgroundColor: 'transparent', borderBottomColor: 'transparent', borderTopColor: "transparent", }}
          inputStyle={{ color: 'black' }}
          searchIcon={{ color: 'black', size: 30 }}
          onChangeText={(text) => {
            // Handle search text changes here
          }}
          onClear={() => {
            // Handle clear button press here
          }}
          onCancel={() => {
            // Handle cancel button press here
          }}
        />
        </View>
        <ScrollView >
          <View style={styles.genreSearchBox}>
            <Row style={styles.genreRow}>
              <Col >
                <GenreBox/>
              </Col>
              <Col>
                <GenreBox/>
              </Col>
            </Row>
            <Row style={styles.genreRow}>
              <Col>
                <GenreBox/>
              </Col>
              <Col>
                <GenreBox/>
              </Col>
            </Row>
            <Row style={styles.genreRow}>
              <Col>
                <GenreBox/>
              </Col>
              <Col>
                <GenreBox/>
              </Col>
            </Row>
            <Row style={styles.genreRow}>
              <Col>
                <GenreBox/>
              </Col>
              <Col>
                <GenreBox/>
              </Col>
            </Row>
            <Row style={styles.genreRow}>
              <Col>
                <GenreBox/>
              </Col>
              <Col>
                <GenreBox/>
              </Col>
            </Row>
            <Row style={styles.genreRow}>
              <Col>
                <GenreBox/>
              </Col>
              <Col>
                <GenreBox/>
              </Col>
            </Row>
            <Row style={styles.genreRow}>
              <Col>
                <GenreBox/>
              </Col>
              <Col>
                <GenreBox/>
              </Col>
            </Row>
            <Row style={styles.genreRow}>
              <Col>
                <GenreBox/>
              </Col>
              <Col>
                <GenreBox/>
              </Col>
            </Row>
            <Row style={styles.genreRow}>
              <Col>
                <GenreBox/>
              </Col>
              <Col>
                <GenreBox/>
              </Col>
            </Row>
          </View>
        </ScrollView>

    </View>
    <FullBar/>
    </SafeAreaView>
  )
}

export default SearchScreen