import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginService } from "@/app/services/service";

export default NextAuth({
    providers:[
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },

            async authorize(credentials) {
                const { email, password } = credentials;
                try {
                    const response = await loginService(email, password);
                    if (response.status === 200) {
                        return response.data;
                    }
                } catch (error) {
                    throw new Error("Login failed: " + error.message);
                }
            },

        }),
    ],

    secret: process.env.NEXTAUTH_SECRET,

    callbacks: {
        async jwt({ token, user }) { 
            if (user) {
                const { first_name, last_name, email, id } = user.user;
                token.email = email
                token.name = `${first_name || ""}`.trim();
                token.id = id;
            }
            return token;
        },
        async session({ session, token }) {
            session.user.email = token.email;
            session.user.name = token.name;
            session.user.id = token.id;
            return session;
        }
    }
    
});
