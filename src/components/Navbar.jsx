import { Link, useLocation, Navigate, useNavigate } from "react-router-dom";
import clsx from "clsx";
import { useEffect, useState } from "react";

const links = [
  { href: "/", text: "Home" },
  { href: "/products", text: "Products" },
];

export default function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggetIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    token ? setIsLoggetIn(true) : setIsLoggetIn(false);
  }, []);

  function handleLoginLogout() {
    if (isLoggedIn) {
      localStorage.removeItem("token");
      setIsLoggetIn(false);
      navigate("/login");
    }

    if (!isLoggedIn) {
      navigate("/login");
    }
  }

  return (
    <nav className="w-full flex items-center justify-center gap-6 px-6 py-3 border-b border-neutral-700 bg-[#1a1a1a] shadow-md">
      {links.map((link, idx) => (
        <Link
          key={idx}
          to={link.href}
          className={clsx(
            "relative text-base font-medium px-3 py-2 rounded-md transition-colors duration-300",
            location.pathname === link.href
              ? "text-cyan-400"
              : "text-gray-300 hover:text-white hover:bg-neutral-700"
          )}
        >
          {link.text}
          {location.pathname === link.href && (
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400 rounded-full"></span>
          )}
        </Link>
      ))}

      <div
        onClick={handleLoginLogout}
        className={clsx(
          "relative cursor-pointer text-base font-medium px-3 py-2 rounded-md transition-colors duration-300",
          isLoggedIn
            ? "text-red-400 hover:text-white hover:bg-red-600"
            : "text-gray-300 hover:text-white hover:bg-neutral-700"
        )}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </div>
    </nav>
  );
}
