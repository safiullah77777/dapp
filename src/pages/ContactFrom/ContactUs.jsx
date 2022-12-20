import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { addLink, addPdf, getLinks } from '../../services/formService'
import Card from 'components/Card/Card'
// import Card4 from 'components/Card4/Card4'
// import youtube from "../../../public/assets/icons/youtube.svg"
// require('dotenv').config()
function ContactUs() {
  const inputRef = useRef(null)
  const [youtubeLink, setYoutubeLink] = useState(true)
  const [loading, setLoading] = useState(false)
  const [loading1, setLoading1] = useState(false)
  const [login, setLogin] = useState(false)
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  })
  const [pdfs, setPdfs] = useState([])
  useEffect(() => {
    setLoading1(true)
    console.log("dtaa===>")
    getLinks(setLoading1, setPdfs)
  }, [])
  const youtubeBox = (items) => {
    setYoutubeLink(items)
  }
  const [data, setData] = useState({
    title: '',
    url: '',
    pdf: {},
  })
  const Login = (e) => {
    e.preventDefault()
    if (
      credentials.username !== process.env.REACT_APP_USER_NAME ||
      credentials.password !== process.env.REACT_APP_PASSWORD
    ) {
      alert('invalid credentials')
      return
    }
    setLogin(true)
  }
  const onsubmit = (e) => {
    e.preventDefault()
    if (loading) return
    setLoading(true)
    if (youtubeLink)
      addLink({
        title: data.title,
        url: data.url,
        linkType: 'youtube',
        setLoading,
      })
    else {
      addPdf({
        pdf: data.pdf,
        linkType: 'comic',
        setLoading,
      })
      inputRef.current.value = ''
    }

    setData({
      title: '',
      url: '',
    })
  }
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-[100vh] justify-center">
        <h1 className={`text-[5.5rem] text-[#FFFFFF] text-center font-[600] leading-[120%] mb-[3rem]`}>
          {login ? 'What you want to upload?' : 'Login'}
        </h1>
        {!login && (
          <form action="#" className="gap-[1rem] flex flex-col items-center ">
            <input
              type="text"
              className="min-[650px]:w-[50rem] max-[650px]:max-w-[45rem]  outline-none h-[48px] bg-[#FFFFFF] text-[#AEAEAE] text-[18px] leading-[28px] font-[400] border-1 border-solid border-[#E2E1E5] rounded-[5px] py-[10px] px-[15px]"
              placeholder="username"
              name="username"
              value={credentials.username}
              onChange={(e) =>
                setCredentials((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
            <input
              type="password"
              className="min-[650px]:w-[50rem] max-[650px]:max-w-[45rem] h-[48px] outline-none bg-[#FFFFFF] text-[#AEAEAE] text-[18px] leading-[28px] font-[400] border-1 border-solid border-[#E2E1E5] rounded-[5px] py-[10px] px-[15px]"
              placeholder="passwrod"
              name="password"
              value={credentials.password}
              onChange={(e) =>
                setCredentials((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
            <button
              className={`min-[650px]:w-[50rem] max-[650px]:max-w-[45rem] h-[48px]  text-[#FFFFFF] text-[18px] leading-[28px] font-[700]  rounded-[5px] `}
              onClick={Login}
            >
              {loading ? 'Loading....' : 'Submit'}
            </button>
          </form>
        )}

        {login && (
          <div className=" w-full  flex flex-col gap-[3rem]  justify-around items-center py-1 ">
            <div className="flex flex-wrap justify-center items-center gap-[10px] ">
              <button
                className={`flex justify-center gap-[1rem] items-center w-[250px] h-[80px] ${youtubeLink ? 'bg-[#F41E1E]' : 'bg-[#707070]'
                  } rounded-[15px] text-[#FFFFFF] text-[25px] leading-[28px]`}
                onClick={() => {
                  setData({
                    title: '',
                    url: '',
                    pdf: {},
                  })
                  youtubeBox(true)
                }}
              >
                {/* <img alt="" src={youtube} />  */}
                <svg width="66" height="52" viewBox="0 0 66 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M43.5219 24.0633L29.6469 14.8133C29.2957 14.5901 28.8926 14.4622 28.477 14.4419C28.0615 14.4216 27.6478 14.5098 27.2766 14.6977C26.9069 14.8972 26.5985 15.1937 26.3846 15.5553C26.1707 15.9169 26.0593 16.3299 26.0625 16.75V35.25C26.0593 35.6701 26.1707 36.0831 26.3846 36.4447C26.5985 36.8063 26.9069 37.1028 27.2766 37.3023C27.6176 37.4731 27.9936 37.5622 28.375 37.5625C28.8256 37.5577 29.266 37.4276 29.6469 37.1867L43.5219 27.9367C43.844 27.7266 44.1085 27.4394 44.2917 27.1012C44.4748 26.7631 44.5707 26.3846 44.5707 26C44.5707 25.6154 44.4748 25.2369 44.2917 24.8987C44.1085 24.5606 43.844 24.2734 43.5219 24.0633ZM30.6875 30.943V21.057L38.0875 26L30.6875 30.943ZM63.7273 9.17656C63.4617 8.11086 62.9415 7.12547 62.2115 6.30485C61.4815 5.48423 60.5634 4.85286 59.5359 4.46484C49.65 0.649215 33.8672 0.678122 33 0.678122C32.1328 0.678122 16.35 0.649215 6.46406 4.46484C5.43656 4.85286 4.51847 5.48423 3.78847 6.30485C3.05847 7.12547 2.53834 8.11086 2.27266 9.17656C1.52109 12.0383 0.625 17.2992 0.625 26C0.625 34.7008 1.52109 39.9617 2.27266 42.8234C2.53834 43.8891 3.05847 44.8745 3.78847 45.6951C4.51847 46.5158 5.43656 47.1471 6.46406 47.5352C15.9453 51.2062 30.8031 51.3219 32.7977 51.3219H33.2023C35.1969 51.3219 50.0547 51.2062 59.5359 47.5352C60.5634 47.1471 61.4815 46.5158 62.2115 45.6951C62.9415 44.8745 63.4617 43.8891 63.7273 42.8234C64.4789 39.9617 65.375 34.7008 65.375 26C65.375 17.2992 64.4789 12.0383 63.7273 9.17656ZM59.2469 41.6672C59.1615 42.0169 58.9936 42.3412 58.7572 42.6127C58.5209 42.8843 58.2229 43.0953 57.8883 43.2281C48.725 46.7547 33.1734 46.6969 33 46.6969C32.8266 46.6969 17.275 46.7547 8.11172 43.2281C7.77709 43.0953 7.47913 42.8843 7.24277 42.6127C7.0064 42.3412 6.83851 42.0169 6.75313 41.6672C6.05938 39.0367 5.25 34.2094 5.25 26C5.25 17.7906 6.05938 12.9633 6.75313 10.3328C6.83851 9.98306 7.0064 9.65884 7.24277 9.38727C7.47913 9.1157 7.77709 8.90469 8.11172 8.77187C17.275 5.24531 32.8266 5.30312 33 5.30312C33.1734 5.30312 48.725 5.24531 57.8883 8.77187C58.2229 8.90469 58.5209 9.1157 58.7572 9.38727C58.9936 9.65884 59.1615 9.98306 59.2469 10.3328C59.9406 12.9633 60.75 17.7906 60.75 26C60.75 34.2094 59.9406 39.0367 59.2469 41.6672Z"
                    fill="white"
                  />
                </svg>
                <span> Youtube</span>
              </button>
              <button
                onClick={() => {
                  setData({
                    title: '',
                    url: '',
                    pdf: {},
                  })
                  youtubeBox(false)
                }}
                className={`flex justify-center gap-[1rem] items-center w-[250px] h-[80px]  ${!youtubeLink ? 'bg-[#7E5BFF]' : 'bg-[#707070]'
                  } rounded-[15px] text-[#FFFFFF] text-[25px] leading-[28px]`}
              >
                <svg width="53" height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M34.2498 0.166672C27.249 0.166672 21.204 4.14501 18.1815 9.93167C14.8649 11.6596 12.1594 14.3651 10.4315 17.6817C7.48957 19.2103 5.02342 21.5168 3.30162 24.3501C1.57982 27.1833 0.668367 30.4346 0.666504 33.75C0.666504 43.7475 8.75234 51.8333 18.7498 51.8333C25.7507 51.8333 31.7957 47.855 34.8182 42.0683C38.1348 40.3404 40.8402 37.6349 42.5682 34.3183C45.5101 32.7897 47.9762 30.4832 49.6981 27.6499C51.4199 24.8167 52.3313 21.5654 52.3332 18.25C52.3332 8.2525 44.2473 0.166672 34.2498 0.166672ZM18.7498 46.6667C16.3519 46.6648 14.0017 45.9956 11.9624 44.7341C9.92302 43.4726 8.27494 41.6685 7.20252 39.5237C6.13011 37.3788 5.67568 34.9779 5.89008 32.5895C6.10448 30.2011 6.97925 27.9195 8.4165 26C8.4165 35.9975 16.5023 44.0833 26.4998 44.0833C24.3298 45.7108 21.6432 46.6667 18.7498 46.6667ZM26.4998 38.9167C24.1019 38.9148 21.7517 38.2456 19.7124 36.9841C17.673 35.7226 16.0249 33.9185 14.9525 31.7737C13.8801 29.6288 13.4257 27.2279 13.6401 24.8395C13.8545 22.4512 14.7292 20.1695 16.1665 18.25C16.1665 28.2217 24.2523 36.3075 34.2498 36.3333C32.0798 37.9608 29.3932 38.9167 26.4998 38.9167ZM38.6415 30.3917C37.2723 30.8825 35.7998 31.1667 34.2498 31.1667C27.1198 31.1667 21.3332 25.38 21.3332 18.25C21.3332 16.7 21.6173 15.2275 22.1082 13.8583C23.4773 13.3675 24.9498 13.0833 26.4998 13.0833C33.6298 13.0833 39.4165 18.87 39.4165 26C39.4165 27.55 39.1323 29.0225 38.6415 30.3917ZM44.5832 26C44.5832 16.0283 36.4973 7.94251 26.4998 7.91667C28.9884 6.06097 32.0619 5.16319 35.1581 5.38755C38.2543 5.6119 41.1663 6.94339 43.3614 9.13847C45.5565 11.3336 46.8879 14.2455 47.1123 17.3417C47.3366 20.4379 46.4389 23.5114 44.5832 26Z"
                    fill="white"
                  />
                </svg>
                <span> Anima</span>
              </button>
            </div>
          </div>
        )}

        {/* Youtube Container */}
        {login && (
          <div
            className={`  mt-[3rem] px-[6rem] py-[3rem]  rounded-[50px] ${youtubeLink ? 'bg-[#F41E1E33]' : 'bg-[#7E5BFF33]'
              }
        flex justify-center items-center mx-auto my-2`}
          >
            <form action="#" className="gap-[1rem] flex flex-col justify-around ">
              <div className="flex min-[650px]:w-[50rem] max-[650px]:max-w-[45rem]">
                {youtubeLink ? (
                  <input
                    type={'text'}
                    className="w-full h-[48px] outline-none bg-[#FFFFFF] text-[#AEAEAE] text-[18px] leading-[28px] font-[400] border-1 border-solid border-[#E2E1E5] rounded-[5px] py-[10px] px-[15px]"
                    placeholder="URL"
                    name={'url'}
                    value={data.url}
                    // accept="application/pdf"
                    onChange={(e) =>
                      setData((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }))
                    }
                  />
                ) : (
                  <input
                    type={'file'}
                    className="w-full h-[48px] outline-none bg-[#FFFFFF] text-[#AEAEAE] text-[18px] leading-[28px] font-[400] border-1 border-solid border-[#E2E1E5] rounded-[5px] py-[10px] px-[15px]"
                    placeholder="upload anime"
                    name={'pdf'}
                    ref={inputRef}
                    // value={data.pdf}
                    accept="application/pdf"
                    onChange={(e) =>
                      setData((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.files[0],
                      }))
                    }
                  />
                )}
              </div>
              <button
                className={`min-[650px]:w-[50rem] max-[650px]:max-w-[45rem] h-[48px]  text-[#FFFFFF] text-[18px] leading-[28px] font-[700] ${youtubeLink ? 'bg-[#F41E1E]' : 'bg-[#7E5BFF]'
                  }   rounded-[5px] `}
                onClick={(e) => onsubmit(e)}
              >
                {loading ? 'Loading....' : 'Submit'}
              </button>
            </form>
          </div>
        )}
        {login && <div className="grid gap-[2rem] grid-cols-5 px-[2rem] py-[3rem]">
          {console.log("pdfs==>", pdfs)}
          {pdfs
            .filter((data) => data.linkType === 'comic')
            .map((item, index) => {
              if (item.linkType === 'comic') {
                return (
                  <span key={index} >
                    <Card
                      // classes={"w-400px"}
                      title={item?.title} _id={item?._id} setData={setPdfs} setPdf={false} url={false} pdfId={item?.pdfId} isDelete={true}
                    />
                  </span>
                )
              }
            })}
        </div>}
        {/*Anime Container  */}
        {/* <div className="w-[612px] h-[367px] rounded-[50px] bg-[#7E5BFF33] flex justify-center items-center mx-auto my-5">
        <form action="#" className="h-[270px] flex flex-col justify-around ">
          <input type="text" className="w-[506px] h-[48px] bg-[#FFFFFF] text-[#AEAEAE] text-[18px] leading-[28px] font-[400] border-1 border-solid border-[#E2E1E5] rounded-[5px] py-[10px] px-[15px]"/>
          <input type="text" className="w-[506px] h-[48px] bg-[#FFFFFF] text-[#AEAEAE] text-[18px] leading-[28px] font-[400] border-1 border-solid border-[#E2E1E5] rounded-[5px] py-[10px] px-[15px]"/>
          <input type="text" className="w-[506px] h-[48px] bg-[#FFFFFF] text-[#AEAEAE] text-[18px] leading-[28px] font-[400] border-1 border-solid border-[#E2E1E5] rounded-[5px] py-[10px] px-[15px]"/>
          <button className="w-[506px] h-[48px]  text-[#FFFFFF] text-[18px] leading-[28px] font-[700] bg-[#7E5BFF] border-1 border-solid border-[#7E5BFF]  rounded-[5px] ">Submit</button>
        </form>
    </div> */}

        {/* Footer */}
      </div>
      <Footer />
    </>
  )
}

export default ContactUs
