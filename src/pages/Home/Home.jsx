import Footer from 'components/Footer/Footer'
import Navbar from 'components/Navbar/Navbar'
import React, { useState } from 'react'
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
import { Link } from 'react-router-dom'

const Home = () => {
  // "https://www.pdfdrive.com/download.pdf?id=10172273&h=84f0f3490acb0a861ce0cf97be914eed&u=cache&ext=pdf"
  //'https://arxiv.org/pdf/quant-ph/0410100.pdf'
  return (
    <div className="bg-[#111111]">
      <div></div>
      <Navbar />
      <div className={`flex w-full bg1 h-[750px] gap-[2rem] items-center justify-center flex-col`}>
        <h1 className="clash text-center font-[300] text-[7rem] text-[#ffffff] max-w-[75rem] leading-[100%]">
          Start your <span className="text-[#E8C37E] font-[700]">NFT</span> collections journey with{' '}
          <span className="text-[#E8C37E] font-[700]">Prestige Lab</span>{' '}
        </h1>
        <h2 className="Outfit text-center font-[300] text-[2.4rem] text-[#FEEBAE] max-w-[75rem] leading-[100%]">
          “We believe that NFT needs to be harder to produce or almost painful to create”
        </h2>
        <Link
          to={'/isekai/project1'}
          className="flex flex-col gap-[1rem] items-center px-[3rem] py-[2rem] rounded-[2.5rem] border-[5px] bg-[#000000]/[0.8] border-solid border-[#E8C37E] "
        >
          <svg width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.0316 31.4871C15.647 31.1025 15.4456 30.613 15.4274 30.0187C15.4106 29.4243 15.5945 28.9348 15.9791 28.5502L26.2582 18.2711H2.81555C2.22118 18.2711 1.72261 18.0697 1.31984 17.6669C0.918461 17.2656 0.717773 16.7677 0.717773 16.1733C0.717773 15.5789 0.918461 15.0804 1.31984 14.6776C1.72261 14.2762 2.22118 14.0755 2.81555 14.0755H26.2582L15.9791 3.79643C15.5945 3.41184 15.4106 2.92236 15.4274 2.32799C15.4456 1.73362 15.647 1.24413 16.0316 0.859542C16.4161 0.474949 16.9056 0.282654 17.5 0.282654C18.0944 0.282654 18.5838 0.474949 18.9684 0.859542L32.8138 14.7049C33.0236 14.8797 33.1725 15.0979 33.2606 15.3594C33.3473 15.6223 33.3907 15.8936 33.3907 16.1733C33.3907 16.453 33.3473 16.7152 33.2606 16.96C33.1725 17.2047 33.0236 17.432 32.8138 17.6418L18.9684 31.4871C18.5838 31.8717 18.0944 32.064 17.5 32.064C16.9056 32.064 16.4161 31.8717 16.0316 31.4871Z"
              fill="#E8C37E"
            />
          </svg>
          <span className="Outfit text-center font-[700] text-[2.4rem] text-[#FFFFFF] max-w-[75rem] leading-[100%]">
            Get to Apps
          </span>
        </Link>
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
          src="https://www.youtube.com/embed/wQ8PaVwcjaE"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        {/* <button className="flex gap-[1rem] bg-gradient py-[1.5rem] px-[4rem] rounded-[2.5rem]">
          <span className="Outfit font-[700] text-[2.4rem] leading-[100%]">Go to Subpage</span>
          <svg width="32" height="32" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.0316 31.4871C15.647 31.1025 15.4456 30.613 15.4274 30.0187C15.4106 29.4243 15.5945 28.9348 15.9791 28.5502L26.2582 18.2711H2.81555C2.22118 18.2711 1.72261 18.0697 1.31984 17.6669C0.918461 17.2656 0.717773 16.7677 0.717773 16.1733C0.717773 15.5789 0.918461 15.0804 1.31984 14.6776C1.72261 14.2762 2.22118 14.0755 2.81555 14.0755H26.2582L15.9791 3.79643C15.5945 3.41184 15.4106 2.92236 15.4274 2.32799C15.4456 1.73362 15.647 1.24413 16.0316 0.859542C16.4161 0.474949 16.9056 0.282654 17.5 0.282654C18.0944 0.282654 18.5838 0.474949 18.9684 0.859542L32.8138 14.7049C33.0236 14.8797 33.1725 15.0979 33.2606 15.3594C33.3473 15.6223 33.3907 15.8936 33.3907 16.1733C33.3907 16.453 33.3473 16.7152 33.2606 16.96C33.1725 17.2047 33.0236 17.432 32.8138 17.6418L18.9684 31.4871C18.5838 31.8717 18.0944 32.064 17.5 32.064C16.9056 32.064 16.4161 31.8717 16.0316 31.4871Z"
              fill="#ffffff"
            />
          </svg>
        </button> */}
      </div>
      {/* <Teenage
        heading="Teenage Superhero"
        para="A free airdropped NFT for the prestige community on the polygon network, as of now there is no plan to further
          develop the collection. Nevertheless it remain a cool NFT that may make the owner eligible for future
          whitelist and airdrop"
      /> */}
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
      </div>
      {/* <Tweet tweetID="1518216338447409154" /> */}
      <div className="flex my-[3rem] justify-center gap-[3rem]">
        <a target={'_blank'} rel="noreferrer" href="https://twitter.com/PrestigeDef" className="">
          <svg width="50" height="45" viewBox="0 0 37 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M36.7484 3.65328C35.3723 4.26287 33.9128 4.663 32.4183 4.84037C33.975 3.90735 35.1703 2.42989 35.7331 0.669504C34.2533 1.54766 32.6342 2.16638 30.9459 2.49893C29.5706 1.03381 27.6114 0.118164 25.443 0.118164C21.2794 0.118164 17.9038 3.49367 17.9038 7.65692C17.9038 8.24788 17.9705 8.82319 18.099 9.3751C11.8334 9.0606 6.27841 6.05931 2.55999 1.49816C1.91119 2.61161 1.53942 3.90678 1.53942 5.28821C1.53942 7.90381 2.87047 10.2112 4.89324 11.5632C3.69604 11.5257 2.52518 11.2024 1.47841 10.6202C1.47798 10.6518 1.47798 10.6833 1.47798 10.7151C1.47798 14.3677 4.07664 17.4148 7.52535 18.1074C6.41519 18.4093 5.2507 18.4535 4.12085 18.2366C5.08013 21.2317 7.86439 23.4112 11.1632 23.4722C8.5831 25.4941 5.33234 26.6995 1.80037 26.6995C1.19176 26.6995 0.591762 26.6637 0.00195312 26.5941C3.33827 28.7331 7.301 29.9812 11.5584 29.9812C25.4254 29.9812 33.0083 18.4935 33.0083 8.53123C33.0083 8.20424 33.0011 7.87912 32.9865 7.55587C34.4624 6.48891 35.7363 5.16737 36.7484 3.65328Z"
              fill="#55ACEE"
            />
          </svg>
        </a>
        <a target={'_blank'} href="https://opensea.io/collection/isekaibyprestige" rel="noreferrer" className="">
          <svg width="50" height="50" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21.3422 3.65751C18.9835 1.30152 15.8405 0 12.5 0C9.15948 0 6.0285 1.30152 3.66379 3.65751C1.29909 6.01952 0 9.15883 0 12.497C0 15.8351 1.29909 18.9745 3.66379 21.3365C6.02251 23.6925 9.15948 24.994 12.5 24.994C15.8405 24.994 18.9775 23.6925 21.3362 21.3365C23.7009 18.9745 25 15.8351 25 12.497C25 9.15883 23.7009 6.01952 21.3422 3.65751V3.65751ZM22.2581 8.48397H17.6185C17.6185 8.48397 17.6185 8.45384 17.6066 8.44179C17.1576 5.99542 16.499 3.94071 15.9842 2.56086C18.8218 3.55507 21.1087 5.7303 22.2522 8.49L22.2581 8.48397ZM11.0872 2.06676C11.5541 2.00048 12.0211 1.97035 12.5 1.97035C12.8951 1.97035 13.2842 1.99446 13.6614 2.03664C14.0805 3.01277 15.0263 5.42299 15.619 8.48397H9.57256C10.0814 5.07954 10.9255 2.53676 11.0872 2.06676V2.06676ZM1.95762 12.497C1.95762 11.798 2.02347 11.1171 2.15517 10.4483H7.36949C7.1899 12.4187 7.17194 14.3167 7.32759 16.1063H2.59219C2.17912 14.9795 1.95163 13.7624 1.95163 12.497H1.95762ZM3.56801 18.0766H7.57304C7.81849 19.577 8.18367 20.993 8.68056 22.3066C6.55532 21.4811 4.75934 19.9807 3.56202 18.0766H3.56801ZM7.60297 8.48397H2.75383C3.87931 5.77247 6.10034 3.63341 8.86015 2.61509C8.49497 3.87443 7.95618 5.95324 7.59698 8.48397H7.60297ZM13.9128 22.9332C13.4519 22.9935 12.9849 23.0296 12.512 23.0296C12.039 23.0296 11.5421 22.9935 11.0692 22.9332C10.3269 21.3786 9.84794 19.7337 9.56657 18.0827H15.7268C15.3796 19.7216 14.8048 21.3666 13.9128 22.9393V22.9332ZM16.0261 16.1123H9.29717C9.11758 14.0998 9.17744 12.1596 9.33908 10.4543H15.9483C16.1638 12.1596 16.2476 14.1058 16.0321 16.1123H16.0261ZM16.4272 22.2765C17.0019 20.9629 17.4389 19.5589 17.7203 18.0827H21.45C20.2706 19.9626 18.5105 21.4449 16.4332 22.2765H16.4272ZM18.0017 16.1123L18.0137 15.9376C18.1693 14.1962 18.1334 12.3584 17.9119 10.4604H22.8508C22.9825 11.1232 23.0484 11.8101 23.0484 12.509C23.0484 13.7804 22.8209 14.9916 22.4078 16.1183H17.9957L18.0017 16.1123Z"
              fill="url(#paint0_linear_139_132)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_139_132"
                x1="0"
                y1="12.497"
                x2="25"
                y2="12.497"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF884B" />
                <stop offset="0.35" stop-color="#FF634C" />
                <stop offset="0.66" stop-color="#FE4A4F" />
                <stop offset="1" stop-color="#FE4840" />
              </linearGradient>
            </defs>
          </svg>
        </a>
      </div>
      <Footer />
    </div>
  )
}

export default Home
