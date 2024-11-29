import {
  CredentialsSignInButton,
  GithubSignInButton,
  GoogleSignInButton,
} from "@/components/authButtons";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function SignInPage() {
  // Fetch the server session
  const session = await getServerSession(authConfig);

  // Debugging log (server-side only)
  console.log("Session: ", session);

  // Redirect if session exists
  if (session) {
    redirect("/timeline");
  }

  // Render sign-in UI for users without a session
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen py-2 bg-white">
      <div className="flex flex-col items-center mt-10 p-10 shadow-2xl">
        <h1 className="mt-10 mb-4 text-4xl font-bold">Sign In</h1>
        <GoogleSignInButton />
        <GithubSignInButton />
        <span className="text-2xl font-semibold text-center mt-8">Or</span>
        <CredentialsSignInButton />
      </div>
    </div>
  );
}

