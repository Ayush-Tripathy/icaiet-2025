"use client";

import * as React from "react";
import { CalendarDays, ChevronDown, Menu } from "lucide-react";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(
    null
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  const handleMouseEnter = (menuItem: string) => {
    setActiveDropdown(menuItem);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [ignore, setIgnore] = React.useState(false);

  React.useEffect(() => {
    if (window.location.pathname !== "/") {
      setIgnore(true);
    } else {
      setIgnore(false);
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    { name: "Committee", href: "/committee" },
    {
      name: "For Authors",
      href: "#",
      items: [
        { name: "Important Dates", href: "/important-dates" },
        { name: "Submission Guidelines", href: "/submission-guidelines" },
        {
          name: "Camera-Ready Instructions",
          href: "/camera-ready-instructions",
        },
      ],
    },
    { name: "Registration", href: "/registration" },
    { name: "Call for Papers", href: "/call-for-papers" },
    { name: "Speakers", href: "/speakers" },
    {
      name: "Sponsors",
      href: "#",
      items: [
        {
          name: "Sponsors",
          href: "/sponsors",
        },
        {
          name: "Call for Sponsorship",
          href: "/call-for-sponsorship",
        },
      ],
    },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed px-3 sm:px-10 lg:px-20 top-0 z-50 w-full ${
        isScrolled
          ? "border-input text-black"
          : `${ignore ? "" : "border-[#2e2e2e] text-white"}`
      } backdrop-blur border-b transition-colors duration-300`}
    >
      <div className="w-full flex h-16 items-center justify-between px-4 md:px-8 lg:px-2">
        <div className="flex items-center gap-4 lg:gap-6">
          <div className=" gap-2 flex items-center">
            <a href="https://scse.xim.edu.in/">
              <span>
                <img
                  src="/XIM_logo.png"
                  alt="XIM University"
                  className="w-12 h-12"
                />
              </span>
            </a>
            <div
              className={`h-16 w-0 border-r ${
                isScrolled
                  ? "border-input"
                  : `${ignore ? "" : "border-[#2e2e2e]"}`
              }`}
            ></div>
            <a
              href="/"
              className="text-lg xl:text-2xl tracking-widest font-semibold whitespace-nowrap"
            >
              ICAIET-2025
            </a>
          </div>
          <div className="hidden lg:flex items-center">
            <div
              className={`h-16 w-0 border-r ${
                isScrolled
                  ? "border-input"
                  : `${ignore ? "" : "border-[#2e2e2e]"}`
              }`}
            ></div>
          </div>
          <div className="hidden lg:flex items-center gap-2 text-sm">
            <CalendarDays className="h-4 w-4" />
            <span className="whitespace-nowrap">28th-30th AUG</span>
            <div
              className={`h-16 border-r ${
                isScrolled
                  ? "border-input"
                  : `${ignore ? "" : "border-[#2e2e2e]"}`
              } mx-2`}
            ></div>
          </div>
        </div>

        <nav className="hidden lg:flex items-center relative ml-8">
          <ul className="flex space-x-4">
            {menuItems.map((menu) => (
              <li
                key={menu.name}
                className="relative"
                onMouseEnter={() => menu.items && handleMouseEnter(menu.name)}
                onMouseLeave={() => menu.items && handleMouseLeave()}
              >
                <a
                  href={menu.href}
                  className="text-sm xl:text-base whitespace-nowrap flex items-center px-1 py-2 hover:bg-white/10 rounded-md transition-colors duration-200"
                >
                  {menu.name}
                  {menu.items && (
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                        activeDropdown === menu.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </a>
                {menu.items && activeDropdown === menu.name && (
                  <div
                    className={`absolute left-0 top-full mt-0 w-48 rounded-md shadow-lg border ${
                      isScrolled
                        ? "border-input bg-white"
                        : `${ignore ? "" : "border-[#2e2e2e] bg-[#0a0b1a]/80"}`
                    } backdrop-blur-sm ring-1 ring-black ring-opacity-5`}
                  >
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      {menu.items.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={`block px-4 py-2 text-sm  ${
                            isScrolled
                              ? "border-input hover:bg-gray-200"
                              : `${
                                  ignore
                                    ? ""
                                    : "border-[#2e2e2e] hover:bg-white/10"
                                }`
                          }`}
                          role="menuitem"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <button
          onClick={toggleMobileMenu}
          className="lg:hidden p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 ml-auto"
          aria-label="Toggle mobile menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-transparent py-4">
          <ul className="space-y-2 whitespace-nowrap">
            {menuItems.map((menu) => (
              <li key={menu.name} className="px-4">
                {menu.items ? (
                  <>
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === menu.name ? null : menu.name
                        )
                      }
                      className="flex items-center justify-between w-full py-2 text-left"
                    >
                      {menu.name}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          activeDropdown === menu.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {activeDropdown === menu.name && (
                      <ul className="mt-2 ml-4 space-y-2">
                        {menu.items.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className={`block py-1 text-sm ${
                                isScrolled
                                  ? "text-black"
                                  : `${ignore ? "" : "text-white"}`
                              }`}
                            >
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <a href={menu.href} className="block py-2 text-left">
                    {menu.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
