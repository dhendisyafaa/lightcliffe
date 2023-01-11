import React, { Component } from 'react'
import PromoCard from '../components/card/PromoCard'
import HeaderComponent from '../components/header/HeaderComponent'
import NavbarComponent from '../components/navbar/NavbarComponent'
import TitleSection from '../components/TitleSection'

export default class Promo extends Component {
  render() {
    return (
      <div className="">
        <HeaderComponent />
        <div className="mx-[20px] flex flex-col gap-[20px] sm:mx-14 md:mx-20 lg:mx-28">
          <div className='mt-6'>
            <TitleSection
              title={'Top Seller bulan ini...'}
            />
            <div className="grid grid-cols-[50%_50%] sm:grid-cols-[auto_auto_auto] lg:grid-cols-[auto_auto_auto_auto] gap-4 justify-center mt-5 mb-40">
              <PromoCard
                promoPercent="40% off"
                nameProduct="Harry Potter and the Philosopher's Stone"
                priceProduct="75.000"
                releaseDate="1997"
                authorName="J.K Rowling"
              />

              <PromoCard
                promoPercent="40% off"
                nameProduct="Harry Potter and the Chamber of Secret"
                priceProduct="88.000"
                releaseDate="1998"
                authorName="J.K Rowling"
              />

              <PromoCard
                promoPercent="40% off"
                nameProduct="Harry Potter and the Prisoner of Azkaban"
                priceProduct="87.000"
                releaseDate="2001"
                authorName="J.K Rowling"
              />

              <PromoCard
                promoPercent="40% off"
                nameProduct="Harry Potter and the Goblet of Fire"
                priceProduct="88.000"
                releaseDate="2003"
                authorName="J.K Rowling"
              />

              <PromoCard
                promoPercent="40% off"
                nameProduct="Harry Potter and the Order of the Phoenix"
                priceProduct="90.000"
                releaseDate="2004"
                authorName="J.K Rowling"
              />

              <PromoCard
                promoPercent="40% off"
                nameProduct="Harry Potter and the Half-Blood Prince"
                priceProduct="95.000"
                releaseDate="2005"
                authorName="J.K Rowling"
              />

              <PromoCard
                promoPercent="40% off"
                nameProduct="Harry Potter and the Deathly Hallows"
                priceProduct="98.000"
                releaseDate="2011"
                authorName="J.K Rowling"
              />

            </div>
          </div>
        </div>
        <NavbarComponent />
      </div>
    )
  }
}
