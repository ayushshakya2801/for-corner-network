import React from 'react';

function Testimonial() {
  return (
    <>
      {/* Header Section */}
      <div className="w-full">
        <h1 className="bg-[#19575B] p-4 w-full text-center text-white text-xl sm:text-2xl shadow-2xl shadow-[#bbf5f9]">
          Why Attend This Webinar?
        </h1>
      </div>

      {/* Main Title Section */}
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl mx-6 sm:mx-8 my-6 sm:my-10 font-bold text-center font-sans text-[#19575B]">
          This webinar is perfect for mental health professionals, budding psychologists, and people who wish to learn more about suicide and how as a community we can work on it.
        </h1>
      </div>

      {/* Content Boxes */}
      <div className="w-full h-auto flex flex-col sm:flex-row flex-wrap items-center justify-evenly text-white pt-3 pb-3">
        {/* Box 1 */}
        <div className="rounded-xl bg-[#19575B] shadow-2xl shadow-[#bbf5f9] w-[90%] sm:w-[45%] md:w-[22%] h-[250px] md:h-[350px] mb-6 sm:mb-0">
          <div className="justify-center flex">
            <img className="h-[120px] p-4" src="./images/Logo/thought.png" alt="" />
          </div>
          <div>
            <h1 className="text-[20px] sm:text-[25px] font-bold text-center">Understand Suicidal Ideation</h1>
            <p className="text-center text-[14px] sm:text-[16px] px-4">
              Discover the true meaning and debunk common myths surrounding mental health, breaking down misconceptions and stigmas.
            </p>
          </div>
        </div>

        {/* Box 2 */}
        <div className="rounded-xl bg-[#19575B] shadow-2xl shadow-[#bbf5f9] w-[90%] sm:w-[45%] md:w-[22%] h-[250px] md:h-[350px] mb-6 sm:mb-0">
          <div className="justify-center flex">
            <img className="h-[120px] p-4" src="./images/Logo/search.png" alt="" />
          </div>
          <div>
            <h1 className="text-[20px] sm:text-[25px] font-bold text-center">Etiology and Prevalence Rate</h1>
            <p className="text-center text-[14px] sm:text-[16px] px-4">
              Explore factors behind suicidal thoughts, key demographic statistics, and the impact of social media on mental health.
            </p>
          </div>
        </div>

        {/* Box 3 */}
        <div className="rounded-xl bg-[#19575B] shadow-2xl shadow-[#bbf5f9] w-[90%] sm:w-[45%] md:w-[22%] h-[250px] md:h-[350px] mb-6 sm:mb-0">
          <div className="justify-center flex">
            <img className="h-[120px] p-4" src="./images/Logo/new.png" alt="" />
          </div>
          <div>
            <h1 className="text-[20px] sm:text-[25px] font-bold text-center">Shift the Narrative</h1>
            <p className="text-center text-[14px] sm:text-[16px] px-4">
              Learn from successful campaigns that change the conversation around suicide.
            </p>
          </div>
        </div>

        {/* Box 4 */}
        <div className="rounded-xl bg-[#19575B] shadow-2xl shadow-[#bbf5f9] w-[90%] sm:w-[45%] md:w-[22%] h-[250px] md:h-[350px] ">
          <div className="justify-center flex">
            <img className="h-[120px] p-4" src="./images/Logo/mental-health.png" alt="" />
          </div>
          <div>
            <h1 className="text-[20px] sm:text-[25px] font-bold text-center">Promote Mental Well-Being</h1>
            <p className="text-center text-[14px] sm:text-[16px] px-4">
              Get actionable tips for responsible social media use and improve mental well-being.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="flex flex-col items-center mb-12 px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl mx-6 sm:mx-10 mt-4 md:mt-10 mb-10 font-bold text-center font-sans text-[#19575B]">
          Join us to understand how social media impacts suicide and gain insights to support meaningful discussions in your community.
        </h1>
        <button className="bg-[#19575B] rounded-full h-12 text-base sm:text-lg font-medium w-48 sm:w-64 shadow-2xl shadow-[#19575B] text-white text-center">
          Join Us Now
        </button>
      </div>
    </>
  );
}

export default Testimonial;
