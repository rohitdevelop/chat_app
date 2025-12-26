// import NextAuth, { NextAuthOptions } from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import GitHubProvider from "next-auth/providers/github";

// export const authOptions: NextAuthOptions = {
//   pages: { signIn: "/" },
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//       authorization: {
//         params: {
//           prompt: "consent",
//           access_type: "offline",
//           response_type: "code",
//         },
//       },
//     }),
//     GitHubProvider({
//       clientId: process.env.GITHUB_ID!,
//       clientSecret: process.env.GITHUB_SECRET!,
//       authorization: { params: { scope: "read:user user:email" } },
//     }),
//   ],
//   secret: process.env.NEXTAUTH_SECRET,
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };







import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
// import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "../../../../lib/dbConnect";

export const authOptions = {
  // adapter: MongoDBAdapter(clientPromise), // 🔥 Store users automatically in MongoDB

  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
      authorization: { params: { scope: "read:user user:email" } },
    }),
  ],

  pages: {
    signIn: "/", // redirect to login page
  },

  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
