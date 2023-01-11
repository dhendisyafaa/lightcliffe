import React, { Component } from 'react'
import product1 from '../../assets/photos/product/2.png'
import author from '../../assets/photos/icon/author.svg'
import release from '../../assets/photos/icon/release.svg'

export default class PromoCard extends Component {
  render() {
    return (
      <div className='rounded-lg w-full overflow-hidden shadow-[0_2px_4px_0px_rgba(0,0,0,0.25)]'>
        <div className="relative">
          <img src={product1} alt="photo product"/>
          <div className="absolute top-0 z-50 text-white rounded-br-lg bg-accent font-semibold text-xs px-2 py-1">{this.props.promoPercent}</div>
        </div>
        <div className="m-2 flex flex-col gap-2">
            <p className='font-normal text-xs leading-4'>{this.props.nameProduct}</p>
            <p className='text-xs font-semibold'>Rp. {this.props.priceProduct}</p>
            <div className="flex gap-2">
                <div className="flex gap-1 items-center">
                    <img src={release} alt="release date" className='w-full'/>
                    <p className='text-[8px]'>{this.props.releaseDate}</p>
                </div>
                <div className="flex gap-1 items-center">
                    <img src={author} alt="author name" />
                    <p className='text-[8px]'>{this.props.authorName}</p>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
