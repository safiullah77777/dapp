import React from 'react'

function Iframe() {
  return (
    <>
     
       <iframe width="90%" height="550px" className='p-5 my-[30px] rounded-[35px] mx-auto' 
       src="https://www.youtube.com/embed/qHcXkb7NDno" 
       title="YouTube video player" 
       frameBorder="0" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen >

        </iframe>

      
    </>
  )
}

export default Iframe;