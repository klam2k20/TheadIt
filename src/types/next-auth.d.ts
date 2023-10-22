import NextAuth from 'next-auth';
import { JWT } from "next-auth/jwt"

declare module "next-auth" {
  interface Session {
    user: User & {
      id: string
      username: string | null
    }
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
    username: string | null
  }
}