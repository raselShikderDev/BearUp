"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/login");
    }
  }, [session, router]);
   if (status === "loading") {
    return <p>Loading...</p>;
  }
  const { username, email, id } = session.user;
  if (username.length > 2) {
    console.log(username, email, id);
    
  }
  return (
    <section>
      <div className="container">
        <h2 className="mt-10 text-4xl font-semibold text-center">Welcome to your Dashboard</h2>
        <div className="w-3/4 mx-auto">
          <form className="w-full pt-5">
          <div className="w-full space-y-3">
            <input
              className="bg-transparent focus:outline-none w-full py-1 border border-gray-700 px-3 rounded "
              type="text"
              name="fullName"
               
              placeholder="Full Name"
              />
              <input
              className="bg-transparent focus:outline-none w-full py-1 border border-gray-700 px-3 rounded "
              type="email"
              name="email"
               
              placeholder="Email Address"
              />
              <input
              className="bg-transparent focus:outline-none w-full py-1 border border-gray-700 px-3 rounded "
              type="username"
              name="username"
               
              placeholder="username"
            />
            <input
              className="bg-transparent focus:outline-none w-full py-1 border border-gray-700 px-3 rounded "
              type="number"
              name="number"
               
              placeholder="Number"
            />
            
              <input
              className="bg-transparent focus:outline-none w-full py-1 border border-gray-700 px-3 rounded "
              type="text"
              name="country"
               
              placeholder="Your Country"
            />
              <input
              className="bg-transparent focus:outline-none w-full py-1 border border-gray-700 px-3 rounded "
              type="address"
              name="text"
               
              placeholder="Full Address"
              />
              <input
              className="bg-transparent focus:outline-none w-full py-1 border border-gray-700 px-3 rounded "
              type="text"
              name="credentials"
               
              placeholder="Payment Method"
              />
              <input
              className="bg-transparent focus:outline-none w-full py-1 border border-gray-700 px-3 rounded "
              type="password"
              name="methodId"
               
              placeholder="Payment ID"
              />
              <input
              className="bg-transparent focus:outline-none w-full py-1 border border-gray-700 px-3 rounded "
              type="password"
              name="methodKey"
               
              placeholder="Payment Key"
              />
              <button type="button" className="text-white bg-gradient-to-br w-full from-purple-900 to-blue-900 hover:bg-gradient-to-br active:scale-95 hover:from-purple-700 hover:to-blue-700  dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2">Save</button>
          </div>
        </form>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
