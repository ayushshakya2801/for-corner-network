import React from 'react'

function InfoContent() {
  return (
    <div className='h-auto w-full flex  '>
        <div className='h-[90%] w-1/2 flex flex-col pt-20 pl-28'>
        <h1 className='text-5xl mt-10 mb-10 w-[90%] font-bold text-start font-sans text-[#19575B]'>Are you ready to explore your creative potential in mental health?</h1>
        <p className='font-medium text-lg text-start mb-12'>Join us for an inspiring webinar where you’ll discover proven techniques and evidence-based strategies. This is your chance to improve your skills and make a real impact in this study.  Don’t miss out on this opportunity to grow and develop on your mental health journey.</p>
        <button className='bg-[#19575B] rounded-full h-12 text-lg font-medium  w-64 shadow-2xl shadow-[#19575B] text-white text-center '>Join Us Now</button>
        <div className='w-full border-b-[1px] border-gray-400 my-16'></div>
        </div>
        <div className='h-full w-1/2 flex justify-center items-end'>
            <img className='h-[85%] object-contain' src="./images/hero-img.png" alt="" />
        </div>
    </div>
  )
}

export default InfoContent