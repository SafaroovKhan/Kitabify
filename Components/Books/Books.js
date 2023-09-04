import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Book from './Book'
import {Column as Col, Row} from 'react-native-flexbox-grid';
import {styles} from "../../screens/stylefolder/mainstyle.js"
import bookcover1 from "./BooksImages/bookcover1.jpeg"
import bookcover2 from "./BooksImages/bookcover2.jpg"
import bookcover3 from "./BooksImages/bookcover3.jpg"
import bookcover4 from "./BooksImages/bookcover4.jpg"
import bookcover5 from "./BooksImages/bookcover5.jpg"
import bookcover6 from "./BooksImages/bookcover6.jpeg"
import bookcover7 from "./BooksImages/bookcover7.jpeg"
import bookcover8 from "./BooksImages/bookcover8.jpeg"
import bookcover9 from "./BooksImages/bookcover9.png"
import bookcover10 from "./BooksImages/bookcover10.jpeg"

const Books = () => {
  return (
    
      <View style={styles.bookssection}>
        <View style={styles.booktextbox}>
          <Text style={styles.booktext}>Genre</Text>
        </View>
        <Row style={styles.booksrow}>
          <Col cols={6}>
            <Book  imgUrl={bookcover1}/>
          </Col>
          <Col cols={6}>
            <Book  imgUrl={bookcover2}/>
          </Col>
        </Row>
        <Row style={styles.booksrow}>
          <Col cols={6}>
            <Book  imgUrl={bookcover3}/>
          </Col>
          <Col cols={6}>
            <Book  imgUrl={bookcover4}/>
          </Col>
        </Row>  
        <Row style={styles.booksrow}>
          <Col cols={6}>
            <Book  imgUrl={bookcover5}/>
          </Col>
          <Col cols={6}>
            <Book  imgUrl={bookcover6}/>
          </Col>
        </Row>
        <Row style={styles.booksrow}>
          <Col cols={6}>
            <Book  imgUrl={bookcover7}/>
          </Col>
          <Col cols={6}>
            <Book  imgUrl={bookcover8}/>
          </Col>
        </Row>
        <Row style={styles.booksrow}> 
          <Col cols={6}>
            <Book  imgUrl={bookcover9}/>
          </Col>
          <Col cols={6}>
            <Book  imgUrl={bookcover10}/>
          </Col>
        </Row>
      </View>
  )
}

export default Books