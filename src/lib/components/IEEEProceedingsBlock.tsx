import React from "react";
import { ArrowUpRight } from "lucide-react";

const IEEEProceedingsBlock: React.FC = () => {
    return (
        <section className="primary-padding py-16 bg-[#156D94] text-white relative overflow-hidden">
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-6 animate-fadeUp">
                <span className="uppercase tracking-widest text-sm bg-white/20 px-4 py-2 rounded-full backdrop-blur-md">
                    IEEE Proceedings 2025
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[SatoshiBold] leading-tight">
                    ICAIET 2025 Published in IEEE Xplore
                </h2>
                <p className="max-w-3xl text-lg text-white/90">
                    The accepted and presented papers of ICAIET 2024 have been
                    successfully published in IEEE Xplore and indexed by Scopus,
                    ensuring international academic visibility and citation impact.
                </p>
                <a
                    href="https://ieeexplore.ieee.org/xpl/conhome/11210849/proceeding"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-8 py-4 bg-white text-[#156D94] font-semibold uppercase rounded-full transition-all duration-300 hover:gap-5 hover:scale-105"
                >
                    View Proceedings
                    <ArrowUpRight size={20} />
                </a>
            </div>

            <div className="absolute w-[500px] h-[500px] bg-white/10 blur-[160px] rounded-full top-[-150px] right-[-150px] pointer-events-none" />
        </section>
    );
};

export default IEEEProceedingsBlock;
