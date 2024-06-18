'use client'

import React, { useState } from 'react';
import EWHeader from '../../../components/EWHeader';
import EWFooter from '../../../components/EWFooter';

const BudgetOverviewPage: React.FC = () => {
  interface Budget {
    amount: number
    left: number
  }
  
  const budget: Budget = {
    amount: 2500000,
    left: 1500900,
  }
  
  const expenses: { name: string; amount: number }[] = [
    { name: 'Food & Catering', amount: -50000 },
    { name: 'Venue: Church', amount: -200000 },
    { name: 'Reception', amount: -200000 },
    { name: 'Photography', amount: -200000 },
    { name: 'Other Amenities', amount: -200000 },
  ]

  return (
    <div className='bg-customColor_black'>
      <EWHeader/>

      {/* Page Name */}
      <section className="relative bg-customColor_black h-24">
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <h1 className="text-customColor_yellow text-4xl">Budget Overview</h1>
        </div>
      </section>
      
      {/* Balance */}
      <div className='h-full'>
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex items-left justify-left h-full grid grid-rows-2'>
          <div><h1 className='text-customColor_white text-2xl font-bold'>CURRENT BALANCE:</h1></div>
          <div><p className='text-customColor_yellow text-xl font-bold'>*********</p></div>
        </div>       
      </div>

      <hr className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 my-4 border-customColor_white sm:mx-auto dark:border-gray-700 lg:my-8"/>

      {/* Add to Budget */}
      <div className='h-custom-40 pt-2 pb-2'>
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex items-center justify-center h-full grid grid-rows-1'>
          <div className="relative bg-cover bg-center bg-[url('/images/piggybank.png')] h-full w-full"></div>
          <div><h1 className='text-customColor_white text-2xl pt-1 text-center font-bold'>Add to your Budget</h1></div>
          <div><h1 className='text-customColor_yellow text-4xl pt-1 text-center font-bold'>₱ 20,000.00</h1></div>
        </div>
      </div>

      {/* Labels */}
      <div className='h-full pt-2 pb-2'>
        <div className='bg-gray-700 rounded-full mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex items-center justify-center h-full grid grid-cols-3'>
          <div><h1 className='pt-2 pb-2 text-customColor_white text-2xl text-center font-bold'>OVERVIEW</h1></div>
          <div><h1 className='text-customColor_white text-2xl text-center font-bold'>BUDGET</h1></div>
          <div><h1 className='text-customColor_yellow text-2xl text-center font-bold'>TRANSACTIONS</h1></div>
        </div>
      </div>

      <hr className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 my-4 border-customColor_white sm:mx-auto dark:border-gray-700 lg:my-8"/>

      {/* Overview and Transactions */}
      <div className='h-custom-70'>
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex items-center justify-between h-full grid grid-cols-3'>
          <div><h1 className='text-customColor_white text-xl text-center font-bold'>Function Hall 1</h1></div>
          <div><h1 className='text-customColor_white text-xl text-center font-bold'>10.03.26</h1><p className='text-customColor_white text-lh text-center'>8:00 AM</p></div>
          <div><h1 className='text-customColor_yellow text-xl text-center font-bold'>₱ 10,000.00</h1></div>

          <div><h1 className='text-customColor_white text-xl text-center font-bold'>Catering</h1></div>
          <div><h1 className='text-customColor_white text-xl text-center font-bold'>10.03.26</h1><p className='text-customColor_white text-lh text-center'>8:00 AM</p></div>
          <div><h1 className='text-customColor_yellow text-xl text-center font-bold'>₱ 5,000.00</h1></div>

          <div><h1 className='text-customColor_white text-xl text-center font-bold'>########</h1></div>
          <div><h1 className='text-customColor_white text-xl text-center font-bold'>10.03.26</h1><p className='text-customColor_white text-lh text-center'>8:00 AM</p></div>
          <div><h1 className='text-customColor_yellow text-xl text-center font-bold'>₱ 2,000.00</h1></div>

          <div><h1 className='text-customColor_white text-xl text-center font-bold'>########</h1></div>
          <div><h1 className='text-customColor_white text-xl text-center font-bold'>10.03.26</h1><p className='text-customColor_white text-lh text-center'>8:00 AM</p></div>
          <div><h1 className='text-customColor_yellow text-xl text-center font-bold'>₱ 2,000.00</h1></div>
        </div>
      </div>

      <hr className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 my-4 border-customColor_white sm:mx-auto dark:border-gray-700 lg:my-8"/>

      {/* Button */}
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex items-center justify-center h-full'>
        <div className="flex items-center justify-center h-full">
          <div className='grid grid-cols-2'>
            <a href='/budget' className='flex items-center justify-center'>
              <button className="text-2xl items-center justify-center bg-customColor_yellow hover:bg-customColor_black hover:text-customColor_white text-customColor_black hover:border-customColor_white border-4 border-customColor_black font-bold py-4 px-8 rounded-full mb-4">
                Go Back
              </button>
            </a>

            <a href='/services' className='flex items-center justify-center'>
            <button className="text-2xl items-center justify-center bg-customColor_yellow hover:bg-customColor_black hover:text-customColor_white text-customColor_black hover:border-customColor_white border-4 border-customColor_black font-bold py-4 px-8 rounded-full mb-4">
              Services
            </button>
          </a>
          </div>
        </div>
      </div>

      <section className="bg-customColor_black h-custom-30"></section>

      <EWFooter/>
    </div>
  );
};

export default BudgetOverviewPage;
