"use client";

import * as React from "react";
import { CalendarDays, ChevronDown, MapPin, Menu } from "lucide-react";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(
    null
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleMouseEnter = (menuItem: string) => {
    setActiveDropdown(menuItem);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    {
      name: "Committee",
      items: ["How to get & Venue", "App & Matchmaking", "Side Events"],
    },
    { name: "Participants", items: ["Speakers", "Attendees"] },
    { name: "Partners", items: ["Sponsors", "Exhibitors"] },
    { name: "WaysConf", items: ["About", "Previous Editions"] },
    { name: "Awards", items: ["Categories", "Previous Winners"] },
    { name: "Startup", items: ["Program", "Apply"] },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#2e2e2e] bg-[#0a0b1a] text-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8 lg:px-20">
        <div className="flex items-center gap-4 lg:gap-6">
          <a href="/" className="flex items-center">
            <span className="text-xl font-bold">WaysConf</span>
          </a>
          <div className="hidden lg:flex items-center">
            <div className="h-16 w-px bg-[#2e2e2e]"></div>
          </div>
          <div className="hidden lg:flex items-center gap-2 text-sm">
            <CalendarDays className="h-4 w-4" />
            <span>19-20 SEP</span>
            <div className="h-16 w-0 border-r border-[#2e2e2e] mx-2"></div>
            <MapPin className="h-4 w-4" />
            <span>EXPO KRAKÓW</span>
            <div className="h-16 w-0 border-r border-[#2e2e2e] mx-2"></div>
          </div>
        </div>

        <nav className="hidden lg:flex items-center relative ml-8">
          <ul className="flex space-x-4">
            {menuItems.map((menu) => (
              <li
                key={menu.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(menu.name)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href="#"
                  className="flex items-center px-3 py-2 hover:bg-white/10 rounded-md transition-colors duration-200"
                >
                  {menu.name}
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                      activeDropdown === menu.name ? "rotate-180" : ""
                    }`}
                  />
                </a>
                {activeDropdown === menu.name && (
                  <div className="absolute left-0 top-full mt-0 w-48 rounded-md shadow-lg bg-[#0a0b1a]/80 backdrop-blur-sm ring-1 ring-black ring-opacity-5">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      {menu.items.map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="block px-4 py-2 text-sm text-white hover:bg-white/10"
                          role="menuitem"
                        >
                          {item}
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
        <div className="lg:hidden bg-[#0a0b1a] py-4">
          <ul className="space-y-2">
            {menuItems.map((menu) => (
              <li key={menu.name} className="px-4">
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
                      <li key={item}>
                        <a
                          href="#"
                          className="block py-1 text-sm text-white/80 hover:text-white"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
