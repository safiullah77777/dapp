import ConnectBox from 'components/connectBox/ConnectBox'
import Footer from 'components/Footer/Footer'
import Navbar from 'components/Navbar/Navbar'

function Isekai() {
  return (
    <>
      <Navbar />
      <div className="w-full  bg3 flex flex-col items-center justify-center py-[8rem] gap-[3rem]">
        <h1 className="text-[7rem] max-w-[82rem] text-[#FFFFFF] font-[300] leading-[100%] text-center">
          Mint your <span className="text-[#E8C37E] font-[700]"> Isekai</span> and start your journey
        </h1>
        <p className="text-[56px] text-[#E8C37E] font-[700] leading-[100%]">0 / 2000 </p>
        <h2 className="text-[32px] text-[#FFFFFF] font-[300] leading-[120%]">
          Price per Isekai - <span className="text-[#FEEBAE] font-[700]">0</span>
        </h2>
        <div className="flex gap-[1rem]">
          <span className="bg-[#E8296F] w-[8rem] h-[8rem] flex items-center justify-center leading-[120%] rounded-[3rem] clash text-[4.8rem] font-[700] text-[#ffffff]">
            1
          </span>
          <span className="bg-[#E8296F] w-[8rem] h-[8rem] flex items-center justify-center leading-[120%] rounded-[3rem] clash text-[4.8rem] font-[700] text-[#ffffff]">
            2
          </span>
          <span className="bg-[#E8296F] w-[8rem] h-[8rem] flex items-center justify-center leading-[120%] rounded-[3rem] clash text-[4.8rem] font-[700] text-[#ffffff]">
            3
          </span>
          <span className="bg-[#E8296F] w-[8rem] h-[8rem] flex items-center justify-center leading-[120%] rounded-[3rem] clash text-[4.8rem] font-[700] text-[#ffffff]">
            4
          </span>
          <span className="bg-[#E8296F] w-[8rem] h-[8rem] flex items-center justify-center leading-[120%] rounded-[3rem] clash text-[4.8rem] font-[700] text-[#ffffff]">
            5
          </span>
        </div>
        <ConnectBox />
      </div>
      <Footer />
    </>
  )
}

export default Isekai
