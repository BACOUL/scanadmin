export async function POST(request: Request) {
  const payload = await request.json();

  if (!payload?.firstName || !payload?.lastName || !payload?.company || !payload?.email || !payload?.consent) {
    return Response.json({ ok: false }, { status: 400 });
  }

  return Response.json({ ok: true });
}
