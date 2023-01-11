import React, { Component } from 'react'
import ButtonStandard from '../button/ButtonStandard'
import fotoproduk from '../../assets/photos/product/2.png'

export default class CardOrder extends Component {
  render() {
    return (
      <div className="bg-white p-2 rounded-lg shadow-[0_2px_4px_0px_rgba(0,0,0,0.25)]">
        <div className="flex justify-between items-center border-b-2 pb-2">
            <p className='font-normal text-xs'>7 Juni 2023</p>
            <button className='bg-[#d61c4e38] text-accent text-xs font-semibold py-0.5 px-2 rounded'>Proses</button>
        </div>
        <div className="flex mt-2 items-center gap-2">
            <img src={fotoproduk} alt="fotoproduk" className='w-12 h-12' />
            <div className="info-produk">
                <p className='text-xs font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className='font-normal text-xs'>nnama tokonya</p>
            </div>
        </div>
        <div className="flex justify-between items-center mt-1">
            <p className='text-sm font-semibold'>Rp 50.000</p>
            <ButtonStandard
                textButton="Lacak"/>
        </div>
        
      </div>
    )
  }
}
