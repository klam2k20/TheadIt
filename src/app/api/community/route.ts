import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { CommunitySchema } from "@/lib/schemas/community";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function POST(req: NextRequest) {
  try {
    const session = await getAuthSession();

    if (!session || !session.user) return NextResponse.json({ message: 'Unauthorized. Please sign in to create a community.' }, { status: 401 });

    const body = await req.json();
    const { name } = CommunitySchema.parse(body);

    const hasCommunity = await db.community.findFirst({
      where: {
        name
      }
    });

    if (hasCommunity) return NextResponse.json({ message: 'Conflict. A community with this name already exists.' }, { status: 409 });

    const community = await db.community.create({
      data: {
        name,
        creatorId: session.user.id
      }
    });

    await db.subscribers.create({
      data: {
        communityId: community.id,
        userId: session.user.id
      }
    });

    return NextResponse.json({ name: community.name }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) return NextResponse.json({ message: error.message }, { status: 400 });
    return NextResponse.json({ message: 'Internal Server Error. Something went wrong on our end. Please try again later.' }, { status: 500 });
  }
}