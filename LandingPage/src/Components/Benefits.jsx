import React from 'react';

function Benefits() {
  return (
    <>
      {/* Header Section */}
      <div className="w-full">
        <h1 className="bg-[#19575B] p-4 w-full text-center text-white text-xl sm:text-2xl shadow-2xl shadow-[#bbf5f9]">
          Webinar Benefits
        </h1>
      </div>

      {/* Title Section */}
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl my-8 sm:my-12 font-bold text-center font-sans text-[#19575B]">
          What you will get after attending webinar
        </h1>
      </div>

      {/* Benefit Boxes Section */}
      <div className="w-full h-auto flex flex-col sm:flex-row flex-wrap text-white justify-around gap-6 px-4 sm:px-10">

        {/* Benefit 1 */}
        <div className="rounded-xl bg-[#19575B] flex shadow-2xl shadow-[#bbf5f9] w-full sm:w-[42%] h-auto p-4">
          <div className="w-[100px] sm:w-[150px] items-center justify-center flex">
            <img className="h-20 sm:h-28" src="./images/knowledge.png" alt="Knowledge" />
          </div>
          <div className="items-center flex justify-center text-center">
            <div>
              <h1 className="text-lg sm:text-2xl font-medium">Understand Complexities</h1>
              <p className="text-sm sm:text-base">Explore the relationship between suicide and social media.</p>
            </div>
          </div>
        </div>

      {/* Benefit 2 */}
         <div className="rounded-xl bg-[#19575B] flex shadow-2xl shadow-[#bbf5f9] w-full sm:w-[42%] h-auto p-4">
          <div className="items-center flex justify-center text-center">
            <div>
              <h1 className="text-lg sm:text-2xl font-medium">Gain Skills</h1>
              <p className="text-sm sm:text-base">Learn how to support individuals in distress with empathy and understanding.</p>
            </div>
          </div>
          <div className="w-[100px] sm:w-[150px] items-center justify-center flex">
            <img className="h-20 sm:h-28" src="./images/skill.png" alt="Resources" />
          </div>
        </div>

        {/* Benefit 3 */}
        <div className="rounded-xl bg-[#19575B] flex shadow-2xl shadow-[#bbf5f9] w-full sm:w-[42%] h-auto p-4">
          <div className="w-[100px] sm:w-[150px] items-center justify-center flex">
            <img className="h-20 sm:h-28" src="./images/public.png" alt="Community Engagement" />
          </div>
          <div className="items-center flex justify-center text-center">
            <div>
              <h1 className="text-lg sm:text-2xl font-medium">Engage with Community</h1>
              <p className="text-sm sm:text-base">Join important discussions on awareness and prevention.</p>
            </div>
          </div>
        </div>

        {/* Benefit 4 */}
        <div className="rounded-xl bg-[#19575B] flex shadow-2xl shadow-[#bbf5f9] w-full sm:w-[42%] h-auto p-4">
          <div className="items-center flex justify-center text-center">
            <div>
              <h1 className="text-lg sm:text-2xl font-medium">Access Resources</h1>
              <p className="text-sm sm:text-base">Obtain valuable support and educational materials.</p>
            </div>
          </div>
          <div className="w-[100px] sm:w-[150px] items-center justify-center flex">
            <img className="h-20 sm:h-28" src="./images/idea.png" alt="Resources" />
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="flex flex-col items-center my-12 sm:my-20 px-4">
        <button className="bg-[#19575B] rounded-full h-10 sm:h-12 text-base sm:text-lg font-medium w-48 sm:w-64 shadow-2xl shadow-[#19575B] text-white text-center">
          Join Us Now
        </button>
      </div>
    </>
  );
}

export default Benefits;
