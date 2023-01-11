import React, { Component } from 'react'
import ChatComponent from '../components/ChatComponent'
import HeaderComponent from '../components/header/HeaderComponent'
import NavbarComponent from '../components/navbar/NavbarComponent'

export default class Chat extends Component {
  render() {
    return (
      <div className="">
        <HeaderComponent />
        <div className="mt-10 mb-40 mx-[20px] flex flex-col gap-[20px] sm:mx-14 md:mx-20 lg:mx-28">
          <ChatComponent/>
          <ChatComponent/>
          <ChatComponent/>
          <ChatComponent/>
          <ChatComponent/>
          <ChatComponent/>
          <ChatComponent/>
          <ChatComponent/>
        </div>
        <NavbarComponent />
      </div>
    )
  }
}
