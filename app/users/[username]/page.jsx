import Image from "next/image";
import Link from "next/link";

const User = ({ params }) => {
  return (
    <section>
      <div className="w-full h-[340px] relative">
        <img
          src="/jb2a-cover.gif"
          className="object-cover w-full"
          alt="cover"
        />
        <div className="absolute -bottom-[23%] left-[45%]">
          <Image
            src="/Flaming.gif"
            width={140}
            height={140}
            className="object-cover rounded-full shadow-sm drop-shadow-md shadow-gray-700"
            alt="profile"
          />
        </div>
      </div>
      <div className="bg-gray-800/50 w-full py-10">
        <div className="container text-center">
          <h2 className="text-3xl font-semibold pt-5 mt-10">
            <Link href="#">JB2A - Jules&Ben's Animated Assets</Link>
          </h2>
          <h4 className=" text-gray-200 py-1">
            <Link href="#">Creating Animated art for VTT's</Link>
          </h4>
          <ul className="flex items-center gap-3 pb-5 justify-center text-[#ffffff99]">
            <li>
              <Link href="#">15,750 members</Link>
            </li>
            <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[5px] before:h-[5px] before:bg-white/50 before:rounded-full">
              <Link href="#">93 Posts</Link>
            </li>
            <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[5px] before:h-[5px] before:bg-white/50 before:rounded-full">
              <Link href="#">$16,460/release</Link>
            </li>
          </ul>
          <button className="text-black bg-gray-200 hover:bg-slate-300 active:scale-105 font-semibold px-10 py-2 rounded-md">
            Join for free
          </button>
        </div>
        <div className="container">
          <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 justify-center items-center pt-10">
            <div className="w-full min-h-80  bg-slate-800/60 rounded">
              <h2 className="text-lg font-semibold text-gray-100 border-b py-2 px-3 border-gray-600 border-spacing-2">
                <span className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[5px] before:h-[5px] before:bg-white/50 before:rounded-full">
                  {" "}
                </span>
                Fans messages
              </h2>
              <div className="px-7 max-h-64 pt-3 flex flex-col gap-2 overflow-y-scroll ">
                <Link href="#">
                  {" "}
                  <p className="text-white/60 hover:text-white/80">
                    Someone contributed $70...
                  </p>
                </Link>
                <Link href="#">
                  <p className="text-white/60 hover:text-white/80">
                    Users0782 send you a message...
                  </p>
                </Link>
                <Link href="#">
                  <p className="text-white/60 hover:text-white/80">
                    Someone Donated with a message...
                  </p>
                </Link>
                <Link href="#">
                  {" "}
                  <p className="text-white/60 hover:text-white/80">
                    Someone contributed $70...
                  </p>
                </Link>
                <Link href="#">
                  <p className="text-white/60 hover:text-white/80">
                    Users0782 send you a message...
                  </p>
                </Link>
                <Link href="#">
                  <p className="text-white/60 hover:text-white/80">
                    Someone Donated with a message...
                  </p>
                </Link>
                <Link href="#">
                  <p className="text-white/60 hover:text-white/80">
                    Anonymous send you a message...
                  </p>
                </Link>
                <Link href="#">
                  <p className="text-white/60 hover:text-white/80">
                    Someone Donated with a message...
                  </p>
                </Link>
                <Link href="#">
                  {" "}
                  <p className="text-white/60 hover:text-white/80">
                    Someone contributed $70...
                  </p>
                </Link>
                <Link href="#">
                  <p className="text-white/60 hover:text-white/80">
                    Users0782 send you a message...
                  </p>
                </Link>
                <Link href="#">
                  <p className="text-white/60 hover:text-white/80">
                    Someone Donated with a message...
                  </p>
                </Link>
                <Link href="#">
                  {" "}
                  <p className="text-white/60 hover:text-white/80">
                    Someone contributed $70...
                  </p>
                </Link>
                <Link href="#">
                  <p className="text-white/60 hover:text-white/80">
                    Users0782 send you a message...
                  </p>
                </Link>
                <Link href="#">
                  <p className="text-white/60 hover:text-white/80">
                    Someone Donated with a message...
                  </p>
                </Link>
                <Link href="#">
                  <p className="text-white/60 hover:text-white/80">
                    Anonymous send you a message...
                  </p>
                </Link>
                <Link href="#">
                  <p className="text-white/60 hover:text-white/80">
                    Someone Donated with a message...
                  </p>
                </Link>
              </div>
            </div>
            <div className="w-full min-h-80 bg-slate-800/60 rounded">
              <h2 className="text-lg font-semibold text-gray-100 border-b py-2 px-3 border-gray-600 border-spacing-2">
                <span className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[5px] before:h-[5px] before:bg-white/50 before:rounded-full">
                  {" "}
                </span>
                Make Payment
              </h2>
              <div className="px-7 max-h-64 pt-3 flex flex-col gap-2 ">
                <form className="pt-3 space-y-5">
                  <div className="w-full space-y-3">
                    <input className="bg-transparent focus:outline-none w-full py-1 border border-gray-700 px-3 rounded " type="name" name="text" id="" placeholder="Full Name" />
                    <input className="bg-transparent focus:outline-none w-full py-1 border border-gray-700 px-3 rounded " type="number" name="number" id="" placeholder="Number" />
                    <input className="bg-transparent focus:outline-none w-full py-1 border border-gray-700 px-3 rounded " type="number" name="amount" id="" placeholder="Amount" />
                  </div>
                  <div className="space-x-3">
                    <button className="py-1 px-4 bg-gray-700 hover:bg-gray-600 text-slate-200 rounded active:bg-slate-900">Pay 5$</button>
                    <button className="py-1 px-4 bg-gray-700 hover:bg-gray-600 text-slate-200 rounded active:bg-slate-900">Pay 10$</button>
                    <button className="py-1 px-4 bg-gray-700 hover:bg-gray-600 text-slate-200 rounded active:bg-slate-900">Pay 20$</button>
                    <button className="py-1 px-4 bg-gray-700 hover:bg-gray-600 text-slate-200 rounded active:bg-slate-900">Pay 50$</button>
                  </div>
                  <button type="button" className="text-white bg-gradient-to-br w-full from-purple-900 to-blue-900 hover:bg-gradient-to-br active:scale-95 hover:from-purple-700 hover:to-blue-700  dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2">Payment</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default User;
