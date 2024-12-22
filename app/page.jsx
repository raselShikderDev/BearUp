import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="text-white text-center mt-16">
      <div className="container">
        <div className="text-white flex items-center justify-center h-[50vh]">
          <div className="text-center text-lg">
            <h2 className="text-4xl pb-4 ">Together, We Make a Difference.</h2>
            <p className="flex flex-col pb-3 text-slate-200">
              <span>Your support helps us build something great.</span>
              <span>
                Every donation, no matter the size, makes a real impact.
              </span>
              <span>
                Contribute today and be part of a movement that changes lives.
              </span>
            </p>
            <div className="space-x-3">
              <Link
                href="#"
                className="px-4 py-1 active:scale-105 hover:bg-gray-200 transition-all hover:text-black bg-blue-950/60 rounded"
              >
                Join Us
              </Link>
              <Link
                href="#"
                className="px-4 py-1 active:scale-105 hover:bg-gray-200 transition-all hover:text-black bg-blue-950/60 rounded"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white bg-opacity-5 h-[2px] w-full"></div> 
      <div className="container mt-6 text-lg">
        <h3 className="text-3xl">Fans can Support</h3>
        <div className="grid justify-items-center justify-center items-center grid-cols-1 sm:grid-cols-3 my-10">
          <div className="w-full sm:w-1/3 ">
            <div className="flex flex-col items-center justify-center self-center">
              <Image
                src="/man.gif"
                alt="Description of image"
                width={50}
                height={30}
                className="bg-gray-500 rounded-full "
              />
              <p className="text-base">Fund Yourself</p>
            </div>
          </div>
          <div className="w-full sm:w-1/3">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/man.gif"
                alt="Description of image"
                width={50}
                height={30}
                className="bg-gray-500 rounded-full "
              />
              <p className="text-base">Fund Yourself</p>
            </div>
          </div>
          <div className="w-full sm:w-1/3">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/man.gif"
                alt="Description of image"
                width={50}
                height={30}
                className="bg-gray-500 rounded-full "
              />
              <p className="text-base">Fund Yourself</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
