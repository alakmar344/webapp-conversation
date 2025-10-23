export async function POST(req) {
  const data = await req.json();
  const { buyer_name, buyer_email, amount, status, purpose } = data;

  if (status === "Credit") {
    console.log("✅ Payment successful:", buyer_name, buyer_email, amount, purpose);
  }

  return new Response("OK", { status: 200 });
}
