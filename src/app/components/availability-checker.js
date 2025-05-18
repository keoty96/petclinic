'use client';

import { useState } from 'react';

export default function AvailabilityChecker({ date, time, onAvailabilityChange }) {
  const [isChecking, setIsChecking] = useState(false);
  const [isAvailable, setIsAvailable] = useState(null);
  const [message, setMessage] = useState('');

  const checkAvailability = async () => {
    if (!date || !time) {
      setMessage('Please select both a date and time');
      setIsAvailable(null);
      return;
    }

    setIsChecking(true);
    setMessage('Checking availability...');

    try {
      const response = await fetch(
        `/api/availability?date=${encodeURIComponent(date)}&time=${encodeURIComponent(time)}`
      );
      
      const data = await response.json();
      
      if (response.ok) {
        setIsAvailable(data.available);
        setMessage(data.available 
          ? 'This time slot is available!' 
          : 'This time slot is already booked. Please select another time.'
        );
        
        // Call the callback to inform parent component
        if (onAvailabilityChange) {
          onAvailabilityChange(data.available);
        }
      } else {
        setMessage('Error checking availability. Please try again.');
        setIsAvailable(null);
      }
    } catch (error) {
      console.error('Error checking availability:', error);
      setMessage('Error checking availability. Please try again.');
      setIsAvailable(null);
    } finally {
      setIsChecking(false);
    }
  };

  return (
    <div className="my-4">
      <button
        type="button"
        onClick={checkAvailability}
        disabled={isChecking || !date || !time}
        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-1 px-3 rounded-md text-sm transition duration-150 ease-in-out"
      >
        {isChecking ? 'Checking...' : 'Check Availability'}
      </button>
      
      {message && (
        <div className={`mt-2 text-sm ${
          isAvailable === true ? 'text-green-600' : 
          isAvailable === false ? 'text-red-600' : 'text-gray-600'
        }`}>
          {message}
        </div>
      )}
    </div>
  );
}