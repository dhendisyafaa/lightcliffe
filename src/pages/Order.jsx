import React, { Component } from 'react'
import ButtonStandard from '../components/button/ButtonStandard'
import CardOrder from '../components/card/CardOrder'
import HeaderComponent from '../components/header/HeaderComponent'
import NavbarComponent from '../components/navbar/NavbarComponent'

export default class Order extends Component {
  render() {
    return (
      <div className="">
        <HeaderComponent />
        <div className="mt-[18px] mb-40 mx-[20px] flex flex-col gap-[20px] sm:mx-14 md:mx-20 lg:mx-28">
          <CardOrder />
          <CardOrder />
          <CardOrder />
          <CardOrder />
          <CardOrder />
          <CardOrder />
          <CardOrder />
          <CardOrder />
        </div>
        <NavbarComponent />
      </div>
    )
  }
}
