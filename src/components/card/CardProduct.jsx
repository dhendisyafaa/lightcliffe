import React, { Component } from 'react'
import product1 from '../../assets/photos/product/2.png'
import author from '../../assets/photos/icon/author.svg'
import release from '../../assets/photos/icon/release.svg'
import { Menu } from '@headlessui/react'
import { NavLink } from 'react-router-dom'

export default class CardProduct extends Component {
  render() {
    return (
      <NavLink to={this.props.to}>
        <div className='w-[38vw] sm:w-[28vw] md:w-[20vw] lg:w-[18vw] rounded-lg overflow-hidden shadow-[0_2px_4px_0px_rgba(0,0,0,0.25)] bg-white min-h-full'>
          <img src={product1} alt="photo product" />
          <div className="m-2 flex flex-col gap-2">
            <p className='font-normal text-xs leading-4'>{this.props.nameProduct}</p>
            <p className='text-xs font-semibold'>Rp. {this.props.priceProduct}</p>
            <div className="flex items-center justify-between gap-2">
              <div className="flex flex-col gap-1.5">
                <div className="flex gap-1 items-center">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2917 2.16663H2.70833C2.11002 2.16663 1.625 2.65165 1.625 3.24996V10.8333C1.625 11.4316 2.11002 11.9166 2.70833 11.9166H10.2917C10.89 11.9166 11.375 11.4316 11.375 10.8333V3.24996C11.375 2.65165 10.89 2.16663 10.2917 2.16663Z" stroke="#D61C4E" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8.66663 1.08337V3.25004" stroke="#D61C4E" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M4.33337 1.08337V3.25004" stroke="#D61C4E" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M1.625 5.41663H11.375" stroke="#D61C4E" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <p className='text-[8px]'>{this.props.releaseDate}</p>
                </div>
                <div className="flex gap-1 items-center">
                  <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 10.8334H13.125" stroke="#D61C4E" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M10.3125 1.89587C10.5611 1.68039 10.8984 1.55933 11.25 1.55933C11.4241 1.55933 11.5965 1.58905 11.7574 1.64679C11.9182 1.70454 12.0644 1.78918 12.1875 1.89587C12.3106 2.00257 12.4083 2.12924 12.4749 2.26865C12.5415 2.40806 12.5758 2.55748 12.5758 2.70837C12.5758 2.85927 12.5415 3.00869 12.4749 3.1481C12.4083 3.28751 12.3106 3.41418 12.1875 3.52087L4.375 10.2917L1.875 10.8334L2.5 8.66671L10.3125 1.89587Z" stroke="#D61C4E" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <p className='text-[8px]'>{this.props.authorName}</p>
                </div>
              </div>
              <div className="">
                <Menu>
                  <Menu.Button>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.5 8.125C7.84518 8.125 8.125 7.84518 8.125 7.5C8.125 7.15482 7.84518 6.875 7.5 6.875C7.15482 6.875 6.875 7.15482 6.875 7.5C6.875 7.84518 7.15482 8.125 7.5 8.125Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M11.875 8.125C12.2202 8.125 12.5 7.84518 12.5 7.5C12.5 7.15482 12.2202 6.875 11.875 6.875C11.5298 6.875 11.25 7.15482 11.25 7.5C11.25 7.84518 11.5298 8.125 11.875 8.125Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M3.125 8.125C3.47018 8.125 3.75 7.84518 3.75 7.5C3.75 7.15482 3.47018 6.875 3.125 6.875C2.77982 6.875 2.5 7.15482 2.5 7.5C2.5 7.84518 2.77982 8.125 3.125 8.125Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </Menu.Button>
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
      </NavLink>
    )
  }
}
