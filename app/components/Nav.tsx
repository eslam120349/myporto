import React from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "الرئيسية" },
  { to: "/videos", label: "الفيديوهات" },
  { to: "/about", label: "عني" },
  { to: "/contact", label: "تواصل" },
];

export default function Nav() {
  const location = useLocation();
  const [isDark, setIsDark] = React.useState(() => {
    if (typeof document !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });

  React.useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <nav className="fixed top-0 left-0 right-0 backdrop-blur-sm bg-white/70 dark:bg-gray-900/70 shadow-sm z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <span className="font-bold text-blue-600 text-xl dark:text-blue-400"> مستر إسلام</span>
        <ul className="flex gap-6">
          {links.map(({ to, label }) => {
            const active = location.pathname === to;
            return (
              <li key={to}>
                <Link
                  to={to}
                  className={`${
                    active ? "text-blue-700 dark:text-blue-400" : "text-gray-700 dark:text-gray-300"
                  } hover:text-blue-600 dark:hover:text-blue-400 transition font-medium`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
        <button
          aria-label="تبديل السمة"
          onClick={() => setIsDark((d) => !d)}
          className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          {isDark ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M12 2a9.93 9.93 0 00-3.52.64A1 1 0 008 4.47 8 8 0 1019.53 16a1 1 0 00-1.83-.48A9.93 9.93 0 0012 2z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M12 18a6 6 0 110-12 6 6 0 010 12z" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
}