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
        <div className="text-white bg-[url(/XIM-BG2.jpg)] relative bg-no-repeat bg-cover bg-fixed primary-padding py-32">
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
                Organized By School of Computer Science & Engineering, XIM
                University, Bhubaneswar (New Campus), Harirajpur
              </p>
              <span className="font-[SatoshiRegular] uppercase text-lg bg-[#ffffff26] py-3 px-6 rounded-xl backdrop-blur-[13px]">
                August 28<span className="font-serif"> - </span>30, 2025
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
      <section className="grid grid-cols-1 lg:grid-cols-3  py-10">
        <div className="flex flex-col gap-10 items-center">
          <h3 className="text-center text-2xl sm:text-2xl font-[SatoshiBold] uppercase">
            Organized By
          </h3>
          <a href="https://xim.edu.in/">
            <img src="/XIM.png" alt="XIM University" className="w-44 h-44" />
          </a>
        </div>

        <div className="flex flex-col gap-10 items-center max-sm:mt-16">
          <h3 className="text-center text-2xl sm:text-2xl font-[SatoshiBold] uppercase">
            Technically <span className="whitespace-nowrap">Co-Sponsored</span>{" "}
            By
          </h3>

          <div className="flex flex-col gap-5">
            <div className="flex flex-row gap-5">
              <a href="https://www.ieee.org/">
                <img src="/IEEE-official.png" alt="IEEE" className="w-40" />
              </a>

              <a href="https://ewh.ieee.org/r10/calcutta/">
                <img
                  src="/IEEE-kolkata.png"
                  alt="IEEE Kolkata"
                  className="w-40 h-full"
                />
              </a>
            </div>
            <div className="flex flex-row gap-5">
              <a href="https://site.ieee.org/bhubaneswar/">
                <img
                  src="/ieee-bhubaneswar.png"
                  alt="IEEE Kolkata Bhubaneswar Joint Chapter"
                  className="w-40 h-full"
                />
              </a>
              <a href="https://futurenetworks.ieee.org/">
                <img
                  src="/ieee-future-networks-logo.png"
                  alt="IEEE Future Networks"
                  className="w-40"
                />
              </a>
            </div>
            <div className="flex flex-row gap-5 justify-center">
              <a href="https://edu.ieee.org/in-ximub/">
                <img src="/IEEE-xim.png" alt="IEEE XIM" className="w-40" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 items-center max-sm:mt-16">
          <h3 className="text-center text-2xl sm:text-2xl font-[SatoshiBold] uppercase">
            In partnership with IAJES
          </h3>
          <a href="https://www.iajes.org/">
            <img src="/iajes.png" alt="XIM University" className="w-44 h-44" />
          </a>
        </div>
      </section>

      {/* Record number */}
      <section className=" flex flex-col items-center gap-5 py-10 overflow-hidden">
        <span className="text-xl font-[SatoshiRegular]">
          Conference Record Number: 65052
        </span>

        <p className="font-[SatoshiBold] animate-moveRightToLeft hover:animate-none  text-lg whitespace-nowrap">
          {/* All accepted and presented papers will be submitted for inclusion in
          IEEE Xplore® Indexed By Scopus®.  */}
          Accepted papers will be submitted for inclusion in IEEE Xplore,
          subject to meeting IEEE Xplore’s scope and quality requirements.
          Indexed by Scopus®.
        </p>
      </section>

      {/* About XIM University */}
      <section className="primary-padding py-10 sm:py-16  border-t border-input flex flex-row">
        {/* <TextSection
          titlel1="About"
          titlel2="XIM University"
          text="XIM University sees itself as a global university delivering quality education to deserving meritorious students. The XIM University affirms its mission of excellent quality higher education. It aspires to lead the country in management education by focusing on research and innovation. Our intellectual capital rankings have been in the top five in the country consistently. The excellence we have lived through the years has become an example, a legend for all to imitate and follow. This aligns with our motto – Semper Excelsius – Ever Higher."
        /> */}

        <div className="flex flex-col xl:flex-row gap-10">
          <div className="bg-inherit flex flex-col flex-1 gap-5">
            <div className="">
              <h2 className="font-bold font-[SatoshiBold] text-5xl uppercase">
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
                education. It aspires to lead the country in multidisciplinary
                education by focusing on research and innovation. Our
                intellectual capital rankings have been in the top five in the
                country consistently. The excellence we have lived through the
                years has become an example, a legend for all to imitate and
                follow. This aligns with our motto – Semper Excelsius – Ever
                Higher.
                <br />
                {/* The School of Computer Science & Engineering is a unique school
                that leverages the high-quality programs of XIM University and
                emphasizes sound computer science fundamentals, coding,
                research, innovation, and entrepreneurship. It currently offers
                B.Tech. (Hons.) in Computer Science & Engineering, M. Tech in
                Computer Science and Engineering, specialization in Data
                Science, and Ph.D in Computer Science and Engineering. */}
                <a
                  href="https://xim.edu.in/"
                  className="text-gray-500 text-base hover:cursor-pointer hover:underline"
                >
                  Learn more
                </a>
              </p>
            </div>
          </div>

          <div className="overflow-x-auto grid grid-cols-1">
            <ImportantDates />
          </div>
        </div>
      </section>

      <section className="primary-padding py-10 sm:py-16  border-t border-input flex flex-row">
        <TextSection
          titlel1="About"
          titlel2="SCSE"
          text="The School of Computer Science & Engineering is a unique school that leverages the high-quality programs of XIM University and emphasizes sound computer science fundamentals, coding, research, innovation, and entrepreneurship. It currently offers B.Tech. (Hons.) in Computer Science & Engineering, M. Tech in Computer Science and Engineering, specialization in Data Science, and Ph.D in Computer Science and Engineering."
          link="https://scse.xim.edu.in/"
        />
      </section>

      {/* About ICAIET */}
      <section className="primary-padding py-10 sm:py-16  border-t border-input  flex flex-col items-center gap-20">
        <TextSection
          titlel1="About"
          titlel2="ICAIET 2025"
          text="The world, including India, is set to adopt advanced technologies such as 5G, Artificial Intelligence (AI), blockchain, augmented reality and virtual reality (AR/VR), machine learning, neural networks and deep learning, data mining, computer vision, image processing, natural language processing (NLP), information retrieval, internet of things (IoT), cyber-physical systems (including robotics and drones), network security, cyber security and privacy, cloud computing, etc. AI and emerging technologies are at the forefront of a transformative wave that is reshaping various sectors, from healthcare and finance to education and entertainment. These technologies are not only revolutionizing the way we live and work but also pushing the boundaries of what is possible in science and industry. The rapid advancements and breakthroughs in AI, coupled with the integration of emerging technologies, present both unprecedented opportunities and complex challenges. It is essential for both academia and industry to remain at the cutting edge of these developments to harness their full potential. These technologies will be crucial for government and industry in strategic planning, decision-making, development acceleration, deployment analysis, problem-solving, product innovation, trend detection, and identifying connections and relationships.
          The INTERNATIONAL CONFERENCE ON ARTIFICIAL INTELLIGENCE AND EMERGING TECHNOLOGIES (ICAIET) - 2025 is dedicated to serving as a premier platform for this purpose. Designed to bring together a diverse group of leading industry experts, academicians, researchers, and practitioners from across the globe, ICAIET 2025 fosters an environment of knowledge exchange and collaboration. The conference aims to accelerate the growth and application of AI and emerging technologies in various domains, highlighting their critical role in driving sustainable development, enhancing efficiency, and improving the quality of life."
        />

        <div className="flex flex-col md:flex-row gap-3 md:gap-7">
          <a
            href="https://cmt3.research.microsoft.com/ICAIET2025"
            className="w-full whitespace-nowrap flex flex-row items-center gap-3 px-16 py-4 bg-[#ccf2f4] border-[#a4ebf3] transition-all duration-300 hover:backdrop-blur-0 hover:gap-5 backdrop-blur-[1.25rem] text-lg uppercase rounded-full border"
          >
            Submit Paper <ArrowRight size={24} />
          </a>
          <a
            href="https://forms.gle/P7TStcoWdnRMoQtd7"
            className="w-full whitespace-nowrap flex flex-row items-center gap-3 px-16 py-4 bg-[#ccf2f4] border-[#a4ebf3] transition-all duration-300 hover:backdrop-blur-0 hover:gap-5 backdrop-blur-[1.25rem] text-lg uppercase rounded-full border"
          >
            Submit Poster <ArrowRight size={24} />
          </a>
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
