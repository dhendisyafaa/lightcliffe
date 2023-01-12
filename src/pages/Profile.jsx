import React, { Component } from 'react'
import photoProfil from '../assets/photos/product/2.png'
import editProfile from '../assets/photos/icon/settings.svg'
import logout from '../assets/photos/icon/log-out.svg'
import CardSetting from '../components/CardSetting'
import classNames from 'classnames'

export default class Bag extends Component {
    render() {
        return (
            <div className='h-full'>
                <div className="flex justify-end mt-3 mr-3">
                    <button className='bg-accent rounded-full text-white px-2 py-1 border-none'>X</button>
                </div>
                <div className="px-6 py-4 mt-4">
                    <div className="flex justify-between items-center border-b-2 pb-6">
                        <div className="flex items-center gap-3">
                            <img src={photoProfil} alt="photoprofil" className='h-14 w-14 rounded-full' />
                            <div className="">
                                <p className='font-semibold text-sm'>Periplus Bandung</p>
                                <p className='font-light text-xs'>dhensganteng@gmail.com</p>
                                <p className='font-extralight text-xs'>089123456789</p>
                            </div>
                        </div>
                        <div className="">
                            <img src={editProfile} alt="editProfile" />
                        </div>
                    </div>
                </div>
                <div className="px-5">
                    <p className='font-bold text-sm mb-5'>Pengaturan lainnya</p>
                    <div className="flex flex-col gap-5">
                        <CardSetting
                            nameSetting="Pengaturan Alamat" />
                        <CardSetting
                            nameSetting="Keamanan Akun" />
                        <CardSetting
                            nameSetting="Notifikasi" />
                        <CardSetting
                            nameSetting="Tema Aplikasi" />
                    </div>

                </div>
                <div className="relative flex justify-between items-end w-full h- py-4 px-4">
                    <p className='font-sm text-normal'>Keluar</p>
                    <img src={logout} alt="" />
                </div>
            </div>
        )
    }
}
