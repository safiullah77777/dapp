import Footer from 'components/Footer/Footer'
import Navbar from 'components/Navbar/Navbar'
import React from 'react'
// import bg from '../../assets/images/bg1.png'
import topLeft from '../../assets/images/top-left.svg'
import topCenter from '../../assets/images/center.svg'
import topRight from '../../assets/images/top-right.svg'
import bottomLeft from '../../assets/images/bottom-left.svg'
import bottomRight from '../../assets/images/bottom-right.svg'
import one from '../../assets/images/1.svg'
import two from '../../assets/images/2.svg'
import three from '../../assets/images/3.svg'
import four from '../../assets/images/4.svg'
import five from '../../assets/images/5.svg'
import logo from '../../assets/images/logo1.png'
import Teenage from 'components/Teenage/Teenage'
import ImageCard from 'components/ImageCard/ImageCard'
import image1 from '../../assets/images/cardimage1.svg'
import image2 from '../../assets/images/cardimage2.svg'
import image3 from '../../assets/images/cardimage3.svg'
const Home = () => {
  return (
    <div className="bg-[#111111]">
      <Navbar />
      <div className={`flex w-full bg1 h-[750px] gap-[2rem] items-center justify-center flex-col`}>
        <h1 className="clash text-center font-[300] text-[7rem] text-[#ffffff] max-w-[75rem] leading-[100%]">
          Start your <span className="text-[#E8C37E] font-[700]">NFT</span> collections journey with{' '}
          <span className="text-[#E8C37E] font-[700]">Prestige Lab</span>{' '}
        </h1>
        <h2 className="Outfit text-center font-[300] text-[2.4rem] text-[#FEEBAE] max-w-[75rem] leading-[100%]">
          “We believe that NFT needs to be harder to produce or almost painful to create”
        </h2>
        <button className="flex flex-col gap-[1rem] items-center px-[3rem] py-[2rem] rounded-[2.5rem] border-[5px] bg-[#000000]/[0.8] border-solid border-[#E8C37E] ">
          <svg width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.0316 31.4871C15.647 31.1025 15.4456 30.613 15.4274 30.0187C15.4106 29.4243 15.5945 28.9348 15.9791 28.5502L26.2582 18.2711H2.81555C2.22118 18.2711 1.72261 18.0697 1.31984 17.6669C0.918461 17.2656 0.717773 16.7677 0.717773 16.1733C0.717773 15.5789 0.918461 15.0804 1.31984 14.6776C1.72261 14.2762 2.22118 14.0755 2.81555 14.0755H26.2582L15.9791 3.79643C15.5945 3.41184 15.4106 2.92236 15.4274 2.32799C15.4456 1.73362 15.647 1.24413 16.0316 0.859542C16.4161 0.474949 16.9056 0.282654 17.5 0.282654C18.0944 0.282654 18.5838 0.474949 18.9684 0.859542L32.8138 14.7049C33.0236 14.8797 33.1725 15.0979 33.2606 15.3594C33.3473 15.6223 33.3907 15.8936 33.3907 16.1733C33.3907 16.453 33.3473 16.7152 33.2606 16.96C33.1725 17.2047 33.0236 17.432 32.8138 17.6418L18.9684 31.4871C18.5838 31.8717 18.0944 32.064 17.5 32.064C16.9056 32.064 16.4161 31.8717 16.0316 31.4871Z"
              fill="#E8C37E"
            />
          </svg>
          <span className="Outfit text-center font-[700] text-[2.4rem] text-[#FFFFFF] max-w-[75rem] leading-[100%]">
            Get to Apps
          </span>
        </button>
      </div>
      <div className="flex flex-col bg-[#1D1D1D]">
        <div className="grid grid-cols-3 w-full">
          <div className="">
            <img src={topLeft} className="w-full" alt="" />
          </div>
          <div className="">
            <img src={topCenter} className="w-full" alt="" />
          </div>
          <div className="">
            <img src={topRight} className="w-full" alt="" />
          </div>
        </div>
        <div className="flex p-[3rem] px-[6rem] gap-[2rem] max-[1000px]:flex-col justify-center items-center">
          <div className="w-[40rem] ">
            <img src={logo} className="h-full w-full" alt="" />
          </div>
          <div className="flex flex-col max-w-[82rem] max-[1000px]:items-center">
            <h2 className="clash text-[7rem] font-[600] gradient-text ">About</h2>
            <p className="Outfit font-[300] leading-[120%] text-[2.4rem] text-[#ffffff]  max-[1000px]:text-center">
              Prestige lab is an NFT and art company with the mission of making NFTs reach a scarcity status “We believe
              that NFT needs to be harder to produce or almost painful to create”. in prestige we are trying to create
              an ecosystem for NFT that removes middlemen, trust and reduces the chance of artificial bubbles.
            </p>
            <p className="Outfit font-[300] leading-[120%] text-[2.4rem] text-[#E8296F]  max-[1000px]:text-center">
              By allowing NFT to have intrinsic value by utilizing smart contract locked liquidity, an NFT will always
              be liquid (at least in ETH). And with each interaction with the smart contracted every NFT collection
              increases its intrinsic value.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 w-full items-end ">
          <div className="">
            <img src={bottomLeft} className="w-full" alt="" />
          </div>
          <div className="">
            <img src={topCenter} className="w-full" alt="" />
          </div>
          <div className="">
            <img src={bottomRight} className="w-full" alt="" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full py-[3rem]  max-[1000px]:px-[3rem]">
        <h2 className="clash text-[7rem] font-[600] gradient-text">Isekai (ISK)</h2>
        <div className="grid grid-cols-3 w-full">
          <div className="">
            <img src={three} className="w-full" alt="" />
          </div>
          <div className="">
            <img src={one} className="w-full" alt="" />
          </div>
          <div className="">
            <img src={two} className="w-full" alt="" />
          </div>
        </div>
        <div className="flex max-w-[125rem] flex-col py-[3rem] gap-[5rem]">
          <p className="Outfit font-[300] leading-[120%] text-[2.4rem] text-[#ffffff]  max-[1000px]:text-center">
            Isekai is a collection of artwork consisting of Japanese anime characters, of which each represents an
            Isekai Protagonist/Antagonist, Isekai artworks are influenced by famous anime beloved by millions like
            Attack on Titans, Demon Slayer, HXH & many more.
          </p>
          <p className="Outfit font-[300] leading-[120%] text-[2.4rem] text-[#ffffff]  max-[1000px]:text-center">
            The collection consisted of <span className="text-[#E8296F] font-[600] "> 666 NFT </span> with almost{' '}
            <span className="text-[#E8296F] font-[600]"> 200 </span> different treats in order to create a comprehensive
            rarity ranking. The collection have one of a kind locked liquidity smart contract that allow you to buy and
            sell your NFT instantly with minimal slippage, the more the contract is used the more value the whole
            ecosystem have
          </p>
        </div>
        <h2 className="clash font-[400] text-[4rem] leading-[120%] text-[#E8C37E]  max-[1000px]:text-center">
          You can see the Background story of the Isekai here:
        </h2>
        <iframe
          width="80%"
          height="550px"
          className="p-5 my-[30px] rounded-[35px] mx-auto"
          src="https://www.youtube.com/embed/eylVt_Wxveg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <button className="flex gap-[1rem] bg-gradient py-[1.5rem] px-[4rem] rounded-[2.5rem]">
          <span className="Outfit font-[700] text-[2.4rem] leading-[100%]">Go to Subpage</span>
          <svg width="32" height="32" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.0316 31.4871C15.647 31.1025 15.4456 30.613 15.4274 30.0187C15.4106 29.4243 15.5945 28.9348 15.9791 28.5502L26.2582 18.2711H2.81555C2.22118 18.2711 1.72261 18.0697 1.31984 17.6669C0.918461 17.2656 0.717773 16.7677 0.717773 16.1733C0.717773 15.5789 0.918461 15.0804 1.31984 14.6776C1.72261 14.2762 2.22118 14.0755 2.81555 14.0755H26.2582L15.9791 3.79643C15.5945 3.41184 15.4106 2.92236 15.4274 2.32799C15.4456 1.73362 15.647 1.24413 16.0316 0.859542C16.4161 0.474949 16.9056 0.282654 17.5 0.282654C18.0944 0.282654 18.5838 0.474949 18.9684 0.859542L32.8138 14.7049C33.0236 14.8797 33.1725 15.0979 33.2606 15.3594C33.3473 15.6223 33.3907 15.8936 33.3907 16.1733C33.3907 16.453 33.3473 16.7152 33.2606 16.96C33.1725 17.2047 33.0236 17.432 32.8138 17.6418L18.9684 31.4871C18.5838 31.8717 18.0944 32.064 17.5 32.064C16.9056 32.064 16.4161 31.8717 16.0316 31.4871Z"
              fill="#ffffff"
            />
          </svg>
        </button>
      </div>
      <Teenage
        heading="Teenage Superhero"
        para="A free airdropped NFT for the prestige community on the polygon network, as of now there is no plan to further
          develop the collection. Nevertheless it remain a cool NFT that may make the owner eligible for future
          whitelist and airdrop"
      />
      <div className="flex flex-col w-full items-center gap-[4rem]">
        <div className="flex max-w-[125rem] flex-col py-[3rem] gap-[5rem]">
          <h2 className="clash text-[7rem] font-[600] gradient-text">Future TAV collection</h2>
        </div>
        <div className="grid grid-cols-2 w-full">
          <div className="">
            <img src={five} className="w-full h-full" alt="" />
          </div>
          <div className="">
            <img src={four} className="w-full h-full" alt="" />
          </div>
        </div>
        <p className="Outfit font-[300] max-w-[125rem] leading-[120%] text-[2.4rem] text-[#ffffff]">
          Owning art is inherently risky as an investment and chances are the value of that art is more likely to go
          down than up, especially in a bear market or an extended market cool-off. But it is not the case with TAV. TAV
          has a build-in floor price that can only go up. When you pay to mint an artwork you are paying a deposit, that
          you will get back and more when you decide that you want to cash it out.
        </p>
        <p className="Outfit font-[300] max-w-[125rem] leading-[120%] text-[2.4rem] text-[#E8296F]">
          The economy of TAV is designed in a way that makes the reserve fund of each artwork impossible to be reduced.
        </p>
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
      </div>
      <Teenage
        heading={'Prestige Protocol'}
        para="An ambitious project, it is a plan to create an NFT ecosystem that is based on real life use case and with a valuation module that is sustainable and unique. As of now, we do not have an official whitepaper for the protocol"
      />
      <div className="flex flex-wrap gap-[1rem] px-[5rem] py-[3rem] justify-center">
        <ImageCard image={image1} title="James NFT" />
        <ImageCard image={image2} title="Crypto Otaku" />
        <ImageCard image={image3} title="Imman (artist)" />
      </div>
      <Footer />
    </div>
  )
}

export default Home
