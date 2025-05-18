'use client';

import { useState, useEffect } from 'react';

export default function AppointmentList() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchEmail, setSearchEmail] = useState('');

  useEffect(() => {
    // Fetch appointments when component mounts
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    setLoading(true);
    setError(null);

    try {
      // Define the endpoint - this will need to be created
      const endpoint = searchEmail 
        ? `/api/appointments?email=${encodeURIComponent(searchEmail)}` 
        : '/api/appointments';
      
      const response = await fetch(endpoint);
      
      if (!response.ok) {
        throw new Error('Failed to fetch appointments');
      }
      
      const data = await response.json();
      setAppointments(data.appointments || []);
    } catch (err) {
      console.error('Error fetching appointments:', err);
      setError('Failed to load appointments. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchAppointments();
  };

  const handleCancelAppointment = async (id) => {
    if (!confirm('Are you sure you want to cancel this appointment?')) {
      return;
    }

    try {
      const response = await fetch(`/api/appointments/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to cancel appointment');
      }

      // Remove the cancelled appointment from the list
      setAppointments(appointments.filter(app => app.id !== id));
    } catch (err) {
      console.error('Error cancelling appointment:', err);
      alert('Failed to cancel appointment. Please try again.');
    }
  };

  // Format date for display
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString();
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-6">Manage Appointments</h2>
      
      {/* Search form */}
      <form onSubmit={handleSearch} className="mb-6 flex gap-2">
        <input
          type="email"
          placeholder="Search by email"
          value={searchEmail}
          onChange={(e) => setSearchEmail(e.target.value)}
          className="flex-grow border border-gray-300 rounded-md shadow-sm p-2"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Search
        </button>
      </form>
      
      {/* Error message */}
      {error && (
        <div className="p-4 mb-4 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}
      
      {/* Loading indicator */}
      {loading && (
        <div className="text-center py-8">
          <p>Loading appointments...</p>
        </div>
      )}
      
      {/* Appointments list */}
      {!loading && appointments.length === 0 && (
        <div className="text-center py-8 bg-gray-50 rounded-lg">
          <p className="text-gray-500">No appointments found.</p>
        </div>
      )}
      
      {!loading && appointments.length > 0 && (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-3 px-4 text-left border-b">Date</th>
                <th className="py-3 px-4 text-left border-b">Time</th>
                <th className="py-3 px-4 text-left border-b">Name</th>
                <th className="py-3 px-4 text-left border-b">Pet</th>
                <th className="py-3 px-4 text-left border-b">Reason</th>
                <th className="py-3 px-4 text-left border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b">{formatDate(appointment.date)}</td>
                  <td className="py-3 px-4 border-b">{appointment.time}</td>
                  <td className="py-3 px-4 border-b">{appointment.name}</td>
                  <td className="py-3 px-4 border-b">{appointment.pet}</td>
                  <td className="py-3 px-4 border-b">{appointment.reason}</td>
                  <td className="py-3 px-4 border-b">
                    <button
                      onClick={() => handleCancelAppointment(appointment.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}