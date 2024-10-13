import React from 'react'

function Testimonial() {
  return (
    <>
    <div className='w-full  '>
        <h1 className='bg-[#19575B] p-4 w-full text-center text-white text-2xl shadow-2xl shadow-[#bbf5f9]'>Why Attend This Webinar?</h1>
    </div>
    <div>
        <h1 className='text-4xl mx-10 my-20 font-bold text-center font-sans text-[#19575B]'>This webinar is perfect for those who are mental health professionals, budding psychologists, and for people who wish to learn more about Suicide and how as a community we can work on it..</h1>
    </div>
    <div className=' w-full h-auto flex justify-evenly '>
        <div className=' rounded-xl bg-[#19575B] shadow-2xl shadow-[#bbf5f9] w-[22%] h-96'></div>
        <div className=' rounded-xl bg-[#19575B] shadow-2xl shadow-[#bbf5f9] w-[22%] h-96'></div>
        <div className=' rounded-xl bg-[#19575B] shadow-2xl shadow-[#bbf5f9] w-[22%] h-96'></div>
        <div className=' rounded-xl bg-[#19575B] shadow-2xl shadow-[#bbf5f9] w-[22%] h-96'></div>
    </div>
    <div className=' flex flex-col items-center mb-20'>
        <h1 className='text-4xl mx-10 mt-20 mb-10 font-bold text-center font-sans text-[#19575B]'>Join us to understand how social media impacts the appearance of suicide and gain insights to support meaningful discussions and support in your community.</h1>
        <button className='bg-[#19575B] rounded-full h-12 text-lg font-medium  w-64 shadow-2xl shadow-[#19575B] text-white text-center '>Join Us Now</button>
    </div>
    </>
  )
}

export default Testimonial