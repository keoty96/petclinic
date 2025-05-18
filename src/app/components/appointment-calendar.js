'use client';

import { useState, useEffect } from 'react';

export default function AppointmentCalendar({ onSelectSlot }) {
  const [selectedDate, setSelectedDate] = useState('');
  const [availableSlots, setAvailableSlots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Business hours for the vet clinic (9 AM to 5 PM)
  const allTimeSlots = [
    '09:00', '10:00', '11:00', '12:00', 
    '13:00', '14:00', '15:00', '16:00', '17:00'
  ];

  useEffect(() => {
    // If a date is selected, fetch available slots
    if (selectedDate) {
      fetchAvailableSlots(selectedDate);
    }
  }, [selectedDate]);

  const fetchAvailableSlots = async (date) => {
    setLoading(true);
    setError('');
    
    try {
      // Fetch all booked slots for this date
      const promises = allTimeSlots.map(time => 
        fetch(`/api/availability?date=${encodeURIComponent(date)}&time=${encodeURIComponent(time)}`)
          .then(res => res.json())
      );
      
      const results = await Promise.all(promises);
      
      // Filter only available slots
      const available = allTimeSlots.filter((_, index) => 
        results[index] && results[index].available
      );
      
      setAvailableSlots(available);
    } catch (err) {
      console.error('Error fetching available slots:', err);
      setError('Failed to load available slots. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleSlotSelect = (time) => {
    if (onSelectSlot) {
      onSelectSlot(selectedDate, time);
    }
  };

  // Function to check if date is in the past
  const isDateValid = (date) => {
    if (!date) return false;
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const selectedDate = new Date(date);
    
    // Check if date is in the past
    if (selectedDate < today) return false;
    
    // Check if date is a weekend
    const day = selectedDate.getDay();
    if (day === 0 || day === 6) return false; // 0 is Sunday, 6 is Saturday
    
    return true;
  };

  return (
    <div className="my-6 p-4 border rounded-lg shadow-sm">
      <h3 className="text-lg font-medium mb-4">Available Appointment Slots</h3>
      
      <div className="mb-4">
        <label htmlFor="calendar-date" className="block text-sm font-medium text-gray-700">
          Select a Date
        </label>
        <input
          id="calendar-date"
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          min={new Date().toISOString().split('T')[0]}
        />
        
        {selectedDate && !isDateValid(selectedDate) && (
          <p className="mt-1 text-sm text-red-600">
            Please select a valid weekday in the future.
          </p>
        )}
      </div>
      
      {loading && (
        <div className="text-center py-4">
          <p>Loading available slots...</p>
        </div>
      )}
      
      {error && (
        <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}
      
      {!loading && selectedDate && isDateValid(selectedDate) && (
        <div className="mt-4">
          <h4 className="font-medium mb-2">Available Times:</h4>
          
          {availableSlots.length === 0 ? (
            <p className="text-gray-500">No available slots for this date.</p>
          ) : (
            <div className="grid grid-cols-3 gap-2">
              {availableSlots.map(time => (
                <button
                  key={time}
                  onClick={() => handleSlotSelect(time)}
                  className="bg-green-100 hover:bg-green-200 text-green-800 font-medium py-2 px-3 rounded-md transition duration-150 ease-in-out text-sm"
                >
                  {time}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}