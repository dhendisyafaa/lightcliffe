import React, { Component } from 'react'
import '../css/SearchBar.css'

export default class SearchBar extends Component {
    render() {
        return (
            <div className="searchbar w-full">
                <form action="#">
                    <input type="search" placeholder='Cari buku dari penulis favorit Anda'/>
                </form>
            </div>
        )
    }
}
