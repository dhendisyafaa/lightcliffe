import React, { Component } from 'react'

export default class ButtonStandard extends Component {
  render() {
    return (
      <div className=''>
        <button className='bg-accent border-none text-white rounded-lg text-[10px] px-3 py-[5px]'>
            {this.props.textButton}
        </button>
      </div>
    )
  }
}
