import { z } from "zod"

export const CommunitySchema = z.object({
  name: z.string().regex(new RegExp(/^[a-zA-Z0-9_]+$/)).min(3).max(21)
});

export type CreateCommunityPayload = z.infer<typeof CommunitySchema>
