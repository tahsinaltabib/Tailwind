import React from 'react'
import Image from '../reuseable/Image'
import Logo from '../assets/logo1.png'

const Nav = () => {
  return (
    <>
      <div className="max-w-[1320px] mx-auto">
        <div className="flex justify-between items-center">

          <div className="">
          <Image src={Logo}/>
          </div>

          <div className="">
            <ul className='flex gap-15 text-2xl'>
              <li><a className='hover:text-purple-600 duration-500' href="#">Home</a></li>
              <li><a className='hover:text-purple-600 duration-500' href="#">About</a></li>
              <li><a className='hover:text-purple-600 duration-500' href="#">Sercice</a></li>
              <li><a className='hover:text-purple-600 duration-500' href="#">Blog</a></li>
              <li><a className='hover:text-purple-600 duration-500' href="#">Contact</a></li>
            </ul>
          </div>

        </div>
      </div>
    </>
  )
}

export default Nav