'use client'; 

import { useState, useEffect } from 'react';
import AvailabilityChecker from './availability-checker';

export default function AppointmentForm({ initialDate = '', initialTime = '09:00' }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    date: initialDate,
    time: initialTime,
    pet: '',
    reason: '',
  });

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSlotAvailable, setIsSlotAvailable] = useState(null);
  
  // Effect to update form when initialDate or initialTime change
  useEffect(() => {
    setForm(prevForm => ({
      ...prevForm,
      date: initialDate,
      time: initialTime
    }));
    
    // Reset availability status when date/time changes from parent
    setIsSlotAvailable(null);
  }, [initialDate, initialTime]);

  // Business hours for the vet clinic (9 AM to 5 PM)
  const availableTimes = [
    '09:00', '10:00', '11:00', '12:00', 
    '13:00', '14:00', '15:00', '16:00', '17:00'
  ];

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setErrorMessage('');

    // If the user hasn't checked availability or the slot isn't available
    if (isSlotAvailable === null) {
      setErrorMessage('Please check appointment availability before booking.');
      setLoading(false);
      return;
    }

    if (isSlotAvailable === false) {
      setErrorMessage('This time slot is already booked. Please select another time.');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(data.message);
        setForm({ name: '', email: '', date: '', time: '09:00', pet: '', reason: '' }); // clear form
      } else {
        // Handle conflict (time slot already booked)
        if (res.status === 409) {
          setErrorMessage(data.error || 'This time slot is already booked. Please select another time.');
        } else {
          setErrorMessage('Something went wrong with your request. Please try again.');
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMessage('An unexpected error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  }

  // Function to check if date is in the past
  const isDateInPast = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const selectedDate = new Date(date);
    return selectedDate < today;
  };

  // Function to check if date is a weekend
  const isWeekend = (date) => {
    const day = new Date(date).getDay();
    return day === 0 || day === 6; // 0 is Sunday, 6 is Saturday
  };

  // Handle date change with validation
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    
    if (isDateInPast(selectedDate)) {
      setErrorMessage("Please select a future date for your appointment.");
      return;
    }
    
    if (isWeekend(selectedDate)) {
      setErrorMessage("We're closed on weekends. Please select a weekday.");
      return;
    }
    
    setErrorMessage('');
    setForm({ ...form, date: selectedDate });
    setIsSlotAvailable(null); // Reset availability when date changes
  };

  // Handle time change
  const handleTimeChange = (e) => {
    setForm({ ...form, time: e.target.value });
    setIsSlotAvailable(null); // Reset availability when time changes
  };

  // Handle availability change from availability checker
  const handleAvailabilityChange = (available) => {
    setIsSlotAvailable(available);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
        <input
          id="name"
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="date" className="block text-sm font-medium text-gray-700">Appointment Date</label>
        <input
          id="date"
          type="date"
          value={form.date}
          onChange={handleDateChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="time" className="block text-sm font-medium text-gray-700">Appointment Time</label>
        <select
          id="time"
          value={form.time}
          onChange={handleTimeChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        >
          {availableTimes.map(time => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
      </div>
      
      <div className="mb-4">
        <label htmlFor="pet" className="block text-sm font-medium text-gray-700">Pet Type</label>
        <input
          id="pet"
          type="text"
          placeholder="Dog, Cat, Bird, etc."
          value={form.pet}
          onChange={e => setForm({ ...form, pet: e.target.value })}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="reason" className="block text-sm font-medium text-gray-700">Reason for Visit</label>
        <textarea
          id="reason"
          placeholder="Please describe your pet's symptoms or the reason for the visit"
          value={form.reason}
          onChange={e => setForm({ ...form, reason: e.target.value })}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          rows={4}
        />
      </div>
      
      {/* Add availability checker component */}
      {form.date && form.time && (
        <div className="mb-4">
          <AvailabilityChecker 
            date={form.date} 
            time={form.time} 
            onAvailabilityChange={handleAvailabilityChange}
          />
        </div>
      )}
      
      {errorMessage && (
        <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {errorMessage}
        </div>
      )}
      
      {message && (
        <div className="p-3 bg-green-100 border border-green-400 text-green-700 rounded">
          {message}
        </div>
      )}
      
      <button 
        type="submit" 
        className={`w-full font-medium py-2 px-4 rounded-md transition duration-150 ease-in-out ${
          isSlotAvailable === true 
            ? 'bg-blue-500 hover:bg-blue-600 text-white' 
            : 'bg-gray-400 text-gray-200 cursor-not-allowed'
        }`}
        disabled={loading || isSlotAvailable !== true}
      >
        {loading ? 'Processing...' : 'Book Appointment'}
      </button>
    </form>
  );
}