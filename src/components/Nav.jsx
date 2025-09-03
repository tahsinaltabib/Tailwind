import React, { useState } from 'react'
import Image from '../reuseable/Image'
import Logo from '../assets/logo1.png'
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";


const Nav = () => {
  let [show, setShow] = useState(false)
  
  let handleShow = () => {
    setShow(!show);
  }

  return (
    <>
      <div className="max-w-[1320px] mx-auto">
        <div className="flex justify-between items-center">

          <div className="">
          <Image src={Logo}/>
          </div>

          <div className={`lg:static duration-300 ease-in-out ${show == true
            ? "bg-purple-500 absolute left-0 top-25 w-full"
            : " absolute left-[-100%] top-25 w-full"}`}>
            <ul className='lg:flex gap-8 text-2xl text-center'>

              <li><a className='hover:text-purple-600 duration-500' href="#">Products</a></li>
              <li><a className='hover:text-purple-600 duration-500' href="#">Items</a></li>
              <li><a className='hover:text-purple-600 duration-500' href="#">Man</a></li>
              <li><a className='hover:text-purple-600 duration-500' href="#">Woman</a></li>
              <li><a className='hover:text-purple-600 duration-500' href="#">Contact</a></li>

            </ul>
          </div>

          <div onClick={handleShow} className="lg:hidden">
            {show == true? <IoMdClose/>: <FaBars/>} 
          </div>

        </div>
      </div>
    </>
  )
}

export default Nav