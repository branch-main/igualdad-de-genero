"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/app/images/logo.png";
import { usePathname } from "next/navigation";
import { useState } from "react";

function NavbarLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children?: React.ReactNode;
  onClick: () => void; // Function to close the menu
}) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`${pathname == href ? "font-bold text-red-500" : "text-gray-500"} hover:text-red-500`}
      onClick={onClick} // Call the onClick function when the link is clicked
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false); // Close the mobile menu when a link is clicked
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 border shadow-md bg-neutral-50">
      <nav className="max-w-[1440px] mx-auto flex items-center justify-between px-10 py-3">
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="Logo" width={40} height={40} />
        </Link>
        <div className="hidden md:flex flex-row gap-5">
          <NavbarLink href="/" onClick={closeMenu}>
            Inicio
          </NavbarLink>
          <NavbarLink href="/blog" onClick={closeMenu}>
            Blog
          </NavbarLink>
          <NavbarLink href="/team" onClick={closeMenu}>
            Equipo
          </NavbarLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-gray-500 hover:text-red-500 text-3xl"
            onClick={toggleMenu}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-neutral-50 p-5">
          <ul className="flex flex-col gap-5">
            <NavbarLink href="/" onClick={closeMenu}>
              Inicio
            </NavbarLink>
            <NavbarLink href="/blog" onClick={closeMenu}>
              Blog
            </NavbarLink>

            <NavbarLink href="/team" onClick={closeMenu}>
              Equipo
            </NavbarLink>
          </ul>
        </div>
      )}
    </header>
  );
}
