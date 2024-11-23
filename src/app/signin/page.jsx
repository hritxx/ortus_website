"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignIn = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
      callbackUrl: "/admin",
    });

    if (result?.ok) {
      router.push(result.url); // Redirect to the callback URL
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <FadeIn>
      <div className="flex flex-col items-center">
        <div className="flex flex-col justify-center  py-12 sm:px-6 lg:px-8 sm:w-3/4  lg:w-2/5 ">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-black">
            Input Admin Credentials
          </h2>

          <div className="bg-slate-500 py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={handleSignIn} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300"
                >
                  Email address
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"></div>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className=" block w-full px-3 py-2 pl-10 bg-white border border-gray-600 
									rounded-md shadow-sm
									 placeholder-gray-400 focus:outline-none focus:ring-orange-500 
									 focus:border-orange-500 sm:text-sm"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-300"
                >
                  Password
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"></div>
                  <input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className=" block w-full px-3 py-2 pl-10 bg-white border border-gray-600 
									rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent 
							rounded-md shadow-sm text-sm font-medium text-white bg-orange-600
							 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2
							  focus:ring-orange-500 transition duration-150 ease-in-out disabled:opacity-50"
              >
                Log in
              </button>
            </form>

            <p className="mt-8 text-center font-semibold  text-black">
              Not an admin?{" "}
              <Link
                href="/"
                className="font-medium text-orange-400 hover:text-orange-300"
              >
                Home
              </Link>
            </p>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
