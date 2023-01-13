import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import classNames from 'classnames';

export default class NavbarIcon extends Component {
  render() {
    const fontWeight = {
      'light': 'font-light',
      'extraLight': 'font-extralight',
      'bold': 'font-bold'
    }

    const {weight, iconNav, to, navbarName}=this.props;

    return (
      <NavLink to={to} className="iconnav items-center flex flex-col">
        <img
            src={iconNav}
            alt={navbarName} />
        <p className={classNames("text-xs", weight ? fontWeight[weight] : "font-light")}>
            {navbarName}
        </p>
      </NavLink>
    )
  }
}