'use client'

import React, { useState, useEffect } from 'react';
import EWHeader from '../../../components/EWHeader';
import EWFooter from '../../../components/EWFooter';

const InviteLink: React.FC = () => {

    return (
        <div>
            <EWHeader/>

            {/* Invite Link */}
            <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                background: 'url("/images/background.png")',
                backgroundSize: 'cover',
                color: 'white',
                textAlign: 'center',
            }}
            >

            {/* Text */}
            <div
                style={{
                background: 'rgba(80, 80, 80, 0.6)',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                maxWidth: '500px',
                width: '90%',
                textAlign: 'center',
                }}
            >
                <h2>Share this link with people that you want to invite:</h2>
                <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '10px 0',
                }}
                >
                <input
                    type="text"
                    value="eventwise.com/S9X8Hshj243FNSWks"
                    readOnly
                    style={{
                    color: '#000',
                    padding: '10px',
                    border: 'none',
                    borderRadius: '5px',
                    width: '300px',
                    marginRight: '10px',
                    }}
                />
                <button
                    style={{
                    padding: '10px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    backgroundColor: 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    }}
                >
                    <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                    </svg>
                </button>
                </div>
                <h2>OR</h2>
                <h2>Share your code via:</h2>
                <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '15px',
                    marginTop: '10px',
                }}
                >
                <a href="#">
                    <img src="/icons/discord.svg" alt="Discord" style={{ width: '40px', height: '40px' }} />
                </a>
                <a href="#">
                    <img src="/icons/linkedin.svg" alt="LinkedIn" style={{ width: '28px', height: '40px' }} />
                </a>
                <a href="#">
                    <img src="/icons/facebook.svg" alt="Facebook" style={{ width: '40px', height: '40px' }} />
                </a>
                <a href="#">
                    <img src="/icons/email.svg" alt="Email" style={{ width: '40px', height: '40px' }} />
                </a>
                <a href="#">
                    <img src="/icons/twitter.svg" alt="Twitter" style={{ width: '30px', height: '40px' }} />
                </a>
                <a href="#">
                    <img src="/icons/telegram.svg" alt="Telegram" style={{ width: '35px', height: '40px' }} />
                </a>
                </div>
            </div>
            </div>

            <EWFooter/>
        </div>
    );
}

export default InviteLink;