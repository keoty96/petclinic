import { supabase } from "../../../../lib/supabaseClient";

// Add a GET handler to test the endpoint
export async function GET() {
  return new Response(
    JSON.stringify({ message: "API endpoint is working" }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
}

export async function POST(request) {
  try {
    // Parse the request body
    console.log("Incoming request headers:", request.headers);
    const appointmentData = await request.json();
    console.log("Received data:", appointmentData);
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'date', 'time', 'pet', 'reason'];
    for (const field of requiredFields) {
      if (!appointmentData[field]) {
        return new Response(
          JSON.stringify({ error: `Missing required field: ${field}` }),
          { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
      }
    }

    // Check if the time slot is already booked
    const { data: existingAppointments } = await supabase
      .from('appointments')
      .select('*')
      .eq('date', appointmentData.date)
      .eq('time', appointmentData.time);

    if (existingAppointments && existingAppointments.length > 0) {
      return new Response(
        JSON.stringify({ error: 'This time slot is already booked. Please select another time.' }),
        { status: 409, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Insert the appointment into the database
    const { data, error } = await supabase
      .from('appointments')
      .insert([
        {
          name: appointmentData.name,
          email: appointmentData.email,
          date: appointmentData.date,
          time: appointmentData.time,
          pet: appointmentData.pet,
          reason: appointmentData.reason,
          created_at: new Date().toISOString()
        }
      ])
      .select();
      console.log("Supabase response - data:", data, "error:", error);

    if (error) {
      console.log(error)
      console.error('Database error:', error);
      return new Response(
        JSON.stringify({ error: 'Failed to book appointment' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Return success response
    return new Response(
      JSON.stringify({ 
        message: 'Appointment booked successfully!',
        id: data && data[0] ? data[0].id : null
      }),
      { status: 201, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Full error stack:', error);
    return new Response(
      JSON.stringify({ 
        error: 'An unexpected error occurred',
        details: error.message 
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}