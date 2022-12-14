import React from 'react'

function Card2({ title, image }) {
  console.log(image)
  return (
    <>
      <div>
        <div className=" flex shadow-lg  flex-col justify-around items-center w-[40rem]  bg-[#000000] rounded-[20px] my-5">
          <img src={image} alt="ImageCard-1" className="w-full " />
          <div className="flex items-center justify-between w-full px-[1rem]">
            <h1 className="clash text-[2.8rem] text-[#FEEBAE] font-[400] leading-[100%] my-[2rem] flex-1">{title}</h1>
            <span className="ml-auto flex flex-col   Outfit font-[400] text-[1.9rem] px-[1rem] py-[.1rem] rounded-[1rem] border-[2px] bg-[#292929]/[0.8] border-solid border-[#E8C37E] ">
              Burn
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card2
