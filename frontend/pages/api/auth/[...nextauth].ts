import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
import { getFacebookAuthToken, getGoogleAuthToken } from '../../../apiNest/authApi';


export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.NEXTAUTH_GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.NEXTAUTH_GOOGLE_CLIENT_SECRET || '',
    }),
    FacebookProvider({
      clientId: process.env.NEXTAUTH_FACEBOOK_CLIENT_ID || '',
      clientSecret: process.env.NEXTAUTH_FACEBOOK_CLIENT_SECRET || '',
    })
  ],
  callbacks: {
    async signIn({account, profile}) {
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
      }
      if (access_token) {
        account.access_token = access_token;
      }
      return true;
    },
    // redirect: async (url: string, _baseUrl: string) => {
    //   return Promise.resolve('/');
    // },
    async jwt({token, account}) {
      if (account) {
        token.accessToken = account.access_token
      }
      return token;
    },
    async session({session, user, token}) {
      session.accessToken = token.accessToken
      return session;
    }
  }
})
