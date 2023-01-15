import React, { Component } from 'react'
import CarouselComponent from '../components/CarouselComponent'
import HeaderComponent from '../components/header/HeaderComponent'
import NavbarComponent from '../components/navbar/NavbarComponent'
import Carousel1 from '../assets/photos/carousel/carousel1.png'
import SearchBar from '../components/SearchBar'
import BagComponent from '../components/BagComponent'
import CategoryComponent from '../components/CategoryComponent'
import TitleSection from '../components/TitleSection'
import CardProduct from '../components/card/CardProduct'
import bagIcon from '../assets/photos/icon/shopping-bag.svg'

export default class Dashboard extends Component {

  navLink = [
    {
      nameProduct: "Harry Potter and the Philosopher's Stone",
      priceProduct: "175.000",
      releaseDate: "1991",
      authorName: "J.K Rowling"
    },
    {
      nameProduct: "Harry Potter and the Philosopher's Stone",
      priceProduct: "175.000",
      releaseDate: "1991",
      authorName: "J.K Rowling"
    },
    {
      nameProduct: "Harry Potter and the Philosopher's Stone",
      priceProduct: "175.000",
      releaseDate: "1991",
      authorName: "J.K Rowling"
    },
    {
      nameProduct: "Harry Potter and the Philosopher's Stone",
      priceProduct: "175.000",
      releaseDate: "1991",
      authorName: "J.K Rowling"
    },
    {
      nameProduct: "Harry Potter and the Philosopher's Stone",
      priceProduct: "175.000",
      releaseDate: "1991",
      authorName: "J.K Rowling"
    },
    {
      nameProduct: "Harry Potter and the Philosopher's Stone",
      priceProduct: "175.000",
      releaseDate: "1991",
      authorName: "J.K Rowling"
    },
    {
      nameProduct: "Harry Potter and the Philosopher's Stone",
      priceProduct: "175.000",
      releaseDate: "1991",
      authorName: "J.K Rowling"
    },
  ]
render() {
  return (
    <h1>Beranda Page</h1>
  )
}
}