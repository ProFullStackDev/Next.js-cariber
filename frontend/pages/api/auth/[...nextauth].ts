import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
import { getFacebookAuthToken, getGoogleAuthToken, loginApi } from '../../../apiNest/authApi';
import CredentialsProvider from 'next-auth/providers/credentials';


export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_NEXTAUTH_GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.NEXT_PUBLIC_NEXTAUTH_GOOGLE_CLIENT_SECRET || '',
    }),
    FacebookProvider({
      clientId: process.env.NEXT_PUBLIC_NEXTAUTH_FACEBOOK_CLIENT_ID || '',
      clientSecret: process.env.NEXT_PUBLIC_NEXTAUTH_FACEBOOK_CLIENT_SECRET || '',
    }),
    CredentialsProvider({
      id: 'credentials',
      name: 'my-app',
      credentials: {
        email: {
          label: 'email',
          type: 'email',
        },
        password: {
          label: 'password',
          type: 'password'
        },
      },
      async authorize(credentials) {
        const payload = {
          email: credentials!.email,
          password: credentials!.password,
        };
        const user = await loginApi({ username: payload.email, password: payload.password });
                
        if (user!.message) {
          throw new Error(user!.message);
        }

        return user as any;
      },
    })
  ],
  callbacks: {
    async signIn({ account, user }) {
      let access_token: string = '';
      if (account.provider === 'google') {
        const data = await getGoogleAuthToken({
          id_token: account.id_token
        })
        access_token = data.access_token;
      } else if (account.provider === 'facebook') {
        const data = await getFacebookAuthToken({
          access_token: account.access_token
        })
        access_token = data.access_token;
      } else if (account.provider === 'credentials') {
        access_token = user.access_token as string;
      }
      if (access_token) {
        account.access_token = access_token;
      }
      return true;
    },
    redirect({ url, baseUrl }) {
      if (url.startsWith(baseUrl)) return url
      else if (url.startsWith("/")) return new URL(url, baseUrl).toString()
      return baseUrl
    },
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken
      return session;
    }
  }
})
