import { supabase } from "../../../../lib/supabaseClient";

export async function POST(request) {
  const body = await request.json();

  const { name, email, date, pet, reason } = body;

  const { data, error } = await supabase
  .from('appointments')
  .insert([{ name, email, date, pet, reason }])
  .select();

  console.log("Supabase returned data:", data)

if (error) {
  console.error(error)
  return new Response(JSON.stringify({ error: error.message }), { status: 500 })
}

return Response.json({ message: 'Appointment saved!', data })

}