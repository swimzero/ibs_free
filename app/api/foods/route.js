import { supabase } from "@/lib/supabase";

export async function GET() {
  const { data, error } = await supabase.from("foods").select("*");
  
  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}