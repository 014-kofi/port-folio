import React, { useEffect } from "react";

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    return (
        <div
            className={`fixed top-0 left-0 w-full h-screen bg-[rgba(10,10,10,0.95)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out
            ${menuOpen
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                }`}
        >
            {/* Close button */}
            <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
                aria-label="Close Menu"
            >
                &times;
            </button>

            {/* Links */}
            <a
                onClick={() => setMenuOpen(false)}
                href="#home"
                className={`text-2xl font-semibold text-white my-4 transition-all duration-300 ${menuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                    }`}
            >
                Home
            </a>

            <a
                onClick={() => setMenuOpen(false)}
                href="#about"
                className={`text-2xl font-semibold text-white my-4 transition-all duration-300 ${menuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                    }`}
            >
                About
            </a>

            <a
                onClick={() => setMenuOpen(false)}
                href="#projects"
                className={`text-2xl font-semibold text-white my-4 transition-all duration-300 ${menuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                    }`}
            >
                Projects
            </a>

            <a
                onClick={() => setMenuOpen(false)}
                href="#contacts"
                className={`text-2xl font-semibold text-white my-4 transition-all duration-300 ${menuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                    }`}
            >
                Contacts
            </a>
        </div>
    );
};

export default MobileMenu;