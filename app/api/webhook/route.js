export async function POST(req) {
  try {
    const data = await req.json();
    console.log("✅ Webhook received:", data);

    // Always respond 200 to confirm to Instamojo
    return new Response("OK", { status: 200 });
  } catch (error) {
    console.error("Webhook error:", error);
    return new Response("Invalid request", { status: 400 });
  }
}

export async function GET() {
  // Optional: helps you test in browser
  return new Response("Webhook active ✅", { status: 200 });
}
