import React from "react";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-gray-950 border-b border-white/10">
            <div className="max-w-5xl mx-auto px-6">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <a
                        href="#home"
                        className="font-mono text-xl font-bold text-white"
                    >
                        Patrick
                        <span className="text-blue-500">.tech</span>
                    </a>

                    {/* Navigation */}
                    <div className="flex items-center gap-8">
                        <a
                            href="#home"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            Home
                        </a>

                        <a
                            href="#about"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            About
                        </a>

                        <a
                            href="#projects"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            Projects
                        </a>

                        <a
                            href="#contacts"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            Contact
                        </a>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;