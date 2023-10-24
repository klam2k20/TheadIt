import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { nanoid } from 'nanoid'
import { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { getServerSession } from "next-auth/next"
import { db } from './db'

export const authOptions: NextAuthOptions = {
  // To persist user/account data
  adapter: PrismaAdapter(db),

  // Save the user session as an encrypted JWT
  session: {
    strategy: 'jwt'
  },

  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    })
  ],

  callbacks: {
    /**
    The redirect callback is called anytime the user is
    redirected to a callback URL (e.g. on signin or signout)
    */
    redirect() {
      return '/';
    },

    /**
    The jwt callback is called whenever a JWT is created (i.e. at sign in)
    or updated (i.e whenever a session is accessed). The returned value will
    be encrypted and stored in a Cookie.The arguments userAgent, account, 
    profile and isNewuser are only passed the first time this callback is
    called on a new session, after the user signs in.Subsequent calls returns
    only the token
     */
    async jwt({ token, user }) {
      const dbUser = await db.user.findFirst({
        where: {
          email: token.email,
        }
      });

      // If a new user return the token
      if (!dbUser) {
        token.id = user.id;
        return token;
      }

      if (!dbUser.username) {
        await db.user.update({
          where: {
            id: dbUser.id
          },
          data: {
            username: nanoid(10)
          }
        })
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        username: dbUser.username,
        email: dbUser.email,
        picture: dbUser.image,
      }
    },

    /**
    The jwt() callback is called before the session() callback, so anything 
    you add to the JWT will be immediately available in the session callack
     */
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.username = token.username;
        session.user.email = token.email;
        session.user.image = token.picture;
      }
      return session;
    }
  }
}

// The useSession() React hook is the easiest way to check if
// someone is signed in a client component. To check if someone
// is signed in a server component use getServerSession(authOptions) 
export const getAuthSession = async () => await getServerSession(authOptions)