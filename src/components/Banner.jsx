import React from 'react'
import Image from '../reuseable/Image'
import BannerImg from '../assets/banner.png'

const Banner = () => {
  return (
    <div className="max-w-[1320px] mx-auto pt-5">
      <div className="flex justify-between ">
        <div className="div">
          <h1 className='text-5xl font-bold'>Hamas</h1>
        </div>
        
        <div className="div">
           <Image src={BannerImg}/>
        </div>
        
      </div>
    </div>
  )
}

export default Banner