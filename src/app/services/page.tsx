'use client'

import React from 'react';
import EWHeader from '../../../components/EWHeader';
import EWFooter from '../../../components/EWFooter';

interface Service {
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    title: 'PHOTO AND VIDEO SERVICES',
    description: 'Lorem ipsum dolor sit amet. Vel dignissimos reiciendis ab voluptatibus dolorem eum voluptas sint et repellat animi aut voluptatem sunt. Qui ipsam rerum non quae quia aut quasi voluptatibus est quia exercitationem est dicta quibusdam. Ut quos quam At sint tenetur in voluptatum doloremque ad iusto distinctio ex voluptates magnam et necessitatibus quaerat.',
    image: 'images/offer-image.png',
  },
  {
    title: 'DECOR AND EVENT PRODUCTION',
    description: 'Lorem ipsum dolor sit amet. Vel dignissimos reiciendis ab voluptatibus dolorem eum voluptas sint et repellat animi aut voluptatem sunt. Qui ipsam rerum non quae quia aut quasi voluptatibus est quia exercitationem est dicta quibusdam. Ut quos quam At sint tenetur in voluptatum doloremque ad iusto distinctio ex voluptates magnam et necessitatibus quaerat.',
    image: 'images/who-image.png',
  },
  {
    title: 'FOOD AND BEVERAGES',
    description: 'Lorem ipsum dolor sit amet. Vel dignissimos reiciendis ab voluptatibus dolorem eum voluptas sint et repellat animi aut voluptatem sunt. Qui ipsam rerum non quae quia aut quasi voluptatibus est quia exercitationem est dicta quibusdam. Ut quos quam At sint tenetur in voluptatum doloremque ad iusto distinctio ex voluptates magnam et necessitatibus quaerat.',
    image: 'images/offer-image.png',
  },
  {
    title: 'AUDIOVISUAL, LIGHTS AND SOUND RENTALS',
    description: 'Lorem ipsum dolor sit amet. Vel dignissimos reiciendis ab voluptatibus dolorem eum voluptas sint et repellat animi aut voluptatem sunt. Qui ipsam rerum non quae quia aut quasi voluptatibus est quia exercitationem est dicta quibusdam. Ut quos quam At sint tenetur in voluptatum doloremque ad iusto distinctio ex voluptates magnam et necessitatibus quaerat.',
    image: 'images/who-image.png',
  },
];

const ServicePage: React.FC = () => {
  return (
    <div>
      <EWHeader />
      {/* Content Section */}
      <section className="p-12 bg-bg-customColor_black my-5 flex items-center justify-center text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl text-yellow-400 mb-8 text-left relative font-bold">
            SERVICES OFFERED
            <span className="block w-full h-1 bg-white mt-8"></span>
          </h1>
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1 p-4 max-w-[500px]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[300px] rounded-[10px] object-cover"
                />
              </div>
              <div className={`flex-1 p-4 text-white ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                <div className=" p-6 rounded-lg shadow-lg">
                  <h2 className="text-4xl text-yellow-400 mb-4 font-bold">{service.title}</h2>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <EWFooter />
    </div>
  );
}

export default ServicePage;
