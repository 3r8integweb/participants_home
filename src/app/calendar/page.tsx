'use client'

import React, { useState, useEffect } from 'react';
import EWHeader from '../../../components/EWHeader';
import EWFooter from '../../../components/EWFooter';
import Calendar from '../../components/Calendar';

const CalendarSched: React.FC = () => {

    return (
        <div>
            <EWHeader/>

            <Calendar/>

            <EWFooter/>
        </div>
    );
}

export default CalendarSched;