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
    <div className="">
      <HeaderComponent />
      <div className="my-[18px] sm:mx-14 md:mx-20 lg:mx-28 mx-[20px] flex flex-col gap-[20px]">
        <div className="grid grid-cols-[auto_8%] items-center gap-[20px]">
          <SearchBar />
          <div className="flex justify-center">
            <img src={bagIcon} alt="" />
          </div>
        </div>
        <CarouselComponent imgCarousel={Carousel1} />
        <div className="mt-4">
          <CategoryComponent />
        </div>
        <div className='mt-10'>
          <TitleSection
            title={'Top Seller bulan ini...'}
          />
          <div className="flex gap-3 mt-5 mb-40 overflow-x-scroll scrollbar-hide py-3 px-4 bg-[#e65b8038] rounded-lg">
            {this.navLink.map(({nameProduct, priceProduct, releaseDate, authorName}, index) => 
              <CardProduct nameProduct={nameProduct} priceProduct={priceProduct} releaseDate={releaseDate} authorName={authorName}/>
            )}
          </div>
          
        </div>
      </div>
      <NavbarComponent />
    </div>
  )
}
}