import Navbar from "../lib/components/site-header";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="relative">
        <div className="absolute inset-0 bg-[rgb(0,0,0/50)] h-screen"></div>
        <div className="bg-[url(/bg2.webp)] relative h-screen bg-no-repeat bg-cover text-white px-20 py-32">
          <div className="flex flex-col gap-5">
            <div>
              <span className="font-[SatoshiBold] text-[3rem] uppercase leading-[0.9] text-outline">
                International Conference on
              </span>
              <br />
              <span className="font-[SatoshiBold] text-[4rem] uppercase leading-tight text-white">
                Artificial Intelligence And
              </span>
              <br />
              <span className="font-[SatoshiBold] text-[4rem] uppercase leading-tight text-white">
                Emerging Technologies
              </span>
              <br />
              <div className="flex flex-row items-center space-x-10">
                <span className="font-[SatoshiBold] text-[4rem] uppercase leading-tight text-white">
                  (ICAIET) - 2025
                </span>
                <a
                  href="test"
                  className="flex flex-row items-center gap-3 px-10 py-5 bg-[#ffffff3d] backdrop-blur-[1.25rem] text-lg uppercase rounded-full border border-[#fff]"
                >
                  Register Now <ArrowRight size={24} />
                </a>
              </div>
            </div>

            <div className="flex flex-col items-start gap-3">
              <span className="font-[SatoshiBold] uppercase text-lg bg-[#ffffff26] py-3 px-6 rounded-lg backdrop-blur-[13px]">
                August 28<sup>th</sup>–30<sup>th</sup>, 2025
              </span>
              <p className="font-[SatoshiBold] text-xl uppercase">
                School of Computer Science and Engineering, XIM University
                Bhubaneswar (New Campus), Harirajpur
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
