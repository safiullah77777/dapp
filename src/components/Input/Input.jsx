import React from 'react'

const Input = ({ type, placeholder, value, onChange, name }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      name={name}
      className="w-[24rem] outline-none h-[4rem] text-[1.3rem] text-[#000000] font-[300] leading-[15.6px]  bg-[#ffffff] rounded-[4px]  p-3 m-1"
      placeholder={placeholder}
    />
  )
}

export default Input
