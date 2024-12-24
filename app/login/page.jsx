"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
const Login = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  }, [session, router]);

  return (
    <section className="py-14 text-white">
      <div className="container">
        <h2 className="text-3xl pb-4 text-center">
          LogIn to get your fans Support
        </h2>
        <div className="flex justify-center items-center">
          <div className="flex flex-col gap-2 min-h-screen p-10">
            {/* Google Button */}
            <button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              <svg
                className="h-6 w-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-0.5 0 48 48"
              >
                <g fill="none" fillRule="evenodd">
                  <g transform="translate(-401 -860)">
                    <g transform="translate(401 860)">
                      <path
                        fill="#FBBC05"
                        d="M9.83 24c0-1.52.25-2.98.71-4.36L2.62 13.6C1.08 16.73.21 20.26.21 24c0 3.74.87 7.26 2.41 10.39l7.9-6.05a14.33 14.33 0 01-.7-4.34z"
                      />
                      <path
                        fill="#EB4335"
                        d="M23.71 10.13c3.3 0 6.3 1.17 8.65 3.1l6.84-6.83C35.03 2.77 29.7.53 23.71.53c-9.29 0-17.27 5.31-21.09 13.07l7.91 6.04c1.82-5.53 6.99-9.52 13.18-9.52z"
                      />
                      <path
                        fill="#34A853"
                        d="M23.71 37.87c-6.16 0-11.36-3.98-13.18-9.52l-7.91 6.04C6.44 42.16 14.43 47.47 23.71 47.47c5.73 0 11.2-2.03 15.31-5.85l-7.51-5.8c-2.12 1.33-4.79 2.05-7.79 2.05z"
                      />
                      <path
                        fill="#4285F4"
                        d="M46.15 24c0-1.39-.21-2.88-.54-4.27h-21.88v9.07h12.6c-.63 3.09-2.34 5.46-4.79 7.01l7.51 5.8C43.34 37.61 46.15 31.65 46.15 24z"
                      />
                    </g>
                  </g>
                </g>
              </svg>
              <span>Continue with Google</span>
            </button>

            {/* Facebook Button */}
            <button className="flex items-center bg-blue-600 text-white border border-blue-600 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <svg
                className="h-6 w-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 2.04c5.52 0 10 4.48 10 10s-4.48 10-10 10-10-4.48-10-10 4.48-10 10-10zM12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0zm2 17h-4v-6h4v6zm-2-7c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                />
              </svg>
              <span>Continue with Facebook</span>
            </button>

            {/* GitHub Button */}
            <button
              onClick={() => signIn("github")}
              className="flex items-center bg-gray-800 text-white border border-gray-800 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
            >
              <svg
                className="h-6 w-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  fill="currentColor"
                  d="M12 0C5.38 0 0 5.38 0 12c0 5.3 3.44 9.8 8.2 11.4.6.1.8-.3.8-.7v-2.6c-3.3.7-4.1-1.5-4.1-1.5-.6-1.5-1.5-2-1.5-2-.8-1-.2-1.4.4-1.4 1.2 0 2 1.2 2.2 1.6 1.3 2.2 3.5 1.6 4.4 1.2.1-.9.5-1.6.9-1.9-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.3-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.3 1-.3 2.1-.3 3.1 0 2.3-1.6 3.3-1.3 3.3-1.3.6 1.6.2 2.8.1 3.1.8.8 1.3 1.9 1.3 3.2 0 4.5-2.7 5.5-5.3 5.8.5.4.9 1.2.9 2v3.1c0 .4.2.8.8.7 4.7-1.6 8.2-6.6 8.2-11.4 0-6.6-5.4-12-12-12z"
                />
              </svg>
              <span>Continue with GitHub</span>
            </button>

            {/* Twitter Button */}
            <button className="flex items-center bg-blue-400 text-white border border-blue-400 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300">
              <svg
                className="h-6 w-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  fill="currentColor"
                  d="M23 3c-.8 0-1.5.3-2.1.8-.7-.8-1.7-1.3-2.8-1.3-2.3 0-4.1 1.9-4.1 4.2 0 .3 0 .6.1.9-3.4-.2-6.4-1.8-8.4-4.3-.3.5-.4 1.2-.4 1.8 0 1.2.6 2.3 1.5 2.9-1.1 0-2.2-.3-3.2-.8-.1.3-.1.6-.1.9 0 1.8 1.3 3.3 3.1 3.7-.3.1-.6.1-.9.1-.2 0-.5-.1-.7-.1.5 1.6 2 2.7 3.8 2.7 4.5 0 7.2-3.7 7.2-7.2 0-.1 0-.3-.1-.4.5-.3.9-.8 1.3-1.3z"
                />
              </svg>
              <span>Continue with Twitter</span>
            </button>

            {/* Email Button */}
            <button className="flex items-center bg-gray-200 text-gray-800 border border-gray-400 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              <svg
                className="h-6 w-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  fill="currentColor"
                  d="M12 12l8 5V7l-8 5-8-5v10l8-5zm0-2L4 7l8 5 8-5-8 5z"
                />
              </svg>
              <span>Continue with Email</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
