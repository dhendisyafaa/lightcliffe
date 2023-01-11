import React, { Component } from 'react'
import NavbarIcon from './NavbarIcon'
import Beranda from '../.././assets/photos/icon/home.svg'
import Promo from '../.././assets/photos/icon/percent.svg'
import Order from '../.././assets/photos/icon/package.svg'
import Chat from '../.././assets/photos/icon/message-square.svg'

export default class NavbarComponent extends Component {
  navLink = [{
    iconNav: Beranda,
    navbarName: "Beranda",
    to: "/"
  },
  {
    iconNav: Promo,
    navbarName: "Promo",
    to: "/promo"
  }
    ,
  {
    iconNav: Order,
    navbarName: "Order",
    to: "/order"
  },
  {
    iconNav: Chat,
    navbarName: "Chat",
    to: "/chat"
  }]

  render() {
    return (
      <div className="navbar grid grid-cols-4 fixed bottom-0 items-center w-full py-2.5 rounded-t-xl bg-white shadow-[0_35px_60px_14px_rgba(0,0,0,0.3)] z-50">
        {this.navLink.map(({to, iconNav, navbarName}, index) => {
          return (
            <NavbarIcon key={index} to={to} navbarName={navbarName} iconNav={iconNav} />
          )
        })}
      </div>
    )
  }
}