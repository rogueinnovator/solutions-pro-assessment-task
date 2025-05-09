'use client';
import { useState } from 'react';
import { ChevronDown, Menu } from 'lucide-react';

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <div className="sticky top-0 z-30 bg-white/60 w-full px-6 py-4 shadow">
            <div className="flex justify-between items-center">
                <div className="w-16 h-7">
                    <img src="/images/logo.svg" alt="logo" />
                </div>

                <div className="hidden md:flex items-center gap-7">
                    <a href="#home" className="text-black text-xs font-light tracking-wide">HOME</a>
                    <a href="#products" className="text-black text-xs font-light tracking-wide">PRODUCTS</a>
                    <a href="#blogs" className="text-black text-xs font-light tracking-wide">BLOGS</a>
                    <a href="#latest" className="text-black text-xs font-light tracking-wide">LATEST</a>
                    <a href="#bottom">
                        <ChevronDown strokeWidth={0.5} size={20} />
                    </a>
                </div>

                <div className="hidden md:flex h-8 px-6 py-3 bg-black items-center cursor-pointer">
                    <button className="text-white text-xs font-light">Button</button>
                </div>

                <div className="md:hidden">
                    <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle Menu">
                        <Menu size={24} />
                    </button>
                </div>
            </div>

            <div
                className={`flex flex-col gap-3 mt-4 transition-all duration-300 ease-in-out overflow-hidden md:hidden ${mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <a href="#home" className="text-black text-xs font-light tracking-wide">HOME</a>
                <a href="#products" className="text-black text-xs font-light tracking-wide">PRODUCTS</a>
                <a href="#blogs" className="text-black text-xs font-light tracking-wide">BLOGS</a>
                <a href="#latest" className="text-black text-xs font-light tracking-wide">LATEST</a>
                <a href="#bottom" className="flex items-center gap-1 text-black text-xs font-light tracking-wide">
                    <ChevronDown strokeWidth={0.5} size={18} />
                </a>
                <button className="w-full bg-black text-white text-xs font-light py-2">Button</button>
            </div>
        </div>
    );
};

export default Navbar;
