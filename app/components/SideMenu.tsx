"use client";

import { useState } from "react";

const MENU_ITEMS = [
  { name: "About Me", id: "about" },
  { name: "Education", id: "education" },
  { name: "Full Time Job Experience", id: "experience" },
  { name: "Projects", id: "projects" },
];

export default function SideMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <section 
                className={`fixed top-0 right-0 bg-[#333333] z-[60] flex items-center justify-center transition-all duration-700 ease-in-out
                ${isOpen ? "w-screen h-screen opacity-95 rounded-none" : "w-[80px] h-[80px] opacity-90 overflow-hidden"}`}
            >
                <ul 
                    className={`m-0 list-none p-0 flex flex-col items-center justify-center transition-opacity
                    ${isOpen ? "opacity-100 pointer-events-auto duration-500 delay-[650ms]" : "opacity-0 pointer-events-none duration-200 delay-0"}`}
                >
                    {MENU_ITEMS.map((item) => (
                        <li key={item.id} className="my-8 w-[500px]">
                            <a
                                href={`#${item.id}`}
                                onClick={() => setIsOpen(false)}
                                className="block p-[15px] text-center cursor-pointer transition-colors duration-300 border border-gray-500 text-gray-300 hover:border-white hover:text-black hover:bg-white text-2xl tracking-widest"
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </section>

            <div 
                className="fixed top-0 right-0 w-[80px] h-[80px] z-[70] cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={`absolute top-[22px] left-[23px] w-8 h-[2px] bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[13px]" : ""}`}></span>
                <span className={`absolute top-[35px] left-[23px] w-8 h-[2px] bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
                <span className={`absolute top-[48px] left-[23px] w-8 h-[2px] bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[13px]" : ""}`}></span>
            </div>
        </>
    );
}