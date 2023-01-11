import React, { Component } from 'react'
import ButtonStandard from './button/ButtonStandard'

export default class TitleSection extends Component {
  render() {
    return (
      <div className='flex justify-between'>
        <p className='font-semibold font-sm'>{this.props.title}</p>
        <ButtonStandard
          textButton="Lihat Semua"/>
      </div>
    )
  }
}
