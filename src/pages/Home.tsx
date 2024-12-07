import TextSection from "@/lib/components/TextSection";
import { ArrowRight } from "lucide-react";
import CountdownTimer from "@/lib/components/CountdownTimer";
import ImportantDates from "@/lib/components/ImportantDates";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-[#f4f9f9] text-black">
      <div className="relative">
        {/* <div className="absolute inset-0 bg-[rgb(0,0,0/50)] h-screen"></div> */}
        <div className="text-white bg-[url(/XIM-BG2.jpg)] relative bg-no-repeat bg-cover bg-fixed px-3 sm:px-10 lg:px-20 py-32">
          <div className="flex flex-col gap-5">
            <div className="text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] sm:uppercase">
              <span className="hidden xl:inline-block font-[SatoshiBold] text-[1rem] sm:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] uppercase leading-[0.9] text-outline-white">
                International Conference on
              </span>

              <span className="inline-block xl:hidden font-[SatoshiRegular] text-[1rem] sm:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] uppercase leading-[0.9]">
                International Conference on
              </span>

              <br />
              <span className="font-[SatoshiBold] leading-tight">
                Artificial Intelligence And
              </span>
              <br />
              <span className="font-[SatoshiBold] leading-tight">
                Emerging Technologies
              </span>
              <br />
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-10">
                <span className="font-[SatoshiBold] leading-tight">
                  (ICAIET) - 2025
                </span>
              </div>
            </div>

            <div className="flex flex-col items-start gap-3">
              <p className="font-[SatoshiRegular] text-base sm:text-lg lg:text-xl uppercase">
                School of Computer Science and Engineering, XIM University,
                Bhubaneswar (New Campus), Harirajpur
              </p>
              <span className="font-[SatoshiRegular] uppercase text-lg bg-[#ffffff26] py-3 px-6 rounded-xl backdrop-blur-[13px]">
                August 28<sup>th</sup>–30<sup>th</sup>, 2025
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Countdown timer */}
      <section className="flex items-center justify-center py-10">
        <CountdownTimer targetDate="2025-08-28T11:00:00" />
      </section>

      {/* Organized By */}
      <section className="flex flex-col lg:flex-row justify-center gap-32 py-10">
        <div className="flex flex-col gap-10 items-center">
          <h3 className="text-center text-2xl sm:text-4xl font-[SatoshiBold] uppercase">
            Organized By
          </h3>
          <img src="/XIM_logo.png" alt="XIM University" className="w-40 h-40" />
        </div>

        <div className="flex flex-col gap-10 items-center">
          <h3 className="text-center text-2xl sm:text-4xl font-[SatoshiBold] uppercase">
            Technically Co-Sponsored By
          </h3>

          <div className="flex flex-col gap-5">
            <div className="flex flex-row gap-5">
              <img src="/IEEE-official.png" alt="IEEE" className="w-40" />
              <img
                src="/IEEE-kolkata.png"
                alt="IEEE Kolkata"
                className="w-40"
              />
            </div>
            <div className="flex flex-row gap-5">
              <img
                src="/ieee-kolkata-bbsr-joint.png"
                alt="IEEE Kolkata Bhubaneswar Joint Chapter"
                className="w-40"
              />
              <img src="/IEEE-xim.png" alt="IEEE XIM" className="w-40" />
            </div>
          </div>
        </div>
      </section>

      {/* Record number */}
      <section className=" flex flex-col items-center gap-5 py-10 overflow-hidden">
        <span className="text-xl font-[SatoshiRegular]">
          Conference Record Number: 65052
        </span>

        <p className="font-[SatoshiBold] animate-moveRightToLeft text-lg whitespace-nowrap">
          All accepted and presented papers will be submitted for inclusion in
          IEEE Xplore® Indexed By Scopus®
        </p>
      </section>

      {/* About XIM University */}
      <section className="px-3 sm:px-10 lg:px-20 py-16 sm:py-36  border-t border-input flex flex-row">
        {/* <TextSection
          titlel1="About"
          titlel2="XIM University"
          text="XIM University sees itself as a global university delivering quality education to deserving meritorious students. The XIM University affirms its mission of excellent quality higher education. It aspires to lead the country in management education by focusing on research and innovation. Our intellectual capital rankings have been in the top five in the country consistently. The excellence we have lived through the years has become an example, a legend for all to imitate and follow. This aligns with our motto – Semper Excelsius – Ever Higher."
        /> */}

        <div className="flex flex-col xl:flex-row gap-10">
          <div className="bg-inherit flex flex-col flex-1 gap-5">
            <div className="">
              <h2 className="font-bold  font-[SatoshiBold] text-5xl uppercase">
                <span className="text-outline">About</span>
                <br />
                XIM University
              </h2>
            </div>

            <div className="">
              <p className=" text-opacity-[0.6] text-lg text-justify">
                XIM University sees itself as a global university delivering
                quality education to deserving meritorious students. The XIM
                University affirms its mission of excellent quality higher
                education. It aspires to lead the country in management
                education by focusing on research and innovation. Our
                intellectual capital rankings have been in the top five in the
                country consistently. The excellence we have lived through the
                years has become an example, a legend for all to imitate and
                follow. This aligns with our motto – Semper Excelsius – Ever
                Higher.
                <br />
                The School of Computer Science & Engineering is a unique school
                that leverages the high-quality programs of XIM University and
                emphasizes sound computer science fundamentals, coding,
                research, innovation, and entrepreneurship. It currently offers
                B.Tech. (Hons.) in Computer Science & Engineering, M. Tech in
                Data Science & Analytics, and Ph.D in Computer Science and
                Engineering.{" "}
                <a
                  href="https://xim.edu.in/"
                  className="text-gray-500 text-base hover:cursor-pointer hover:underline"
                >
                  Learn more
                </a>
              </p>
            </div>
          </div>

          <div className="overflow-x-auto max-sm:max-w-[calc(100vw-50px)]">
            <ImportantDates />
          </div>
        </div>
      </section>

      {/* About ICAIET */}
      <section className="px-3 sm:px-10 lg:px-20 py-16 sm:py-36  border-t border-input  flex flex-col items-center gap-20">
        <TextSection
          titlel1="About"
          titlel2="ICAIET 2025"
          text="The world, including India, is set to adopt advanced technologies such as 5G, Artificial Intelligence (AI), blockchain, augmented reality and virtual reality (AR/VR), machine learning, neural networks and deep learning, data mining, computer vision, image processing, natural language processing (NLP), information retrieval, internet of things (IoT), cyber-physical systems (including robotics and drones), network security, cyber security and privacy, cloud computing, etc. AI and emerging technologies are at the forefront of a transformative wave that is reshaping various sectors, from healthcare and finance to education and entertainment. These technologies are not only revolutionizing the way we live and work but also pushing the boundaries of what is possible in science and industry. The rapid advancements and breakthroughs in AI, coupled with the integration of emerging technologies, present both unprecedented opportunities and complex challenges. It is essential for both academia and industry to remain at the cutting edge of these developments to harness their full potential. These technologies will be crucial for government and industry in strategic planning, decision-making, development acceleration, deployment analysis, problem-solving, product innovation, trend detection, and identifying connections and relationships.
          The INTERNATIONAL CONFERENCE ON ARTIFICIAL INTELLIGENCE AND EMERGING TECHNOLOGIES (ICAIET) - 2025 is dedicated to serving as a premier platform for this purpose. Designed to bring together a diverse group of leading industry experts, academicians, researchers, and practitioners from across the globe, ICAIET 2025 fosters an environment of knowledge exchange and collaboration. The conference aims to accelerate the growth and application of AI and emerging technologies in various domains, highlighting their critical role in driving sustainable development, enhancing efficiency, and improving the quality of life."
        />

        <div className="flex flex-col md:flex-row gap-3 md:gap-7">
          <Link
            to="/call-for-papers"
            className="w-full whitespace-nowrap flex flex-row items-center gap-3 px-16 py-4 bg-[#ccf2f4] border-[#a4ebf3] transition-all duration-300 hover:backdrop-blur-0 hover:gap-5 backdrop-blur-[1.25rem] text-lg uppercase rounded-full border"
          >
            Call For Paper <ArrowRight size={24} />
          </Link>
          <Link
            to="/registration"
            className="w-full whitespace-nowrap flex flex-row items-center gap-3 px-16 py-4 bg-[#ccf2f4] border-[#a4ebf3] transition-all duration-300 hover:backdrop-blur-0 hover:gap-5 backdrop-blur-[1.25rem] text-lg uppercase rounded-full border"
          >
            Register Now <ArrowRight size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
