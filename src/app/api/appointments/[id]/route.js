import { supabase } from "../../../../../lib/supabaseClient";

export async function DELETE(request, { params }) {
  const { id } = params;
  
  if (!id) {
    return new Response(
      JSON.stringify({ error: "Appointment ID is required" }), 
      { status: 400 }
    );
  }
  
  try {
    const { error } = await supabase
      .from('appointments')
      .delete()
      .eq('id', id);
    
    if (error) {
      console.error("Error deleting appointment:", error);
      return new Response(
        JSON.stringify({ error: error.message }), 
        { status: 500 }
      );
    }
    
    return new Response(
      JSON.stringify({ message: "Appointment cancelled successfully" }), 
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