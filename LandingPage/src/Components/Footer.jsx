import React from 'react'

function Footer() {
  return (
    <div className='h-44 bg-[#19575B] w-full flex flex-col justify-center gap-4'>
       
        <div className='flex justify-center gap-4'>
            <a href="https://www.instagram.com/fourcornernetwork/" target='_blank' rel='noopener noreferrer' >
            <img className='h-8 object-contain' src=".\images\instagram.png" alt="" />
            </a>
            <a href="https://youtube.com/@fourcornernetwork?si=NxLLVSOKx2YOBx_1" target='_blank' rel='noopener noreferrer' >
            <img className='h-8 object-contain' src=".\images\youtube.png" alt="" />
            </a>
        </div>
        <div className='text-white flex justify-center'>
            <h1 className='text-center border-r-[1px] pr-5'>Copyright © 2024 Four Corner Network</h1>
            <h1 className='text-center pl-5'>Powered by Four Corner Network</h1>
        </div>
    </div>
  )
}

export default Footer