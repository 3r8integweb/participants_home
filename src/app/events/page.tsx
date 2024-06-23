'use client'

import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import CardSlider from '../../../components/CardSlider';
import EWHeader from '../../../components/EWHeader';
import EWFooter from '../../../components/EWFooter';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../styles/event_style.css';
import '../../styles/swiper.css';

const EventPage: React.FC = () => {
  return (
    <div>
      <EWHeader/>

      {/* Main Content*/}
      <section className="relative bg-customColor_black h-custom-30">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex items-center justify-between h-full">
          <form className="w-1/2 max-w-md flex items-center">
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-customColor_black rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-customColor_yellow dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
              <button type="submit" className="text-customColor_black absolute end-2.5 bottom-2.5 bg-customColor_yellow hover:bg-customColor_black hover:text-customColor_white focus:ring-4 focus:outline-none focus:ring-customColor_yellow font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
          </form>

          <h1 className='text-customColor_yellow text-4xl'>FESTIVALS</h1>
        </div>
      </section>

      {/* Festivals */}
      <div className="flex-1 flex bg-customColor_black h-custom-80 items-center justify-center">
        <div className="mx-auto w-full max-w-screen-lg p-4 py-6 lg:py-8">
          <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper rounded-lg"
            >
              <SwiperSlide><img src="/images/festival_sinulog.jpg" alt="Sinulog Festival" className="w-full h-full object-cover" /></SwiperSlide>
              <SwiperSlide><img src="/images/festival_atiatihan.jpg" alt="Ati-Atihan Festival" className="w-full h-full object-cover" /></SwiperSlide>
              <SwiperSlide><img src="/images/festival_kaamulan.jpg" alt="Kaamulan Festival" className="w-full h-full object-cover" /></SwiperSlide>
              <SwiperSlide><img src="/images/festival_panagbenga.jpg" alt="Panagbenga Festival" className="w-full h-full object-cover" /></SwiperSlide>
              <SwiperSlide><img src="/images/festival_pahiyas.jpg" alt="Pahiyas Festival" className="w-full h-full object-cover" /></SwiperSlide>
              <SwiperSlide><img src="/images/festival_masskara.jpg" alt="Masskara Festival" className="w-full h-full object-cover" /></SwiperSlide>
              <SwiperSlide><img src="/images/festival_Higantes.jpg" alt="Higantes Festival" className="w-full h-full object-cover" /></SwiperSlide>
            </Swiper>
        </div>
      </div>

      {/* Cards */}
      <div className="flex-1 flex bg-customColor_black h-full items-center justify-center">
        <div className='grid grid-cols-3 gap-4 mx-auto w-full max-w-screen-lg p-4 py-6 lg:py-8'>
          <div><a href='/join_event'><CardSlider cards={[{ title: 'Sinulog Festival', description: 'Description for this event 1', image: '/images/festival_sinulog.jpg' },]}/></a></div>
          <div><a href='#'><CardSlider cards={[{ title: 'Ati-Atihan Festival', description: 'Description for this event 2', image: '/images/festival_atiatihan.jpg' },]}/></a></div>
          <div><a href='#'><CardSlider cards={[{ title: 'Kaamulan Festival', description: 'Description for this event 3', image: '/images/festival_kaamulan.jpg' },]}/></a></div>
          <div><a href='#'><CardSlider cards={[{ title: 'Panagbenga Festival', description: 'Description for this event 4', image: '/images/festival_panagbenga.jpg' },]}/></a></div>
          <div><a href='#'><CardSlider cards={[{ title: 'Pahiyas Festival', description: 'Description for this event 5', image: '/images/festival_pahiyas.jpg' },]}/></a></div>
          <div><a href='#'><CardSlider cards={[{ title: 'Masskara Festival', description: 'Description for this event 6', image: '/images/festival_masskara.jpg' },]}/></a></div>
          <div><a href='#'><CardSlider cards={[{ title: 'Higantes Festival', description: 'Description for this event 7', image: '/images/festival_higantes.jpg' },]}/></a></div>
        </div>
      </div>

      <EWFooter/>
    </div>
  );
}

export default EventPage;

