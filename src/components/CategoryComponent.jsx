import React, { Component } from 'react'
import NavbarIcon from './navbar/NavbarIcon'
import OpenBook from '../assets/photos/icon/book-open.svg'

export default class CategoryComponent extends Component {
  render() {
    return (
      <div className="grid grid-cols-[auto_auto_auto_auto]">
        {/* <NavbarIcon 
            iconNav={OpenBook}
            NavbarName="Bebas Baca" 
            altIcon="Bebas Baca"
            className={'font-bold'}/> */}
        <NavbarIcon 
            iconNav={OpenBook}
            NavbarName="Bebas Baca" 
            altIcon="Bebas Baca"
            weight="bold"
            />
        <NavbarIcon 
            iconNav={OpenBook}
            NavbarName="Novel" 
            altIcon="Novel"
            weight="bold"
            />
        <NavbarIcon 
            iconNav={OpenBook}
            NavbarName="Komik" 
            altIcon="Komik"
            weight="bold"
            />
        <NavbarIcon 
            iconNav={OpenBook}
            NavbarName="Majalah" 
            altIcon="Majalah"
            weight="bold"/>
      </div>
    )
  }
}
