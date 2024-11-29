import { supabase } from "@/lib/supabase";

export async function GET(request, { params }) {
  const { id } = params;
  const { data, error } = await supabase.from("foods").select("*").eq("id", id).single();

  if (error || !data) {
    return new Response(JSON.stringify({ error: "Not Found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}