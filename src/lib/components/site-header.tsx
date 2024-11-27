import * as React from "react";
import { CalendarDays, ChevronDown, MapPin } from "lucide-react";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(
    null
  );

  const handleMouseEnter = (menuItem: string) => {
    setActiveDropdown(menuItem);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <div>
      <header className="sticky px-20 top-0 z-50 w-full border-b bg-[#0a0b1a] text-white">
        <div className="container flex h-16 items-center">
          <div className="flex items-center gap-6">
            <a href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">WaysConf</span>
            </a>
            <div className="flex items-center gap-2 text-sm">
              <CalendarDays className="h-4 w-4" />
              <span>19-20 SEP</span>
              <MapPin className="h-4 w-4 ml-2" />
              <span>EXPO KRAKÓW</span>
            </div>
          </div>

          <nav className="ml-auto relative">
            <ul className="flex space-x-4">
              {[
                {
                  name: "Agenda",
                  items: [
                    "How to get & Venue",
                    "App & Matchmaking",
                    "Side Events",
                  ],
                },
                { name: "Participants", items: ["Speakers", "Attendees"] },
                { name: "Partners", items: ["Sponsors", "Exhibitors"] },
                { name: "WaysConf", items: ["About", "Previous Editions"] },
                { name: "Awards", items: ["Categories", "Previous Winners"] },
                { name: "Startup", items: ["Program", "Apply"] },
              ].map((menu) => (
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
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-[#0a0b1a]/80 backdrop-blur-sm ring-1 ring-black ring-opacity-5">
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
        </div>
      </header>
    </div>
  );
}
