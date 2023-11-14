import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { CommunitySchema } from "@/lib/schemas/community";
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

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const name = searchParams.get('name');

    if (!name) {
      return NextResponse.json({ message: 'Bad Request. Please provide a valid community name' }, { status: 400 });
    }
    const community = await db.community.findUnique({
      where: {
        name: name
      },
      select: {
        id: true,
        createdAt: true,
        name: true,
        posts: {
          select: {
            id: true,
            updatedAt: true,
            author: {
              select: {
                name: true,
              }
            },
            title: true,
            content: true,
            votes: {
              select: {
                vote: true,
              }
            },
            comments: {
              select: {
                id: true,
              }
            }
          }
        },
        subscribers: {
          select: {
            userId: true,
          }
        }
      }
    });

    if (!community) return NextResponse.json({ message: 'Community Not Found. The requested community does not exist.', name: name }, { status: 404 });

    return NextResponse.json({
      id: community.id,
      createdAt: community.createdAt,
      name: community.name,
      posts: community.posts,
      subscribers: community.subscribers.length
    }, { status: 200 })

  } catch (error) {
    return NextResponse.json({ message: 'Internal Server Error. Something went wrong on our end. Please try again later.' }, { status: 500 });
  }
}
