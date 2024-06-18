'use client'

import React, { useState } from 'react';
import EWHeader from '../../../components/EWHeader';
import EWFooter from '../../../components/EWFooter';

const BudgetPage: React.FC = () => {
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
    <div>
      <EWHeader/>

      {/* Page Name */}
      <section className="relative bg-customColor_black h-24">
        <div className="grid grid-cols-2 gap-4 items-center justify-center h-full bg-black bg-opacity-50">
          <div>
            <h1 className="flex items-center justify-center text-customColor_yellow text-4xl">Budget</h1>
          </div>
          
          <div>
            <a href='/budget_overview' className='flex items-center justify-center'>
              <button className="text-xl items-center justify-center bg-customColor_white hover:bg-customColor_black hover:text-customColor_white text-customColor_black border-4 border-customColor_black hover:border-customColor_white font-bold py-2 px-4 rounded-full">
                See Budget Overview
              </button>
            </a>
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      {/* Budget Name */}
      <section className="bg-customColor_black h-custom-45">
        <div className="flex items-center justify-center h-full">
          <div className="bg-customColor_yellow p-10 rounded-md shadow-md w-5/6">
            <div className='block items-center justify-center'>
              <h1 className="flex items-center justify-center text-2xl font-bold mb-2">Wedding Budget</h1>

              <hr className="my-6 border-customColor_black sm:mx-auto dark:border-gray-700 lg:my-8"/>

              <p className="flex items-center justify-center text-xl mb-4">₱{budget.left.toLocaleString()}</p>
              <p className="flex items-center justify-center text-customColor_black mb-8">Left out of ₱{budget.amount.toLocaleString()}</p>
              
              <a href='#' className='flex items-center justify-center'>
                <button className="text-xl items-center justify-center bg-customColor_yellow hover:bg-customColor_black hover:text-customColor_white text-customColor_black border-4 border-customColor_black font-bold py-2 px-4 rounded-full mb-4">
                  Create New Budget
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Expenses */}
      <section className="bg-customColor_black h-custom-45">
        <div className="flex items-center justify-center h-full">
          <div className="bg-gray-700 p-10 rounded-md shadow-md w-5/6 text-customColor_white">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Expenses</h2>
              <a href="#" className="hover:underline">
                View All
              </a>
            </div>

            <hr className="my-6 border-customColor_white sm:mx-auto dark:border-gray-700 lg:my-8"/>

            <ul className="space-y-2">
              <div className='columns-2 justify-items-center text-customColor_yellow text-xl text-center'>
              {expenses.map((expense) => (
                <li key={expense.name} className='pb-1'>
                  {expense.name}
                </li>
              ))}
              {expenses.map((expense) => (
                <li key={expense.name} className='pb-1'>
                  ₱ {expense.amount.toLocaleString()}
                </li>
              ))}
              </div>
            </ul>
          </div>
        </div>
      </section>

      {/* Status Overview */}
      <section className="bg-customColor_black h-custom-40">
        <div className="flex items-center justify-center h-full">
          <div className="bg-gray-700 p-10 rounded-md shadow-md w-5/6 text-customColor_white">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Status Overview</h2>
            <a href="#" className="hover:underline">
              View All
            </a>
            </div>

            <hr className="my-6 border-customColor_white sm:mx-auto dark:border-gray-700 lg:my-8"/>

            <ul className="space-y-2">
              <div className='columns-2 justify-items-center text-customColor_yellow text-xl text-center'>
              {expenses.slice(0, 2).map((expense) => (
                <li key={expense.name} className="pb-1">
                  {expense.name}
                </li>
              ))}
              {expenses.slice(0, 2).map((expense) => (
                <li key={expense.name} className="pb-1">
                  Scheduled (3,000 pax)
                </li>
              ))}
              </div>
            </ul>

            <a href='#' className='flex items-center justify-center pt-10'>
              <button className="text-xl items-center justify-center bg-customColor_yellow hover:bg-customColor_black hover:text-customColor_white text-customColor_black border-4 border-customColor_black font-bold py-2 px-4 rounded-full">
                Submit
              </button>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-customColor_black h-custom-30"></section>

      <EWFooter/>
    </div>
  );
};

export default BudgetPage;
