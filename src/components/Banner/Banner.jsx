import React from 'react'
import "./Banner.css"

function Banner({url}) {
  return (
    <div className='banner'>
      <img className='bannerImg' src={url} alt="" />
    </div>
  )
}

export default Banner
