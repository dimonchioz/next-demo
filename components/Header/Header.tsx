"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/assets/logo.png";
import { NAV_LINKS } from "@/const/constants";
import { HamburgerMenuBtn } from "./HamburgerMenuBtn";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinksRef = useRef<HTMLDivElement>(null);

  const handleMenuToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
    if (navLinksRef.current) {
      navLinksRef.current.classList.toggle("left-[0%]");
    }
  };

  return (
    <header className="relative shadow-lg px-3 py-2 font-varela bg-secondary">
      <nav className="flex justify-between">
        <div className="w-16 flex items-center">
          <Link href="/">
            <Image src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <div
            ref={navLinksRef}
            className="navLinks duration-500 absolute md:static md:w-auto w-full md:h-auto flex md:items-center gap-[1.5vw] bg-secondary top-[100%] left-[-100%] px-5 md:py-0 py-5 z-50"
          >
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-8">
              {NAV_LINKS.map((link) => (
                <li key={link.name} className="navBtn">
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="hover:bg-clip-text hover:text-transparent bg-primary border-solid border-2 border-primary font-bold text-white px-5 py-2 rounded-full "
            >
              Login
            </button>
            <div
              onClick={handleMenuToggle}
              className="flex items-center cursor-pointer md:hidden"
            >
              <HamburgerMenuBtn isMenuOpen={isMenuOpen} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
