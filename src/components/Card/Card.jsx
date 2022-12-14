import React from "react";

function Card({ title, image }) {
  console.log(image);
  return (
    <>
      <div className="flex relative flex-col hover:scale-105 duration-300 ease-linear  overflow-hidden items-center  h-[315px] bg-[#2D2D2D] rounded-[30px]">
        <img src={image} alt="image" className="w-full h-full rounded-[5px] " />
        <div className="absolute top-[0rem] left-[0rem] p-[1rem] w-full h-full bg-[#000000]/[0.3]">
          <h2 className="text-[22px] clash font-[500]   overflow-hidden text-[#FFFFFF]  leading-[100%]  h-[38px] ">
            {title.slice(0,199)} ...
            
          </h2>
        </div>
      </div>
    </>
  );
}

export default Card;
