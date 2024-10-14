import React from 'react';

function InfoContent() {
  return (
    <div className="w-full h-auto flex flex-col lg:flex-row pt-6">
      {/* Left Section: Text Content */}
      <div className="w-full lg:w-1/2 flex flex-col px-6 lg:pl-28">
        <h1 className="text-3xl md:text-4xl lg:text-5xl mt-6 lg:mt-10 mb-6 lg:mb-10 font-bold text-start font-sans text-[#19575B]">
          Are you ready to explore your creative potential in mental health?
        </h1>
        <p className="font-medium text-base md:text-lg text-start mb-6 lg:mb-12">
          Join us for an inspiring webinar where you’ll discover proven techniques and evidence-based strategies. This is your chance to improve your skills and make a real impact in this study. Don’t miss out on this opportunity to grow and develop on your mental health journey.
        </p>
        <button className="bg-[#19575B] rounded-full h-12 text-base md:text-lg font-medium w-48 md:w-64 shadow-2xl shadow-[#19575B] text-white text-center mb-6 lg:mb-0 ml-28 lg:ml-0">
          Join Us Now
        </button>
        <div className="w-full border-b-[1px] border-gray-400 my-0  lg:my-16"></div>
      </div>

      {/* Right Section: Image */}
      <div className="w-full lg:w-1/2 flex justify-center items-center  lg:items-end mt-0 lg:mt-0">
        <img
          className="h-[300px] md:h-[400px] lg:h-[520px] w-auto rounded-md object-contain m-4 md:m-14 "
          src="./images/home.webp"
          alt="Mental Health Webinar"
        />
      </div>
    </div>
  );
}

export default InfoContent;
