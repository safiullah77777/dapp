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
        {/* <h2 className="clash text-[7rem] max-[450px]:text-[5rem] font-[600] text-[#E8C37E] text-center max-w-[110rem] leading-[100%]">
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
        </h2> */}
        {/* <div className="relative flex max-w-[62rem] ">
          <img src={select} className="w-full" alt="" />
          <div className="absolute top-0 flex justify-center items-center left-0 bg-[#000000]/[0.2] w-full h-full z-[10]">
            <h2 className="clash font-[500] text-[4.8rem] text-[#ffffff] uppercase">Selected NFT</h2>
          </div>
        </div> */}
        {/* <iframe
          width="80%"
          height="550px"
          className="p-5 my-[30px] rounded-[35px] mx-auto"
          src="https://twitter.com/PrestigeDef/status/1518216338447409154"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe> */}

        <div className="flex w-full justify-center">
          <iframe
            id="twitter-widget-0"
            width="600px"
            height="700px"
            scrolling="no"
            frameborder="0"
            allowtransparency="true"
            allowFullScreen="true"
            className=""
            title="Twitter Tweet"
            src="https://platform.twitter.com/embed/Tweet.html?dnt=true&amp;embedId=twitter-widget-0&amp;features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOlsibGlua3RyLmVlIiwidHIuZWUiLCJ0ZXJyYS5jb20uYnIiLCJ3d3cubGlua3RyLmVlIiwid3d3LnRyLmVlIiwid3d3LnRlcnJhLmNvbS5iciJdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2hvcml6b25fdGltZWxpbmVfMTIwMzQiOnsiYnVja2V0IjoidHJlYXRtZW50IiwidmVyc2lvbiI6bnVsbH0sInRmd190d2VldF9lZGl0X2JhY2tlbmQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3JlZnNyY19zZXNzaW9uIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19zaG93X2J1c2luZXNzX3ZlcmlmaWVkX2JhZGdlIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19jaGluX3BpbGxzXzE0NzQxIjp7ImJ1Y2tldCI6ImNvbG9yX2ljb25zIiwidmVyc2lvbiI6bnVsbH0sInRmd190d2VldF9yZXN1bHRfbWlncmF0aW9uXzEzOTc5Ijp7ImJ1Y2tldCI6InR3ZWV0X3Jlc3VsdCIsInZlcnNpb24iOm51bGx9LCJ0Zndfc2Vuc2l0aXZlX21lZGlhX2ludGVyc3RpdGlhbF8xMzk2MyI6eyJidWNrZXQiOiJpbnRlcnN0aXRpYWwiLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2V4cGVyaW1lbnRzX2Nvb2tpZV9leHBpcmF0aW9uIjp7ImJ1Y2tldCI6MTIwOTYwMCwidmVyc2lvbiI6bnVsbH0sInRmd19kdXBsaWNhdGVfc2NyaWJlc190b19zZXR0aW5ncyI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdmlkZW9faGxzX2R5bmFtaWNfbWFuaWZlc3RzXzE1MDgyIjp7ImJ1Y2tldCI6InRydWVfYml0cmF0ZSIsInZlcnNpb24iOm51bGx9LCJ0Zndfc2hvd19ibHVlX3ZlcmlmaWVkX2JhZGdlIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19zaG93X2dvdl92ZXJpZmllZF9iYWRnZSI6eyJidWNrZXQiOiJvZmYiLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3Nob3dfYnVzaW5lc3NfYWZmaWxpYXRlX2JhZGdlIjp7ImJ1Y2tldCI6Im9mZiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9mcm9udGVuZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9fQ%3D%3D&amp;frame=false&amp;hideCard=false&amp;hideThread=true&amp;id=1518216338447409154&amp;lang=en&amp;origin=http%3A%2F%2Flocalhost%3A3000%2F&amp;sessionId=e88ee351504d9029704e8e36749cb44ec933f508&amp;theme=dark&amp;widgetsVersion=a3525f077c700%3A1667415560940&amp;width=1000px"
            data-tweet-id="1518216338447409154"
          ></iframe>
        </div>

        {/* <div className="flex flex-col ">
          <h2 className="clash text-center font-[400] text-[4.8rem] text-[#ffffff] uppercase leading-[120%]">
            You will get <span className="font-[700] text-[#E8C37E]">0</span> <span className="font-[700]"> ETH</span>{' '}
          </h2>
          <p className="clash font-[300]  leading-[120%] text-[2.4rem] text-[#ffffff]  text-center">You own Nothing</p>
        </div> */}
      </div>
      <Footer />
    </>
  )
}

export default TAV
