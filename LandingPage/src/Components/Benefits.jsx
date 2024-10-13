import React from 'react'

function Benefits() {
  return (
    <>
    <div className='w-full  '>
        <h1 className='bg-[#19575B] p-4 w-full text-center text-white text-2xl shadow-2xl shadow-[#bbf5f9]'>Webinar Benefits</h1>
    </div>
    <div>
        <h1 className='text-4xl mx-10 my-20 font-bold text-center font-sans text-[#19575B]'>What you will get after attending webinar</h1>
    </div>
    <div className=' w-full h-auto flex flex-wrap justify-around gap-4 px-10'>
        
        <div className=' rounded-xl bg-[#19575B] shadow-2xl shadow-[#bbf5f9] w-[45%] h-52'>1</div>
        <div className=' rounded-xl bg-[#19575B] shadow-2xl shadow-[#bbf5f9] w-[45%] h-52'>2</div>
        <div className=' rounded-xl bg-[#19575B] shadow-2xl shadow-[#bbf5f9] w-[45%] h-52'>3</div>
        <div className=' rounded-xl bg-[#19575B] shadow-2xl shadow-[#bbf5f9] w-[45%] h-52'>4</div>
        
        
    </div>
    <div className=' flex flex-col items-center my-20'>
        <button className='bg-[#19575B] rounded-full h-12 text-lg font-medium  w-64 shadow-2xl shadow-[#19575B] text-white text-center '>Join Us Now</button>
    </div>
    </>
  )
}

export default Benefits