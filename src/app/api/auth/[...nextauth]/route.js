import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth.default({
  providers: [
    CredentialsProvider.default({
      name: "Admin Login",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        // Verify credentials against environment variables
        if (
          email === process.env.ADMIN_EMAIL &&
          password === process.env.ADMIN_PASSWORD
        ) {
          return { id: 1, email }; // Return a user object upon success
        }

        // Return null if authentication fails
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/signin", // Custom sign-in page
  },
});

export { handler as GET, handler as POST };
