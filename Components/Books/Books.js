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
        <Row style={styles.booksrow}>
          <Col cols={6}>
            <Book  imgUrl={bookcover1} bookHeader={"The 48 laws of the Power"} />
          </Col>
          <Col cols={6}>
            <Book  imgUrl={bookcover2} bookHeader={"Sapiens"}/>
          </Col>
        </Row>
        <Row style={styles.booksrow}>
          <Col cols={6}>
            <Book  imgUrl={bookcover3} bookHeader={"Atomic Habits"}/>
          </Col>
          <Col cols={6}>
            <Book  imgUrl={bookcover4} bookHeader={"Rich Dad, Poor Dad"}/>
          </Col>
        </Row>  
        <Row style={styles.booksrow}>
          <Col cols={6}>
            <Book  imgUrl={bookcover5} bookHeader={"Can't Hurt Me!"}/>
          </Col>
          <Col cols={6}>
            <Book  imgUrl={bookcover6}  bookHeader={"The 7 Habits of Highly Effective People"}/>
          </Col>
        </Row>
        <Row style={styles.booksrow}>
          <Col cols={6}>
            <Book  imgUrl={bookcover7} bookHeader={"Outliers"}/>
          </Col>
          <Col cols={6}>
            <Book  imgUrl={bookcover8} bookHeader={"The 5 AM Club"}/>
          </Col>
        </Row>
        <Row style={styles.booksrow}> 
          <Col cols={6}>
            <Book  imgUrl={bookcover9} bookHeader={"Mastery"}/>
          </Col>
          <Col cols={6}>
            <Book  imgUrl={bookcover10} bookHeader={"Ermis"}/>
          </Col>
        </Row>
      </View>
  )
}

export default Books