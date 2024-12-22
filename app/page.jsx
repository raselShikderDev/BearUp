import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className=" text-center">
      <div className="container">
        <div className="text-white flex items-center justify-center h-[70vh]">
          <div className="text-center">
            <h2 className="text-3xl pb-4 font-semibold">
              Together, We Make a Difference.
            </h2>
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
                className="px-4  py-1 active:scale-105 hover:bg-gray-200 transition-all hover:text-black bg-blue-950 rounded"
              >
                Join Us
              </Link>
              <Link
                href="#"
                className="px-4  py-1 active:scale-105 hover:bg-gray-200 transition-all hover:text-black bg-blue-950 rounded"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="h-1 bg-white opacity-5"></div>
      <div className="container">
        <Image
        src="/path/to/your/image.jpg"  /
        alt="Description of image"
        width={500}  // Width in pixels
        height={300} // Height in pixels
        />
      </div>
    </section>
  );
}
