function Teenage({ heading, para }) {
  return (
    <>
      <div className="flex justify-evenly items-center w-full bg2 my-5 px-[5rem] py-[4rem]  max-[850px]:flex-col">
        <h1 className="max-w-[50rem] text-[7rem] text-[#FFFFFF] font-[600] leading-[100%] uppercase  max-[1000px]:text-center">
          {heading}
        </h1>
        <p className="max-w-[72rem] text-[2.4rem] text-[#FFFFFF] font-[300] leading-[120%]  max-[1000px]:text-center">
          {para}
        </p>
      </div>
    </>
  )
}

export default Teenage
