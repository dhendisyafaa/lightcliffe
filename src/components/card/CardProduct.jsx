import React, { Component } from 'react'
import product1 from '../../assets/photos/product/2.png'
import author from '../../assets/photos/icon/author.svg'
import release from '../../assets/photos/icon/release.svg'
import { Menu } from '@headlessui/react'

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
              <img src={release} alt="release date" className='w-full' />
              <p className='text-[8px]'>{this.props.releaseDate}</p>
            </div>
            <div className="flex gap-1 items-center">
              <img src={author} alt="author name" />
              <p className='text-[8px]'>{this.props.authorName}</p>
            </div>
            <div className="">
              <Menu>
                <Menu.Button>...</Menu.Button>
                <Menu.Items className="bg-white rounded-t-xl fixed bottom-0 z-50 left-0 w-full h-[20%] border flex flex-col gap-3 px-3 py-6 font-light text-xs shadow-[2px_0px_20px_0px_rgba(0,0,0,0.25)]">
                <hr className="bg-accent" />
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        className={`${active && 'text-gray-800'}`}
                        href="/wishlist"
                      >
                        Masukkan Wishlist
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        className={`${active && 'text-gray-800'}`}
                        href="serupa"
                      >
                        Produk Serupa
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
