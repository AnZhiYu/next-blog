// app/api/users/route.ts
import { NextResponse } from 'next/server';
import { NeonDb } from '@/lib/db';
import { users } from '@/db/schema';
// import { eq } from 'drizzle-orm';

export async function GET() {
  try {

    const user = {
      name: 'John',
      email: 'john@example.com',
    };

    console.log('New user created!', users)

    await NeonDb.insert(users).values(user);

    const allUsers = await NeonDb.select().from(users);
    
    console.log('allUsers---->', users)

    return NextResponse.json({ users: allUsers });
  } catch (error) {
    console.log('error------>', error)
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newUser = await NeonDb.insert(users).values(body).returning();
    return NextResponse.json({ user: newUser[0] }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: 'Failed to create user' },
      { status: 500 }
    );
  }
}