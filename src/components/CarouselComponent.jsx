import React, { Component } from 'react'

export default class CarouselComponent extends Component {
    render() {
        return (
            <div className='carousel'>
                <img
                    src={this.props.imgCarousel}
                    alt=""
                    className='w-full h-32 sm:h-48 lg:h-56 rounded-lg'
                />

                <div className='indikator-carousel flex gap-1 mt-2.5'>
                    <button className='w-2 h-2 bg-grey rounded-full'></button>
                    <button className='w-2 h-2 bg-accent rounded-full'></button>
                    <button className='w-2 h-2 bg-grey rounded-full'></button>
                    <button className='w-2 h-2 bg-grey rounded-full'></button>
                    <button className='w-2 h-2 bg-grey rounded-full'></button>
                </div>
            </div>
        )
    }
}
