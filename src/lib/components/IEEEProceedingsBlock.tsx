"use client";
import React, { useState } from "react";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";

const IEEEProceedingsBlock: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const proceedings = [
        {
            name: "IEEE Proceedings 2025",
            href: "https://ieeexplore.ieee.org/xpl/conhome/11210849/proceeding"
        }
    ];

    return (
        <div className="flex flex-col items-center justify-center py-10 bg-[#f4f9f9]">
            <div className="relative z-10">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`
                        group relative overflow-hidden bg-[#156D94] text-white px-8 py-4 rounded-xl shadow-xl 
                        hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 w-80 text-center
                        flex items-center justify-center gap-3
                        ${isOpen ? 'ring-4 ring-[#156D94]/20' : ''}
                    `}
                >
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="font-bold text-lg tracking-wide relative z-10">
                        IEEE 2025 Proceedings
                    </span>
                    {isOpen ? (
                        <ChevronUp className="w-5 h-5 relative z-10" />
                    ) : (
                        <ChevronDown className="w-5 h-5 relative z-10" />
                    )}
                </button>

                {/* Dropdown Items */}
                <div
                    className={`
                        absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 origin-top
                        ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}
                    `}
                >
                    <div className="flex flex-col p-1">
                        {proceedings.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#156D94] rounded-lg transition-colors group/item"
                            >
                                <span className="font-medium text-sm">{item.name}</span>
                                <ArrowUpRight className="w-4 h-4 opacity-50 group-hover/item:opacity-100 transition-opacity" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IEEEProceedingsBlock;
