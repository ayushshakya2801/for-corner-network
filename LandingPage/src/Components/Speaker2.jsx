import React from 'react'

function Speaker2() {
  return (
    <>
    <div className='bg-[#19575B] pt-10 flex justify-center'>
    <h1 className='text-4xl  font-bold text-center font-sans  text-[#ffffff]  '>About Our Founders</h1>
    </div>
       <div className="flex pt-6  items-center justify-center bg-[#19575B] ">
  <div className="grid grid-cols-2 gap-2 md:grid-cols-2 lg:grid-cols-4 p-2">
    <div className="group relative cursor-pointer rounded-xl items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div className="h-96 sm:w-72 w-auto">
        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="./Images/Rakesh.jpeg" alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        
        <p className="mb-3 sm:text-lg text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"><b>Rakesh dubey</b><br />SAGACIA Financial Inclusion Fund</p>
      
      </div>
    </div>
    <div className="group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div className="h-96 sm:w-72 w-auto">
        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="./Images/VidyaSagar.jpeg" alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">    
        <p className="mb-3 sm:text-lg text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"> <b>Vidyasagar Chaudhary</b><hr className='border-none'/>Head-Cloud Security Improvement<br /></p>
       </div>
    </div>
    <div className="group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div className="h-96 sm:w-72 w-auto">
        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="./Images/Nilotpal.jpeg" alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <p className="mb-3 sm:text-lg text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"><b>Nilotpal Pathak</b><br />Managing Partner, I-Farm Venture Advisors Private Limited</p>
        
      </div>
    </div>
    <div className="group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div className=" h-96  sm:w-72 ">
        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="./Images/SourabhDubey.jpeg" alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        
        <p className=" text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"> <b>Saurabh Dubey</b><br /> SAP <br />(Senior Software Engineer)<br />Technical Advisor</p>
          
      </div>
    </div>
  </div>
  
</div> 
<div>
<div className='h-auto w-full bg-[#19575B] flex justify-center py-10'>
       <h1 className='text-[rgb(255,255,255)] text-center text-xl font-medium w-[80%]'>
       Four Corner Network was founded by four clinical psychologists—Lipika Malik, Debolina Roy, Dimple Panchal, and Sreeta Nair—who came together to bridge the gap in reachable, trustworthy mental health education. Inspired by our diverse backgrounds from different corners of India, we’re committed to offering inclusive, reliable learning that goes beyond traditional education. At Four Corner Network, we aim to foster diversity and accessibility in mental health education for all.
       </h1>
        
    </div>
</div>
    </>
  )
}

export default Speaker2