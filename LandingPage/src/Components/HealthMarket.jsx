import React from 'react';
import DeathChart from './DeathChart';

function HealthMarket() {
  return (
    <>
      <div className='flex flex-col md:flex-row h-auto w-full p-6 md:p-10 lg:p-2 gap-6 md:gap-2'>
        
        {/* Left Column */}
        <div className='h-auto w-full md:w-1/2  p-4'>
          <h1 className='text-3xl md:text-4xl font-bold text-start font-sans text-[#19575B] pb-4'>Indian Health Market</h1>
          <ul className='list-disc pl-5'>
            <li className='text-[#19575B] text-lg md:text-xl font-medium'>Valued at $6.89B in 2023, projected to reach $62.86B by 2032 (CAGR: 28.16%).</li>
            <li className='text-[#19575B] text-lg md:text-xl font-medium'>1 in 7 Indians (~197M) face mental health issues, with 45M affected by depression and 44M by anxiety.</li>
          </ul>

          <h1 className='text-3xl md:text-4xl font-bold text-start font-sans text-[#19575B] pt-6'>Key Insights</h1>
          <ul className='list-disc pl-5'>
            <li className='text-[#19575B] text-lg md:text-xl font-medium pt-2'>Suicide rate: 16.5 per 100,000.</li>
            <li className='text-[#19575B] text-lg md:text-xl font-medium pt-2'>By 2028: Focus on emergency services, outpatient counseling, and home-based care.</li>
          </ul>
        </div>

        {/* Right Column */}
        <div className='h-auto w-full md:w-1/2  p-4'>
         <DeathChart/>
        </div>
      </div>
    </>
  );
}

export default HealthMarket;
