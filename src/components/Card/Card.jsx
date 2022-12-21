import React, { useState } from 'react'
import { deletePdf } from 'services/formService'

function Card({ title, _id, setData, setPdf, url, pdfId, isDelete, classes }) {
  const [isClicked, setClicked] = useState(false)
  return (
    <>
      <div className={`flex cursor-pointer w-full relative flex-col group   overflow-hidden items-center  h-[315px] bg-[#2D2D2D] rounded-[30px] ${classes ? classes : ""}`}>
        {isDelete && <span
          onClick={() => setClicked((prev) => !prev)}

          className="absolute right-[2rem]  top-[1rem] z-[10] shadow-2xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="#ffffff"
            className="bi bi-three-dots-vertical shadow-2xl"
            viewBox="0 0 16 16"
          >
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />{' '}
          </svg>
          <ul
            className={`bg-[#111111] min-w-[10rem] rounded-[1rem] absolute top-[2.5rem] right-[0rem] ${isClicked ? 'flex' : 'hidden'
              }`}
          >
            <li
              onClick={() => {
                deletePdf({ pdfId })
                setData((prev) => [
                  ...prev.filter((item) => {
                    return item?._id !== _id
                  }),
                ])
              }}
              className="py-[.5rem] px-[2rem] clash font-[400] text-[2rem] text-[#ffffff]"
            >
              delete
            </li>
          </ul>
        </span>}
        <img
          src={require('../../assets/images/comic.jpg')}
          alt="image"
          className="w-full h-full rounded-[5px] duration-300 ease-linear group-hover:scale-105"
        />
        <div
          onClick={() => setPdf(url)}
          className="absolute top-[0rem] left-[0rem] p-[1rem] w-full h-full bg-[#000000]/[0.3]"
        >
          <h2 className="text-[22px] max-w-[80%] clash font-[500] overflow-hidden text-[#FFFFFF]  leading-[100%]  h-[38px] ">
            {title.slice(0, 199)}
          </h2>
        </div>
      </div>
    </>
  )
}

export default Card
