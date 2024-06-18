'use client'

import React, { useState } from 'react';
import EWHeader from '../../../components/EWHeader';
import EWFooter from '../../../components/EWFooter';

const ServicePage: React.FC = () => {
  return (
    <div>
      <EWHeader/>

      {/* Main Content*/}
      <section className="relative bg-blue-500 h-custom-60">
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <h1 className="text-white text-4xl">Services Page</h1>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="bg-customColor_black h-custom-80">
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <h1 className="text-white text-4xl">Content Here</h1>
        </div>

        
      </section>

      <EWFooter/>
    </div>
  );
}

export default ServicePage;