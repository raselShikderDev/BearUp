import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="text-white text-center mt-16">
      <div className="container">
        <div className="text-white flex items-center justify-center min-h-[60vh] pb-10">
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
                className="px-4 py-1 font-semibold active:scale-105 hover:bg-white transition-all hover:text-black bg-gradient-to-br from-blue-950/60 to-blue-800 rounded"
              >
                Join Us
              </Link>
              <Link
                href="#"
                className="px-4 py-1 font-semibold active:scale-105 hover:bg-white transition-all hover:text-black bg-gradient-to-br from-blue-950/60 to-blue-800 rounded"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white bg-opacity-5 h-[2px] w-full"></div> 
      <div className="container py-10 text-lg">
        <h3 className="text-3xl pt-10 font-semibold">Fans are the Power</h3>
        <div className="grid justify-items-center justify-center items-center grid-cols-1 sm:grid-cols-3 py-10">
          <div className="w-full sm:w-1/3 ">
            <div className="flex flex-col items-center justify-center self-center">
              <Image
                src="/man.gif"
                alt="Description of image"
                width={50}
                height={30}
                className="bg-gray-500 rounded-full "
              />
              <p className="text-base">Supports Boost Strenths</p>
            </div>
          </div>
          <div className="w-full sm:w-1/3">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/coin.gif"
                alt="Description of image"
                width={50}
                height={30}
                className="bg-gray-500 rounded-full "
              />
              <p className="text-base">Fund to cheer up the Talents</p>
            </div>
          </div>
          <div className="w-full sm:w-1/3">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/group.gif"
                alt="Description of image"
                width={50}
                height={30}
                className="bg-gray-500 rounded-full "
              />
              <p className="text-base mt-2">Community is Source of Power</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white bg-opacity-5 h-[2px] w-full"></div> 
      <div className="container pt-10">
        <h3 className="text-3xl text-center pt-5 font-semibold">Know More</h3>
        <div className="flex items-center justify-center">
          <div className="py-10">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/EbNAXpCnjTg?si=b4Fmgt44NmtdW8I0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        </div>
      </div>
    </section>
  );
}
