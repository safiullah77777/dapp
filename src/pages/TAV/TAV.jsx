import Card2 from 'components/Card2/Card2'
import ConnectBox from 'components/connectBox/ConnectBox'
import Footer from 'components/Footer/Footer'
import Navbar from 'components/Navbar/Navbar'
import React from 'react'
import image1 from '../../assets/images/cardimage1.svg'
import image2 from '../../assets/images/cardimage2.svg'
import image3 from '../../assets/images/cardimage3.svg'
import select from '../../assets/images/select.svg'
const TAV = () => {
  return (
    <>
      <Navbar />
      <div className="w-full  bg3 flex flex-col items-center justify-center py-[8rem] gap-[3rem]">
        <h1 className="text-[7rem] text-[#FFFFFF] font-[300] leading-[100%] text-center">
          Future <span className="text-[#E8C37E] font-[700]"> TAV </span> collection
        </h1>
        <p className="text-[5.6rem] text-[#E8C37E] font-[700] leading-[100%]">0 / 0 </p>
        <h2 className="text-[3.2rem] text-[#FFFFFF] font-[300] leading-[120%]">
          Price per TAV - <span className="text-[#FEEBAE]">0</span>
        </h2>
        <ConnectBox />
        <h2 className="Outfit font-[700] text-[2rem] leading-[120%] text-[#E8C37E]  max-[1000px]:text-center">
          TAV is an expermintal project on ether testnet ask for a whitelist on discord.
        </h2>
        <p className="Outfit font-[300] max-w-[125rem] leading-[120%] text-[2.4rem] text-[#ffffff]  text-center">
          Owning art is inherently risky as an ivestment and chances are the value of that art is more likely to go down
          than up, especially in a bear market or an extended market cool-off. But it is not the case with TAV. TAV has
          a build-in floor price that can only go up. When you pay to mint an artwork you are paying a deposit, that you
          will get back and more when you decide that you want to cash it out.
        </p>
      </div>
      <div className="flex gap-[3rem] p-[5rem] max-[500px]:px-[2rem] flex-col items-center justify-center bg-[#111111]">
        <h2 className="clash text-[7rem] max-[450px]:text-[5rem] font-[600] text-[#E8C37E] text-center max-w-[110rem] leading-[100%]">
          {' '}
          Choose one TAV art to be burnt for compensation{' '}
        </h2>
        <div className="grid grid-cols-3 gap-[2rem] max-[1000px]:grid-cols-2 max-[650px]:grid-cols-1">
          <Card2 image={image1} title="James NFT" />
          <Card2 image={image2} title="Crypto Otaku" />
          <Card2 image={image3} title="Imman (artist)" />
          <Card2 image={image1} title="James NFT" />
          <Card2 image={image2} title="Crypto Otaku" />
          <Card2 image={image3} title="Imman (artist)" />
        </div>
        <h2 className="clash text-[4.8rem]  font-[400] text-[#ffffff] text-center leading-[100%]">
          Burn the NFT and Get the Compensation
        </h2>
        <div className="relative flex max-w-[62rem] ">
          <img src={select} className="w-full" alt="" />
          <div className="absolute top-0 flex justify-center items-center left-0 bg-[#000000]/[0.2] w-full h-full z-[10]">
            <h2 className="clash font-[500] text-[4.8rem] text-[#ffffff] uppercase">Selected NFT</h2>
          </div>
        </div>
        <div className="flex flex-col ">
          <h2 className="clash text-center font-[400] text-[4.8rem] text-[#ffffff] uppercase leading-[120%]">
            You will get <span className="font-[700] text-[#E8C37E]">0</span> <span className="font-[700]"> ETH</span>{' '}
          </h2>
          <p className="clash font-[300]  leading-[120%] text-[2.4rem] text-[#ffffff]  text-center">You own Nothing</p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default TAV
