'use client'

import React, { useState } from 'react';
import EWHeader from '../../../components/EWHeader';
import EWFooter from '../../../components/EWFooter';

import Image from "next/image";
import sinulogpic from "../../public/sinulog.jpg";

const BookedEvent: React.FC = () => {
    return (
      <div>
        <EWHeader/>
  
        <div className="text-white ml-48">
        <h1 className="uppercase text-yellow-400 text-lg font-bold">
          September 2023
        </h1>
        <h1 className="uppercase text-white text-lg font-bold">Book event</h1>
      </div>
      <div className="mt-4 border-1 border-white border-b"></div>
      <div className="flex justify-center text-white">
        <h1 className="italic font-semibold text-lg mt-6">
          Mr./Mrs./Ms./Sir/Ma'am
        </h1>
      </div>
      <div className="flex justify-center mt-4">
        <div
          className="flex gap-5 p-5 bg-gray-600 items-center "
          style={{ width: 400 }}
        >
          <div
            className="bg-yellow-400 mr-20"
            style={{ padding: 20, borderRadius: "50%" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="black"
              className="size-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
              />
            </svg>
          </div>
          <div className="text-white">
            <h1 className="text-yellow-400 font-bold text-lg">Event Type</h1>
            <p className="">WEDDING</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <div
          className="flex gap-5 p-5 bg-gray-600 items-center "
          style={{ width: 400 }}
        >
          <div
            className="bg-yellow-400 mr-20"
            style={{ padding: 20, borderRadius: "50%" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="black"
              className="size-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
              />
            </svg>
          </div>
          <div className="text-white">
            <h1 className="text-yellow-400 font-bold text-lg">Event Date</h1>
            <p className="uppercase">01 December 2023</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <div
          className="flex gap-5 p-5 bg-gray-600 items-center "
          style={{ width: 400 }}
        >
          <div
            className="bg-yellow-400 mr-20"
            style={{ padding: 20, borderRadius: "50%" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="black"
              className="size-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
              />
            </svg>
          </div>
          <div className="text-white">
            <h1 className="text-yellow-400 font-bold text-lg">Event Time</h1>
            <p className="uppercase">15:00pm - 22:00pm</p>
          </div>
        </div>
      </div>
      <div className="ml-48 text-yellow-400 text-xl font-bold mt-6">
        <h1>Description</h1>
        <p className="text-white font-semibold">description sa event</p>
      </div>
  
        <EWFooter/>
      </div>
    );
  }
  
  export default BookedEvent;