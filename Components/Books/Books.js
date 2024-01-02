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
import bookcover11 from "./BooksImages/bookcover11.jpeg"
import bookcover12 from "./BooksImages/bookcover12.jpeg"
import bookcover13 from "./BooksImages/bookcover13.jpeg"
import bookcover14 from "./BooksImages/bookcover14.jpeg"
import bookcover15 from "./BooksImages/bookcover15.jpeg"
import bookcover16 from "./BooksImages/bookcover16.jpeg"
import bookcover17 from "./BooksImages/bookcover17.jpeg"
import bookcover18 from "./BooksImages/bookcover18.png"


const Books = () => {
  return (
    
      <View style={styles.bookssection}>
        <Row style={styles.booksrow}>
          <Col cols={6}>
            <Book  imgUrl={bookcover1} bookHeader={"The 48 Laws of Power"} bookAuthor={"Robert Greene"} bookAboutText={"Consequently, in his controversial book, “The 48 Laws of Power,” best-selling author Robert Greene argues that if you manage to seduce, charm, and deceive your opponents, you will attain the ultimate power. Greene states that the better you become at handing power, the better friend, lover, and person you will become."} />
          </Col>
          <Col cols={6}>
            <Book  imgUrl={bookcover2}  bookHeader={"Sapiens"} bookAuthor={"Yuval Noah Harari"} bookAboutText={"Consequently, in his controversial book, “The 48 Laws of Power,” best-selling author Robert Greene argues that if you manage to seduce, charm, and deceive your opponents, you will attain the ultimate power. Greene states that the better you become at handing power, the better friend, lover, and person you will become."}/>
          </Col>
        </Row>
        <Row style={styles.booksrow}>
          <Col cols={6}>
            <Book  imgUrl={bookcover3}  bookHeader={"Atomic Habits "} bookAuthor={"James Clear"} bookAboutText={"Consequently, in his controversial book, “The 48 Laws of Power,” best-selling author Robert Greene argues that if you manage to seduce, charm, and deceive your opponents, you will attain the ultimate power. Greene states that the better you become at handing power, the better friend, lover, and person you will become."}/>
          </Col>
          <Col cols={6}>
            <Book  imgUrl={bookcover4}  bookHeader={"Rich dad, Poor Dad"} bookAuthor={"Robert Kiyosaki"} bookAboutText={"Consequently, in his controversial book, “The 48 Laws of Power,” best-selling author Robert Greene argues that if you manage to seduce, charm, and deceive your opponents, you will attain the ultimate power. Greene states that the better you become at handing power, the better friend, lover, and person you will become."}/>
          </Col>
        </Row>  
        <Row style={styles.booksrow}>
          <Col cols={6}>
            <Book  imgUrl={bookcover5}  bookHeader={"Can't Hurt Me!"} bookAuthor={"David Goggins"} bookAboutText={"Consequently, in his controversial book, “The 48 Laws of Power,” best-selling author Robert Greene argues that if you manage to seduce, charm, and deceive your opponents, you will attain the ultimate power. Greene states that the better you become at handing power, the better friend, lover, and person you will become."}/>
          </Col>
          <Col cols={6}>
            <Book  imgUrl={bookcover6}   bookHeader={"The 7 Habits"} bookAuthor={"Stephen R.Cover"} bookAboutText={"Consequently, in his controversial book, “The 48 Laws of Power,” best-selling author Robert Greene argues that if you manage to seduce, charm, and deceive your opponents, you will attain the ultimate power. Greene states that the better you become at handing power, the better friend, lover, and person you will become."}/>
          </Col>
        </Row>
        <Row style={styles.booksrow}>
          <Col cols={6}>
            <Book  imgUrl={bookcover7}  bookHeader={"Outliers"} bookAuthor={"Malcolm Gladwell"} bookAboutText={"Consequently, in his controversial book, “The 48 Laws of Power,” best-selling author Robert Greene argues that if you manage to seduce, charm, and deceive your opponents, you will attain the ultimate power. Greene states that the better you become at handing power, the better friend, lover, and person you will become."}/>
          </Col>
          <Col cols={6}>
            <Book  imgUrl={bookcover8}  bookHeader={"The 5 AM Club"} bookAuthor={"Robin Sharma"} bookAboutText={"Consequently, in his controversial book, “The 48 Laws of Power,” best-selling author Robert Greene argues that if you manage to seduce, charm, and deceive your opponents, you will attain the ultimate power. Greene states that the better you become at handing power, the better friend, lover, and person you will become."}/>
          </Col>
        </Row>
        <Row style={styles.booksrow}> 
          <Col cols={6}>
            <Book  imgUrl={bookcover9}  bookHeader={"Mastery"} bookAuthor={"Robert Greene"} bookAboutText={"Consequently, in his controversial book, “The 48 Laws of Power,” best-selling author Robert Greene argues that if you manage to seduce, charm, and deceive your opponents, you will attain the ultimate power. Greene states that the better you become at handing power, the better friend, lover, and person you will become."}/>
          </Col>
          <Col cols={6}>
            <Book  imgUrl={bookcover10}  bookHeader={"Ermis"} bookAuthor={"Halil Cibran"} bookAboutText={"Consequently, in his controversial book, “The 48 Laws of Power,” best-selling author Robert Greene argues that if you manage to seduce, charm, and deceive your opponents, you will attain the ultimate power. Greene states that the better you become at handing power, the better friend, lover, and person you will become."}/>
          </Col>
        </Row>
        <Row style={styles.booksrow}> 
          <Col cols={6}>
            <Book  imgUrl={bookcover11}  bookHeader={"Mastery"} bookAuthor={"Robert Greene"} bookAboutText={"Consequently, in his controversial book, “The 48 Laws of Power,” best-selling author Robert Greene argues that if you manage to seduce, charm, and deceive your opponents, you will attain the ultimate power. Greene states that the better you become at handing power, the better friend, lover, and person you will become."}/>
          </Col>
          <Col cols={6}>
            <Book  imgUrl={bookcover12}  bookHeader={"Ermis"} bookAuthor={"Halil Cibran"} bookAboutText={"Consequently, in his controversial book, “The 48 Laws of Power,” best-selling author Robert Greene argues that if you manage to seduce, charm, and deceive your opponents, you will attain the ultimate power. Greene states that the better you become at handing power, the better friend, lover, and person you will become."}/>
          </Col>
        </Row>
        <Row style={styles.booksrow}> 
          <Col cols={6}>
            <Book  imgUrl={bookcover13}  bookHeader={"Mastery"} bookAuthor={"Robert Greene"} bookAboutText={"Consequently, in his controversial book, “The 48 Laws of Power,” best-selling author Robert Greene argues that if you manage to seduce, charm, and deceive your opponents, you will attain the ultimate power. Greene states that the better you become at handing power, the better friend, lover, and person you will become."}/>
          </Col>
          <Col cols={6}>
            <Book  imgUrl={bookcover14}  bookHeader={"Ermis"} bookAuthor={"Halil Cibran"} bookAboutText={"Consequently, in his controversial book, “The 48 Laws of Power,” best-selling author Robert Greene argues that if you manage to seduce, charm, and deceive your opponents, you will attain the ultimate power. Greene states that the better you become at handing power, the better friend, lover, and person you will become."}/>
          </Col>
        </Row>
        <Row style={styles.booksrow}> 
          <Col cols={6}>
            <Book  imgUrl={bookcover15}  bookHeader={"Mastery"} bookAuthor={"Robert Greene"} bookAboutText={"Consequently, in his controversial book, “The 48 Laws of Power,” best-selling author Robert Greene argues that if you manage to seduce, charm, and deceive your opponents, you will attain the ultimate power. Greene states that the better you become at handing power, the better friend, lover, and person you will become."}/>
          </Col>
          <Col cols={6}>
            <Book  imgUrl={bookcover16}  bookHeader={"Ermis"} bookAuthor={"Halil Cibran"} bookAboutText={"Consequently, in his controversial book, “The 48 Laws of Power,” best-selling author Robert Greene argues that if you manage to seduce, charm, and deceive your opponents, you will attain the ultimate power. Greene states that the better you become at handing power, the better friend, lover, and person you will become."}/>
          </Col>
        </Row>
        <Row style={styles.booksrow}> 
          <Col cols={6}>
            <Book  imgUrl={bookcover17}  bookHeader={"Mastery"} bookAuthor={"Robert Greene"} bookAboutText={"Consequently, in his controversial book, “The 48 Laws of Power,” best-selling author Robert Greene argues that if you manage to seduce, charm, and deceive your opponents, you will attain the ultimate power. Greene states that the better you become at handing power, the better friend, lover, and person you will become."}/>
          </Col>
          <Col cols={6}>
            <Book  imgUrl={bookcover18}  bookHeader={"Ermis"} bookAuthor={"Halil Cibran"} bookAboutText={"Consequently, in his controversial book, “The 48 Laws of Power,” best-selling author Robert Greene argues that if you manage to seduce, charm, and deceive your opponents, you will attain the ultimate power. Greene states that the better you become at handing power, the better friend, lover, and person you will become."}/>
          </Col>
        </Row>
      </View>
  )
}

export default Books