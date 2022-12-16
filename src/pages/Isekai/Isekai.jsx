import ConnectBox from 'components/connectBox/ConnectBox'
import Footer from 'components/Footer/Footer'
import Navbar from 'components/Navbar/Navbar'






// Create new plugin instance
function Isekai() {
  
  return (
    <>
      <Navbar />
      
      <div className="w-full  bg3 flex flex-col items-center justify-center py-[8rem] gap-[3rem]">
        <h1 className="text-[7rem] max-w-[82rem] text-[#FFFFFF] font-[300] leading-[100%] text-center">
          Mint your <span className="text-[#E8C37E] font-[700]"> Isekai</span> and start your journey
        </h1>
        <p className="Outfit font-[300] max-w-[110rem] leading-[120%] text-[2.4rem] text-[#ffffff]  text-center">
          Isekai is a collection of artwork consisting of Japanese anime characters, of which each represents an Isekai
          Protagonist/Antagonist, Isekai artworks are influenced by famous anime beloved by millions like Attack on
          Titans, Demon Slayer, HXH & many more. The collection consisted of 666 NFT with almost 200 different treats in
          order to create a comprehensive rarity ranking. The collection have one of a kind locked liquidity smart
          contract that allow you to buy and sell your NFT instantly with minimal slippage, the more the contract is
          used the more value the whole ecosystem have
        </p>
        {/* <p className="text-[56px] text-[#E8C37E] font-[700] leading-[100%]">0 / 2000 </p>
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
        </div> */}
        {/* <ConnectBox /> */}
      </div>
      <iframe
        width="80%"
        height="550px"
        className="p-5 my-[30px] rounded-[35px] mx-auto"
        src="https://www.youtube.com/embed/wQ8PaVwcjaE"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <Footer />
    </>
  )
}

export default Isekai
