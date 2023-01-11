import React, { Component } from 'react'
import photoProfil from '../assets/photos/product/2.png'

export default class ChatComponent extends Component {
    render() {
        return (
            <div className="flex justify-between items-center border-b-2 pb-3">
                <div className="flex items-center gap-2">
                    <img src={photoProfil} alt="photoprofil" className='h-14 w-14 rounded-full' />
                    <div className="">
                        <p className='font-semibold text-sm'>Periplus Bandung</p>
                        <p className='font-semibold text-xs'>Lorem ipsum dolor sit amet...</p>
                    </div>
                </div>
                <div className="">
                    <p className='font-normal text-xs'>24/09/22</p>
                </div>
            </div>
        )
    }
}
