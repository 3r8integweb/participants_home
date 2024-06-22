"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { format, startOfWeek, addDays, addMonths, startOfMonth, eachDayOfInterval, endOfMonth, endOfWeek } from 'date-fns';

export function CalendarDemo() {
  const [date, setDate] = React.useState<Date>(new Date());
  const [view, setView] = React.useState<'weekly' | 'monthly'>('monthly');

  const events = [
    { id: 1, date: new Date(2024, 4, 13, 9), title: "Birthday Celebration", description: "Party at ABC", color: "bg-yellow-500" },
    { id: 2, date: new Date(2024, 4, 15, 11), title: "Project Meeting", description: "Discuss project details", color: "bg-blue-500" },
    { id: 3, date: new Date(2024, 4, 15, 14), title: "Doctor's Appointment", description: "Visit Dr. XYZ", color: "bg-red-500" },
  ];

  const renderWeeklyView = () => {
    const start = startOfWeek(date, { weekStartsOn: 1 });
    const days = Array.from({ length: 7 }, (_, index) => addDays(start, index));

    return (
      <div className="grid grid-cols-7 gap-1">
        {days.map((day) => (
          <div key={day.toString()} className="relative h-32 border border-gray-700">
            <div className="text-center py-1">{format(day, 'EEEE, MMM d')}</div>
            {events
              .filter((event) => format(event.date, 'yyyy-MM-dd') === format(day, 'yyyy-MM-dd'))
              .map((event) => (
                <div
                  key={event.id}
                  className={`absolute top-8 left-1 px-2 py-1 ${event.color} rounded-md text-xs`}
                >
                  {event.title}
                </div>
              ))}
          </div>
        ))}
      </div>
    );
  };

  const renderMonthlyView = () => {
    const start = startOfMonth(date);
    const end = endOfMonth(date);
    const days = eachDayOfInterval({ start, end });
    const startDayOfWeek = start.getDay();

    return (
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: startDayOfWeek }).map((_, index) => (
          <div key={index} className="h-24 border border-gray-700"></div>
        ))}
        {days.map((day) => (
          <div key={day.toString()} className="relative h-24 border border-gray-700">
            <div className="text-center py-1">{day.getDate()}</div>
            {events
              .filter((event) => format(event.date, 'yyyy-MM-dd') === format(day, 'yyyy-MM-dd'))
              .map((event) => (
                <div
                  key={event.id}
                  className={`absolute top-8 left-1 px-2 py-1 ${event.color} rounded-md text-xs`}
                >
                  {event.title}
                </div>
              ))}
          </div>
        ))}
      </div>
    );
  };

  const handleNext = () => {
    setDate((prevDate) => (view === 'monthly' ? addMonths(prevDate, 1) : addDays(prevDate, 7)));
  };

  const handlePrev = () => {
    setDate((prevDate) => (view === 'monthly' ? addMonths(prevDate, -1) : addDays(prevDate, -7)));
  };

  return (
    <div className="flex flex-col items-center bg-gray-900 text-white h-30 p-4">
      <div className="flex justify-between items-center w-full mb-4">
        <h1 className="text-2xl">CALENDAR</h1>
        <div className="flex space-x-2">
          <button
            className={`px-3 py-1 ${view === 'weekly' ? 'bg-yellow-500' : 'bg-gray-700'} rounded`}
            onClick={() => setView('weekly')}
          >
            Weekly
          </button>
          <button
            className={`px-3 py-1 ${view === 'monthly' ? 'bg-yellow-500' : 'bg-gray-700'} rounded`}
            onClick={() => setView('monthly')}
          >
            Monthly
          </button>
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 bg-gray-700 rounded" onClick={handlePrev}>Prev</button>
          <button className="px-3 py-1 bg-gray-700 rounded" onClick={handleNext}>Next</button>
        </div>
      </div>
      <div className="flex w-full h-full">
        <div className="flex-1 overflow-auto p-3 bg-gray-800 text-white">
          {view === 'weekly' ? renderWeeklyView() : renderMonthlyView()}
        </div>
        <div className="w-64 p-2 bg-gray-800 ml-4">
          <div className="text-lg mb-3">{format(date, 'MMMM yyyy')}</div>
          <div className="mb-7">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border border-gray-700 bg-gray-700 text-gray-200"
            />
          </div>
          <div>
            <h2 className="text-lg mb-2">EVENT LIST</h2>
            {events.map((event) => (
              <div key={event.id} className="mb-2 p-2 border border-gray-600 rounded-md bg-gray-700">
                <div className="flex justify-between">
                  <div className={`text-sm ${event.color} px-2 py-1 rounded-md`}>{event.title}</div>
                  <button className="text-gray-400 hover:text-white">
                    Set Reminder
                  </button>
                </div>
                <div className="text-xs text-gray-400">{event.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarDemo;
