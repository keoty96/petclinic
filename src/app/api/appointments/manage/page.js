'use client';

import AppointmentList from '../../components/appointment-list';

export default function ManageAppointmentsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Manage Appointments</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-600 mb-6">
          View and manage existing appointments. You can search by email to find specific appointments.
        </p>
        
        <AppointmentList />
      </div>
    </div>
  );
}