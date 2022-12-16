import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({ page }) {
  return (
    <>
      <div className="flex  w-full border-solid border-b-[3px] items-center border-[#E8C37E] min-[850px]:h-[80px]   bg-[#1D1D1D]">
        <div className="flex w-full relative justify-between items-center min-[851px]:mx-[100px] max-[850px]:flex-col">
          <Link to={'/'}>
            <img
              src={require('../../assets/images/logo.png')}
              className="min-[850px]:absolute min-[850px]:-top-[1rem] min-[850px]:left-0 w-[135px] h-[125px] "
              alt=""
            />
          </Link>
          <ul className="flex items-center gap-[2rem] min-[850px]:ml-auto flex-wrap max-[500px]:grid max-[500px]:grid-cols-3">
            <li
              className={` text-[1.8rem] ${
                page === 0 ? 'text-[#E8C37E]' : 'text-[#ffffff]'
              } Outfit font-[600] hover:cursor-pointer`}
            >
              <Link to={'/'}>Home</Link>
            </li>
            <li
              className={` text-[1.8rem] group flex items-center justify-center gap-[.4rem] relative ${
                page === 1 ? 'text-[#E8C37E]' : 'text-[#ffffff]'
              } Outfit font-[600] hover:cursor-pointer`}
            >
              <Link to={'/isekai'}>Isekai</Link>
              <svg width="18" height="13" viewBox="0 0 44 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M-0.000488281 8.3425L27.0978 35.5L-0.000488281 62.6575L8.34201 71L43.842 35.5L8.34201 0L-0.000488281 8.3425Z"
                  fill="#ffffff"
                />
              </svg>
              <ul className="absolute min-w-[27rem] top-[3rem]  left-0 flex-col group max-w-0 opacity-0  group-hover:opacity-100 ease-linear duration-100 ">
                <li className='bg-[#1d1d1d] text-[1.8rem] shadow px-[2rem] py-[1rem] rounded-[.5rem]'>
                  <Link to={'/isekai/project1'}>Isekai Liquidity Contract</Link>
                </li>
              </ul>
            </li>
            <li
              className={` text-[1.8rem] ${
                page === 2 ? 'text-[#E8C37E]' : 'text-[#ffffff]'
              } Outfit font-[600] hover:cursor-pointer`}
            >
              <Link to={'/tav'}>Future TAV</Link>
            </li>
            <li
              className={` text-[1.8rem] ${
                page === 3 ? 'text-[#E8C37E]' : 'text-[#ffffff]'
              } Outfit font-[600] hover:cursor-pointer`}
            >
              <Link to={'/comics'}>Comic & Videos</Link>
            </li>
            <li
              className={` text-[1.8rem] ${
                page === 4 ? 'text-[#E8C37E]' : 'text-[#ffffff]'
              } Outfit font-[600] hover:cursor-pointer`}
            >
              <Link to={'/services'}>Services</Link>
            </li>
            <li
              className={` text-[1.8rem] ${
                page === 5 ? 'text-[#E8C37E]' : 'text-[#ffffff]'
              } Outfit font-[600] hover:cursor-pointer`}
            >
              <Link to={'/upload'}>Upload</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
