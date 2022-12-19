import React from 'react'

function Card3({ image, title, para }) {
  return (
    <>
      <div className="flex flex-col items-center text-center gap-[2.6rem] max-w-[60rem]  bg-[#1D1D1D] rounded-[20px] border-[3px] border-solid border-[#000000] ease-linear duration-200  py-[41px] px-[20px] hover:border-[#E8C37E] m-5 ">
        <img src={image} alt="img1" />
        <h1 className="text-[2.2rem] text-[#E8C37E] font-[600]">{title}</h1>
        <p className="text-[1.8rem] text-[#FFFFFF] font-[300] leading-[120%]">{para}</p>
      </div>
    </>
  )
}

export default Card3
