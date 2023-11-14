import { z } from "zod"

export const CommunitySchema = z.object({
  name: z.string().regex(new RegExp(/^[a-zA-Z0-9_]+$/)).min(3).max(21)
});

export type CreateCommunityPayload = z.infer<typeof CommunitySchema>

export const CommunityPostSchema = z.object({
  id: z.string(),
  author: z.string(),
  title: z.string(),
  content: z.string(),
  upvotes: z.number(),
  downvotes: z.number(),
  comments: z.number(),
  updatedAt: z.string().datetime()
});

export const CommunityInfoSchema = z.object({
  id: z.string(),
  createdAt: z.string().datetime(),
  name: z.string().regex(new RegExp(/^[a-zA-Z0-9_]+$/)).min(3).max(21),
  posts: z.array(CommunityPostSchema),
  subscribers: z.number(),
});

export type CommunityInfoResponse = z.infer<typeof CommunityInfoSchema>