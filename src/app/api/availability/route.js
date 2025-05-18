import { supabase } from "../../../../lib/supabaseClient";

export async function GET(request) {
  // Get the date and time from the URL parameters
  const { searchParams } = new URL(request.url);
  const date = searchParams.get('date');
  const time = searchParams.get('time');
  
  if (!date || !time) {
    return new Response(
      JSON.stringify({ error: "Date and time parameters are required" }), 
      { status: 400 }
    );
  }
  
  try {
    // Check if there's already an appointment at this date and time
    const { data: existingAppointments, error } = await supabase
      .from('appointments')
      .select('*')
      .eq('date', date)
      .eq('time', time);
    
    if (error) {
      console.error("Error checking availability:", error);
      return new Response(
        JSON.stringify({ error: error.message }), 
        { status: 500 }
      );
    }
    
    // Return whether the slot is available
    const isAvailable = !existingAppointments || existingAppointments.length === 0;
    
    return new Response(
      JSON.stringify({ 
        available: isAvailable,
        date,
        time
      }), 
      { status: 200 }
    );
  } catch (error) {
    console.error("Unexpected error:", error);
    return new Response(
      JSON.stringify({ error: "An unexpected error occurred" }), 
      { status: 500 }
    );
  }
}