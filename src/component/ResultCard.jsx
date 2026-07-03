import React from 'react'

export const ResultCard = ({item}) => {
  return (
    <div className=' relative not-only-of-type:w-[18vw] h-80 bg-white rounded'>
        <div className='h-[70%]'>{item.type=='photo'?<img className='h h-full object-cover object-center w-full' src={item.src} alt="" />:''}
          {item.type=='video'?<video  className='h h-full object-cover object-center w-full'   autoPlay loop muted src={item.src}></video>:''}
       </div>
       <div id='bottom' className='text-white px-6 py-10 h-36 w w-full absolute bottom-0'> 
        <h1 className='text-xl font-semibold capitalize'> {item.title}</h1>
    </div></div>
       
  )
}
