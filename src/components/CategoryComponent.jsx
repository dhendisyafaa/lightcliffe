import React, { Component } from 'react'
import NavbarIcon from './navbar/NavbarIcon'
import OpenBook from '../assets/photos/icon/book-open.svg'

export default class CategoryComponent extends Component {

  navLink = [
    {
      iconNav: OpenBook,
      navbarName: "Bebas Baca",
      weight: "bold"
      // to: "/"
    },
    {
      iconNav: OpenBook,
      navbarName: "Novel",
      weight: "bold"
      // to: "/"
    },
    {
      iconNav: OpenBook,
      navbarName: "Komik",
      weight: "bold"
      // to: "/"
    },
    {
      iconNav: OpenBook,
      navbarName: "Majalah",
      weight: "bold"
      // to: "/"
    }
  ]

  render() {
    return (
      <div className="grid grid-cols-[auto_auto_auto_auto]">
        {this.navLink.map(({to, iconNav, navbarName, weight}, index) => {
          return (
            <NavbarIcon key={index} to={to} navbarName={navbarName} altIcon={navbarName} iconNav={iconNav} weight={weight}/>
          )
        })}
      </div>
    )
  }
}
