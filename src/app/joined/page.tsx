// pages/joined/JoinedPage.tsx
'use client'

import React, { useState } from 'react';
import EWHeader from '../../../components/EWHeader';
import EWFooter from '../../../components/EWFooter';
import Modal from '../../components/Modal';

interface Event {
  title: string;
  date: string;
  details: string;
  image: string;
}

const joinedEvents: Event[] = [
  {
    title: 'Sinulog Festival',
    date: 'Jan. 21, 2024',
    details: 'Lorem ipsum dolor sit amet. Vel dignissimos reiciendis ab voluptatibus dolorem eum voluptas sint et repellat animi aut voluptatem sunt.',
    image: '/images/sinulog-festival.jpg',
  },
  {
    title: 'The Voice Kids of Misor',
    date: 'Jan. 16-21, 2024',
    details: 'Lorem ipsum dolor sit amet. Vel dignissimos reiciendis ab voluptatibus dolorem eum voluptas sint et repellat animi aut voluptatem sunt.',
    image: '/images/the-voice-kids-misor.png',
  },
  {
    title: 'Mescon',
    date: 'Sept. 10, 2024',
    details: 'Lorem ipsum dolor sit amet. Vel dignissimos reiciendis ab voluptatibus dolorem eum voluptas sint et repellat animi aut voluptatem sunt.',
    image: '/images/mescon.png',
  },
];

const JoinedPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const handleDeleteClick = (event: Event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    console.log('Deleting event:', selectedEvent);
    setShowModal(false);
    setSelectedEvent(null);
  };

  return (
    <div>
      <EWHeader />

      <section className="p-12 bg-[var(--background-color)] my-5 flex items-center justify-center text-center">
        <div className="bg-black text-white p-8">
          <h1 className="text-4xl text-yellow-400 mb-4 text-left font-bold">JOINED EVENTS</h1>
          <div className="flex flex-col gap-8">
            {joinedEvents.map((event, index) => (
              <div key={index} className="flex items-center bg-gray-900 p-6 rounded-lg gap-8">
                <div className="relative w-2/4 h-2/4 flex-shrink-0">
                  <img src={event.image} alt={event.title} className="border rounded-lg w-full h-full object-cover" />
                </div>
                <div className="flex-2 text-left">
                  <h2 className="text-4xl text-yellow-400 mb-2 font-bold">{event.title}</h2>
                  <p className="mb-2 font-bold">Date of event: {event.date}</p>
                  <p className="mb-12">{event.details}</p>
                  <div className="flex flex-col gap-2">
                    <button
                      className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 text-sm"
                      onClick={() => handleDeleteClick(event)}
                    >
                      DELETE/LEAVE
                    </button>
                    <a href='/event_feedback'>
                    <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 text-sm">
                      FEEDBACK
                    </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Modal show={showModal} onClose={() => setShowModal(false)} onConfirm={handleConfirmDelete} />
        </div>
      </section>
      
      <EWFooter />
    </div>
  );
};

export default JoinedPage;
