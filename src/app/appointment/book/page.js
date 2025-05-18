'use client';

import { useState } from 'react';
import AppointmentForm from '../../components/appointment-form';
import AppointmentCalendar from '../../components/appointment-calendar';

export default function BookAppointmentPage() {
  const [selectedSlot, setSelectedSlot] = useState({ date: '', time: '' });
  
  const handleSlotSelect = (date, time) => {
    setSelectedSlot({ date, time });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Book an Appointment</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left column: Calendar view */}
        <div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Available Appointments</h2>
            <p className="text-gray-600 mb-4">
              Select an available time slot from the calendar below.
            </p>
            <AppointmentCalendar onSelectSlot={handleSlotSelect} />
          </div>
        </div>
        
        {/* Right column: Appointment form */}
        <div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Your Information</h2>
            <p className="text-gray-600 mb-4">
              Fill in your details to book your appointment.
              {selectedSlot.date && selectedSlot.time && (
                <span className="block mt-2 font-medium">
                  Selected slot: {new Date(selectedSlot.date).toLocaleDateString()} at {selectedSlot.time}
                </span>
              )}
            </p>
            <AppointmentFormWithSlot selectedSlot={selectedSlot} />
          </div>
        </div>
      </div>
    </div>
  );
}

// Wrapper for AppointmentForm that pre-fills the selected slot
function AppointmentFormWithSlot({ selectedSlot }) {
  // Create a modified version of AppointmentForm that pre-fills the selected date and time
  return <AppointmentForm initialDate={selectedSlot.date} initialTime={selectedSlot.time} />;
}