'use client'

import React, { useState, useEffect } from 'react';
import EWHeader from '../../../components/EWHeader';
import EWFooter from '../../../components/EWFooter';

const EventFeedback: React.FC = () => {

    return (
        <div>
            <EWHeader/>

            {/* Image Background */}
            <section className="relative bg-[url('/images/sinulog.png')] h-custom-60 bg-cover bg-center">
                <div className="flex items-center justify-end h-full bg-black bg-opacity-40">
                </div>
            </section>

            {/* First Section */}
            <div style={{ textAlign: 'center' }}>
                <div style={{ display: 'inline-block', textAlign: 'center' }}>
                <h1 style={{ fontSize: '2rem', margin: '1rem 0', marginRight: '1rem', color: '#FFC42B', fontWeight: 'bolder', display: 'inline-block' }}>SINULOG FESTIVAL</h1>
                <h2 style={{ fontSize: '2rem', margin: '1rem 0', color: '#FFF', fontWeight: 'bolder', display: 'inline-block' }}>FEEDBACK</h2>
                <p style={{ textAlign: 'center', margin: '1rem 0', marginLeft: '5rem', marginRight: '5rem' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Eum galisum aliquid eum ullam laborum in dolores mollitia sit itaque cumque non eveniet quos qui quam internos sit quia voluptatem. Sed quos iusto ad eius magni hic dolores galisum nam iste voluptatem sed aspernatur officiis non voluptatem modi rem atque dolor! 
                </p>
                </div>
            </div>

            {/* Second Section */}
            <div style={{ margin: '2rem 0', fontSize: '20px', textAlign: 'center' }}>
                <h3>How was your experience?</h3>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '1.5rem', marginRight: '0.5rem', color: 'red' }}>★☆☆☆☆</span> Very poor
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '1.5rem', marginRight: '0.5rem', color: 'orange' }}>★★☆☆☆</span> Poor
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '1.5rem', marginRight: '0.5rem', color: 'yellow' }}>★★★☆☆</span> Average
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '1.5rem', marginRight: '0.5rem', color: 'lightgreen' }}>★★★★☆</span> Good
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '1.5rem', marginRight: '0.5rem', color: 'green' }}>★★★★★</span> Excellent
                </div>
                </div>
            </div>

            {/* Third Section */}
            <div style={{ margin: '2rem 0', textAlign:'center', fontSize: '20px' }}>
                <h3>How do you like our service?</h3>
                <textarea placeholder="Message" style={{ marginTop: '2rem', alignItems:'center', width: '50%', minHeight: '100px', padding: '0.5rem', fontSize: '1rem', borderRadius: '4px', border: '1px solid #ccc', marginBottom: '1rem', color: '#000' }}></textarea>
                <div>
                <button style={{ padding: '0.5rem 1rem', fontSize: '1rem', backgroundColor: '#FFC42B', color: '#fff', border: 'none', borderRadius: '4px' }}>Submit Feedback</button>
                </div>
            </div>

            <EWFooter/>
        </div>
    );
}

export default EventFeedback;