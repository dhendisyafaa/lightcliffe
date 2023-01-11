import React, { Component } from 'react'
import iconacc from "../../assets/photos/icon/user.svg"
import { NavLink } from 'react-router-dom'

export default class HeaderComponent extends Component {
  render() {
    return (
      <div className="header bg-accent w-full h-[8vh] flex justify-end items-center pr-[4%]">
        
        <img src={iconacc} alt="" className='w-[28px] h-[28px]'/>
      </div>
    )
  }
}