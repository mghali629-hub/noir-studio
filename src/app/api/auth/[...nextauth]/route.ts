import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    user: {
      id: 'usr_noir_cli_990',
      name: 'Camille Dubois',
      email: 'c.dubois@maison-noir.fr',
      vipTier: 'NOIR_PRIVILEGE',
    },
    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    return NextResponse.json({
      success: true,
      token: 'noir_jwt_couture_881920',
      user: {
        id: 'usr_noir_cli_990',
        email: body.email || 'client@noirstudio.com',
        vipTier: 'MEMBER',
      },
    });
  } catch {
    return NextResponse.json({ error: 'Invalid client authentication' }, { status: 400 });
  }
}
