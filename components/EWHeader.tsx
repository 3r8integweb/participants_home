'use client'

import React, { useState } from 'react';

const EWHeader: React.FC = () => {
    const [isEventsDropdownOpen, setIsEventsDropdownOpen] = useState(false);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
    
    const toggleEventsDropdown = () => {
        setIsEventsDropdownOpen(!isEventsDropdownOpen);
        setIsProfileDropdownOpen(false); // Ensure the profile dropdown is closed
        setIsServicesDropdownOpen(false); // Ensure the services dropdown is closed
    };
    
    const toggleProfileDropdown = () => {
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
        setIsEventsDropdownOpen(false); // Ensure the events dropdown is closed
        setIsServicesDropdownOpen(false); // Ensure the services dropdown is closed
    };

    const toggleServicesDropdown = () => {
        setIsServicesDropdownOpen(!isServicesDropdownOpen);
        setIsEventsDropdownOpen(false); // Ensure the events dropdown is closed
        setIsProfileDropdownOpen(false); // Ensure the profile dropdown is closed
    };

    return (
        <div>
            {/* Navigation Bar */}
            <nav className="bg-customColor_black sticky top-0 z-50">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button */}
                    <button
                    type="button"
                    className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                    >
                    <span className="absolute -inset-0.5"></span>
                    <span className="sr-only">Open Main Menu</span>
                    <svg
                        className="block h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                    <svg
                        className="hidden h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                    </button>
                </div>

                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex flex-shrink-0 items-center">
                    <img className="h-8 w-auto" src="/images/logo_label.png" alt="EventWise" />
                    </div>

                    <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                        <a href="/home" className="rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Home</a>
                        
                        <div className="relative">
                        <button
                            type="button"
                            className="rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                            onClick={toggleEventsDropdown}
                        >
                            Events
                        </button>

                        {isEventsDropdownOpen && (
                            <div
                            className="absolute z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="user-menu-button"
                            tabIndex={-1}
                            >
                            <a href="/calendar" className="block px-4 py-2 text-base text-gray-700" role="menuitem" tabIndex={-1}>
                                Calendar
                            </a>
                            <a href="/events" className="block px-4 py-2 text-base text-gray-700" role="menuitem" tabIndex={-1}>
                                Events
                            </a>
                            <a href="/joined" className="block px-4 py-2 text-base text-gray-700" role="menuitem" tabIndex={-1}>
                                Joined
                            </a>
                            </div>
                        )}
                        </div>

                        <a href="/about" className="rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About</a>
                        
                        <div className="relative">
                        <button
                            type="button"
                            className="rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                            onClick={toggleServicesDropdown}
                        >
                            Services
                        </button>

                        {isServicesDropdownOpen && (
                            <div
                            className="absolute z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="user-menu-button"
                            tabIndex={-1}
                            >
                            <a href="/services" className="block px-4 py-2 text-base text-gray-700" role="menuitem" tabIndex={-1}>
                                Services
                            </a>
                            <a href="/booking" className="block px-4 py-2 text-base text-gray-700" role="menuitem" tabIndex={-1}>
                                Book
                            </a>
                            </div>
                        )}
                        </div>
                    </div>
                    </div>
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center pl-2 pr-2 sm:static sm:pr-0">
                    <a href='/notification'>
                    <button type="button" className="relative rounded-full bg-customColor_yellow p-1 text-black-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5"></span>
                        <span className="sr-only">View notifications</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                        </svg>
                    </button>
                    </a>
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center pl-2 pr-2 sm:static sm:pr-0">
                    <a href='/budget' aria-current="page">
                    <button type="button" className="relative rounded-full bg-customColor_yellow p-1 text-black-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5"></span>
                        <span className="sr-only">View budget</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
                        </svg>
                    </button>
                    </a>
                </div>

                {/* Profile dropdown*/}
                <div className="relative ml-2" onClick={toggleProfileDropdown}>
                    <div>
                        <button type="button" className="relative flex rounded-full bg-customColor_yellow text-base focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded={isProfileDropdownOpen} aria-haspopup="true">
                            <span className="absolute -inset-1.5"></span>
                            <span className="sr-only">Open User Menu</span>
                            <img className="h-8 w-8 rounded-full" src="/images/icon_wb.png" alt=""></img>
                        </button>
                    </div>

                    {isProfileDropdownOpen && (
                        <div
                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="user-menu-button"
                        tabIndex={-1}
                        >
                        <a href="/profile" className="block px-4 py-2 text-base text-gray-700" role="menuitem" tabIndex={-1}>
                            Profile
                        </a>
                        <a href="#" className="block px-4 py-2 text-base text-gray-700" role="menuitem" tabIndex={-1}>
                            Portfolio
                        </a>
                        <a href="#" className="block px-4 py-2 text-base text-gray-700" role="menuitem" tabIndex={-1}>
                            Log Out
                        </a>
                        </div>
                    )}
                </div>
                </div>
            </div>

            {/* Mobile Menu, show/hide based on menu open state */}
            <div className="sm:hidden" id="mobile-menu">
                <div className="space-y-1 px-2 pt-2 pb-3">
                <a href="/home" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
                    Home
                </a>
                <a href="/events" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
                    Events
                </a>
                <a href="/about" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">
                    About
                </a>
                <a href="/services" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
                    Services
                </a>
                </div>
            </div>
            </nav>
        </div>
    );

};

export default EWHeader;