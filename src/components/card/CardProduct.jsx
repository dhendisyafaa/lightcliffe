import React, { Component } from 'react'
import product1 from '../../assets/photos/product/2.png'
import author from '../../assets/photos/icon/author.svg'
import release from '../../assets/photos/icon/release.svg'

export default class CardProduct extends Component {
  render() {
    return (
      <div className='w-[38vw] sm:w-[28vw] md:w-[20vw] lg:w-[18vw] rounded-lg overflow-hidden shadow-[0_2px_4px_0px_rgba(0,0,0,0.25)] bg-white min-h-full'>
        <img src={product1} alt="photo product" />
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
