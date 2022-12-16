import Card3 from 'components/Card3/Card3'
import Footer from 'components/Footer/Footer'
import Input from 'components/Input/Input';
import Navbar from 'components/Navbar/Navbar';
import crypto from '../../assets/images/crypto.svg';
import Cs1 from '../../assets/images/Cs1.svg';
import Cs2 from '../../assets/images/Cs2.svg';
import Cs3 from '../../assets/images/Cs3.svg';
import Cs4 from '../../assets/images/Cs4.svg';
import Cs5 from '../../assets/images/Cs5.svg';
import Cs6 from '../../assets/images/Cs6.svg';
import Cs7 from '../../assets/images/Cs7.svg';
import Cs8 from '../../assets/images/Cs8.svg';
import Cs9 from '../../assets/images/Cs9.svg';
function Services() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col bg4 justify-center items-center text-center gap-[1rem]  w-full py-[6rem] px-[2rem] ">
        <h1 className="text-[7rem] text-[#FFFFFF] font-[500] leading-[100%] max-w-[88rem]">Our Additional Services</h1>
        <p className="text-[2.4rem] text-[#E8C37E] font-[300] leading-[120%] max-w-[103rem] Outfit">
          Let us help you design a smart contract for your business ideas, we have design many complex contracts like
          NFT liquidity contracts and other type of NFT and even non NFT contract
        </p>
        <div className="flex flex-col items-center text-center gap-[1rem] max-w-[88rem]  bg-[#000000]/[0.7] rounded-[3rem] py-[2rem] px-[4rem]">
          <p className="text-[2.4rem] text-[#FFFFFF] font-[500] leading-[120%]">
            We do provide auditing for you smart contracts
          </p>
          <p className="text-[4rem] text-[#E8C37E] font-[500] leading-[120%]">What's Your Blockchain Requirement?</p>
          <form action="#" className="flex flex-col gap-[1rem]">
            <div className="grid grid-cols-3 gap-[1rem] flex-wrap w-full items-center justify-center max-[650px]:grid-cols-2 max-[500px]:grid-cols-1">
              <Input type="text" placeholder="Your Name" />
              <Input type="email" placeholder="Email" />
              <Input type="number" placeholder="Phone" />
              <Input type="text" placeholder="Company Name" />
              <Input type="text" placeholder="When to Start?" />
              <Input
                type="text"
                placeholder="Tell us more about your project requirements. Any similar product available in the market?"
              />
            </div>
            <textarea
              name=""
              id=""
              className="w-full text-center outline-none text-[1.3rem] text-[#000000] font-[300] leading-[15.6px]  bg-[#ffffff] rounded-[4px]  p-3 m-1"
              cols="30"
              rows="5"
              placeholder="Tell us more about your project requirements. Any similar product available in the market?"
            ></textarea>
            <button
              onClick={(e) => {
                e.preventDefault()
              }}
              className="mx-auto flex flex-col   Outfit font-[700] text-[2.4rem] px-[4rem] py-[1rem] rounded-[2.5rem] border-[3px] bg-[#292929]/[0.8] border-solid border-[#E8C37E] "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="flex bg-[#111111] px-[4rem] py-[6rem] items-center justify-center flex-col gap-[8rem]">
        <div className="flex gap-[2rem] max-[1000px]:flex-col items-center">
          <div className="">
            <img src={crypto} alt="" />
          </div>
          <div className="flex flex-col max-w-[91rem]">
            <h2 className="clash font-[600] text-[#E8C37E] text-[7rem] max-[400px]:text-[5rem] leading-[100%]">
              Development of Crypto with Cool Design
            </h2>
            <div className="flex flex-col gap-[1rem]  ">
              <p className="Outfit font-[300]  leading-[120%] text-[2.4rem] text-[#ffffff]  ">
                The entrance of cryptocurrency into the marketplace has been shaky compared to other currencies. Bitcoin
                particularly endured a lot of criticism as individuals declined to take it as money merely because it
                was digital, while many were doubtful about its credibility.
              </p>
              <p className="Outfit font-[300]  leading-[120%] text-[2.4rem] text-[#ffffff]  ">
                Crypto has been moving ahead steadily, and within a few years, Bitcoin has magnificently succeeded in
                proving its value and power in the marketplace with its unstoppable demand and worth.
              </p>
              <p className="Outfit font-[300]  leading-[120%] text-[2.4rem] text-[#ffffff]  ">
                Even though Bitcoin has immensely thrived in the past, countless individuals consistently believe it as
                a joke. As there were deceitful happenings in the beginning, the stakeholders and probable investors
                were unconvinced about putting in the capital in cryptocurrency.
              </p>
              <p className="Outfit font-[300]  leading-[120%] text-[2.4rem] text-[#ffffff]  ">
                Utilizing our stakeholders of Bitcoin, we have established a level for our clienteles and grew their
                faith. Our task is to demonstrate crypto project as a harmless investment choice that has projected
                forward comprehensively.
              </p>
              <p className="Outfit font-[300]  leading-[120%] text-[2.4rem] text-[#ffffff]  ">
                We offer extensive and cool designs and would like to request a quotation form that help us better
                understand your needs and requirements.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col mx-auto">
          <h2 className="clash font-[600] max-w-[124rem] text-center text-[#E8C37E] text-[7rem] max-[400px]:text-[5rem] leading-[100%]">
            Development of Crypto with Cool Design
          </h2>
          <div className="grid grid-cols-3  gap-[1rem] items-center justify-center max-[1000px]:grid-cols-2 max-[500px]:grid-cols-1">
            <Card3
              image={Cs1}
              title="Custom dApp Development"
              para="We build scalable and secure enterprise-grade dApps run on top of distributed computing systems that can rule out intermediaries and keep you ahead of your competition."
            />
            <Card3
              image={Cs2}
              title="Smart Contracts"
              para="Custom smart contract development with a wide range of blockchain standards, including ERC, TRON, EOS, Hyperledger, NEM, Tezos, Cardano, Bitcoin, and more. "
            />
            <Card3
              image={Cs3}
              title="Crypto Asset Exchange"
              para="Develop tamper-proof crypto asset exchanges with the assistance of our team. We ensure that your exchange is enabled with real-time digital currencies securely and efficiently."
            />
            <Card3
              image={Cs4}
              title="Crypto Token Development"
              para="We offer blockchain services to develop crypto tokens or token issuance platforms via ICO, IEO, STO, and IDO across blockchain platforms or custom blockchain networks."
            />
            <Card3
              image={Cs5}
              title="Wallets & Apps"
              para="We have successfully delivered 30+ crypto wallets and assets vault apps to blockchain startups worldwide. Built-in with advanced security features, including biometric authentications."
            />
            <Card3
              image={Cs6}
              title="Metaverse Development"
              para="Have a metaverse solution idea in your mind? Need help building metaverse solutions? Talk to our experts to see how we can help your firm figure out your metaverse priorities."
            />
            <Card3
              image={Cs7}
              title="NFT Development"
              para="Want to build NFTs, or are you thinking of launching an NFT marketplace? We have got you covered We have proven expertise in NFT development in ERC, EOS, Cardano, and more."
            />
            <Card3
              image={Cs8}
              title="DeFi Development"
              para="Need support to develop your DeFi or Decentralized Finance projects? Let is work together. We have delivered several DeFi products for our customers from around the world."
            />
            <Card3
              image={Cs9}
              title="Industry Specific Solutions"
              para="Need a custom blockchain app or a blockchain protocol to meet the specific needs of your industry? We can help you with that. Reach out to us for a no-obligation tech consultation."
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Services
