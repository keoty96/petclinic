'use client'; 

import { useState } from 'react';

export default function AppointmentForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    date: '',
    pet: '',
    reason: '',
  });

  const [message, setMessage] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

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
      setForm({ name: '', email: '', date: '', pet: '', reason: '' }); // clear form
    } else {
      setMessage('Something went wrong!');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <input
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
        required
        className="border p-2 w-full"
      />
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={e => setForm({ ...form, email: e.target.value })}
        required
        className="border p-2 w-full"
      />
      <input
        type="date"
        value={form.date}
        onChange={e => setForm({ ...form, date: e.target.value })}
        required
        className="border p-2 w-full"
      />
      <input
        type="text"
        placeholder="Pet type"
        value={form.pet}
        onChange={e => setForm({ ...form, pet: e.target.value })}
        required
        className="border p-2 w-full"
      />
      <textarea
        placeholder="Reason for visit"
        value={form.reason}
        onChange={e => setForm({ ...form, reason: e.target.value })}
        required
        className="border p-2 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Book Appointment
      </button>
      {message && <p>{message}</p>}
    </form>
  );
}
