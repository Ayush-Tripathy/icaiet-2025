"use client";

import { useState, useEffect } from "react";
import { CalendarDays, ChevronDown, Menu, ArrowUpRight } from "lucide-react";
import { Link, } from "react-router-dom";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Committee", href: "/committee" },
    {
      name: "For Authors",
      href: "#",
      items: [
        { name: "Important Dates", href: "/important-dates" },
        { name: "Submission Guidelines", href: "/submission-guidelines" },
        { name: "Camera-Ready Instructions", href: "/camera-ready-instructions" },
      ],
    },
    { name: "Registration", href: "/registration" },
    { name: "Call for Papers", href: "/call-for-papers" },
    { name: "Call for Posters", href: "/call-for-posters" },
    { name: "Speakers", href: "/speakers" },
    {
      name: "Sponsors",
      href: "#",
      items: [
        { name: "Sponsors", href: "/sponsors" },
        { name: "Call for Sponsorship", href: "/call-for-sponsorship" },
      ],
    },
    { name: "Contact", href: "/contact" },
    {
      name: "IEEE Proceedings 2025",
      href: "https://ieeexplore.ieee.org/xpl/conhome/11210849/proceeding",
      external: true,
    },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 backdrop-blur border-b transition-all duration-300 ${isScrolled ? "bg-white text-black border-gray-200" : "bg-transparent text-white border-white/20"
        }`}
    >
      <div className="w-full flex items-center justify-between h-16 px-4 xl:px-8">

        {/* LEFT SECTION */}
        <div className="flex items-center gap-3 shrink-0 h-full">
          <a href="https://xim.edu.in/">
            <img
              src="/XIM.png"
              alt="XIM University"
              className="w-10 h-10 object-contain"
            />

          </a>

          <div className="h-8 border-r border-black/20 self-center" />

          <Link to="/">
            <img
              src="/logo.png"
              alt="ICAIET Logo"
              className="w-8 h-8 object-contain"
            />

          </Link>

          <Link
            to="/"
            className="font-semibold text-base xl:text-lg tracking-wide whitespace-nowrap leading-none"

          >
            ICAIET-2027
          </Link>

          <div className="h-8 border-r border-black/20 self-center mx-4" />

          <div className="hidden xl:flex items-center gap-1 text-sm self-center">

            <CalendarDays className="h-4 w-4" />
            <span>28 - 30 JAN</span>
          </div>
        </div>
        <div className="h-8 border-r border-black/20 self-center mx-4" />

        <div className="hidden xl:flex items-center gap-1 text-sm self-center"></div>
        {/* DESKTOP NAV */}
        <nav className="hidden xl:flex items-center flex-1 justify-end">
          <ul className="flex items-center gap-3">
            {menuItems.map((menu) => (
              <li
                key={menu.name}
                className="relative"
                onMouseEnter={() => menu.items && setActiveDropdown(menu.name)}
                onMouseLeave={() => menu.items && setActiveDropdown(null)}
              >
                {menu.external ? (
                  <a
                    href={menu.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm whitespace-nowrap flex items-center gap-1 px-2 py-1 rounded-md hover:bg-white/10 transition"
                  >
                    {menu.name}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <Link
                    to={menu.href}
                    className="text-sm whitespace-nowrap flex items-center gap-1 px-2 py-1 rounded-md hover:bg-white/10 transition"
                  >
                    {menu.name}
                    {menu.items && (
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform ${activeDropdown === menu.name ? "rotate-180" : ""
                          }`}
                      />
                    )}
                  </Link>
                )}

                {/* DROPDOWN */}
                {menu.items && activeDropdown === menu.name && (
                  <div
                    className={`absolute left-0 top-full mt-1 w-52 rounded-md shadow-lg border ${isScrolled
                      ? "bg-white text-black border-gray-200"
                      : "bg-[#0a0b1a]/90 text-white border-white/20"
                      }`}
                  >
                    {menu.items.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block px-4 py-2 text-sm hover:bg-gray-100/20"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="xl:hidden p-2 rounded-md hover:bg-white/10"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="xl:hidden px-4 pb-4 bg-white text-black shadow-lg">
          <ul className="space-y-2">
            {menuItems.map((menu) => (
              <li key={menu.name}>
                {menu.external ? (
                  <a
                    href={menu.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-2 text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {menu.name}
                  </a>
                ) : (
                  <Link
                    to={menu.href}
                    className="block py-2 text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {menu.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
