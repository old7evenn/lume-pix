import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';


type RequestBody = {
  user: {
    stsTokenManager: {
      accessToken: string;
    }
  };
}

export async function POST (req: Request) {
  const { user }: RequestBody = await req.json();

  if (!user) {
    (await cookies()).set('token', '', { httpOnly: true, secure: true, path: '/' });

    return NextResponse.json({ message: 'Token removed' });
  }

  (await cookies()).set('token', user.stsTokenManager.accessToken, { httpOnly: true, secure: true, path: '/' });

  return NextResponse.json({ message: 'Token set', token: user.stsTokenManager.accessToken });
}

export async function DELETE (req: Request) {
  const { searchParams } = new URL(req.url);
  
  const cookiesName = searchParams.get('cookies_name') ?? ''; 

  (await cookies()).delete(cookiesName);

  return NextResponse.json({ message: 'Token removed' });
}
