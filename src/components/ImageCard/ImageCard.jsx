import React from 'react'

function ImageCard({image,title}) {
  return (
    <>
        <div>

        <div className=' flex shadow-lg p-[1rem] flex-col justify-around items-center w-[40rem]  bg-[#1D1D1D] rounded-[20px] my-5'>
            <img src={image} alt="ImageCard-1" className='w-full rounded-[13px]' />
            <h1 className='text-[30px] text-[#FFFFFF] font-[500] leading-[100%] my-[2rem]'>{title}</h1>
        </div>

        </div> 
    </>
  )
}

export default ImageCard;