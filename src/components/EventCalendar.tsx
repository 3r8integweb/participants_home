import React from 'react';

const EventCalendar = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const hours = [
    '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM'
  ];

  return (
    <div className="flex flex-col lg:flex-row lg:space-x-8">
      <div className="flex-1">
        <div className="bg-gray-800 rounded-lg p-7 h-full">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-white">CALENDAR</h2>
            <div>
              <button className="mr-2 text-gray-400">Weekly</button>
              <button className="text-yellow-500">Monthly</button>
            </div>
          </div>
          <div className="grid grid-cols-8 gap-2 text-yellow-500 mb-2">
            <div></div>
            {days.map(day => (
              <div key={day} className="text-center">{day}</div>
            ))}
          </div>
          <div className="relative">
            <div className="grid grid-cols-8 gap-2 h-full relative">
              <div className="flex flex-col space-y-4 text-right pr-10 text-gray-400">
                {hours.map(time => (
                  <div key={time} className="h-14 flex items-center justify-end">{time}</div>
                ))}
              </div>
              {days.map((_, index) => (
                <div key={index} className="relative border-r border-gray-700">
                  <div className="absolute top-4 left-0 right-0 h-12 bg-yellow-500 rounded-lg"></div>
                  <div className="absolute top-20 left-0 right-0 h-12 bg-purple-500 rounded-lg"></div>
                  <div className="absolute top-40 left-0 right-0 h-12 bg-blue-500 rounded-lg"></div>
                  <div className="absolute top-60 left-0 right-0 h-12 bg-green-500 rounded-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-64 mt-8 lg:mt-0 flex-shrink-0">
        <div className="bg-gray-800 rounded-lg p-4 mb-4 h-64">
          <h2 className="text-2xl font-bold text-white mb-4">MAY 2024</h2>
          <div className="bg-gray-900 p-4 rounded-lg h-50">
            <div className="grid grid-cols-7 text-center text-yellow-500">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map(day => (
                <div key={day}>{day}</div>
              ))}
              {Array.from({ length: 31 }).map((_, index) => (
                <div key={index} className="text-white">{index + 1}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 h-64">
          <h2 className="text-2xl font-bold text-white mb-4">EVENT LIST</h2>
          <div className="flex flex-col space-y-2 overflow-y-auto h-40">
            <div className="flex justify-between items-center bg-gray-700 rounded-lg p-2">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></div>
                <div>
                  <p className="text-white">Birthday Celebration</p>
                  <p className="text-gray-400 text-sm">Premiere Hall, Solaire</p>
                </div>
              </div>
              <button className="text-white text-sm bg-yellow-500 px-2 py-1 rounded-lg">Set Reminder</button>
            </div>
            <div className="flex justify-between items-center bg-gray-700 rounded-lg p-2">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
                <div>
                  <p className="text-white">Birthday Celebration</p>
                  <p className="text-gray-400 text-sm">Premiere Hall, Solaire</p>
                </div>
              </div>
              <button className="text-white text-sm bg-blue-500 px-2 py-1 rounded-lg">Set Reminder</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCalendar;
