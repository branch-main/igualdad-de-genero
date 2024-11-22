"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/app/images/logo.png";
import { usePathname } from "next/navigation";

function NavbarLink({
  href,
  children,
}: {
  href: string;
  children?: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`${pathname == href ? "font-bold text-red-500" : "text-gray-500"} hover:text-red-500`}
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-xl">
      <nav className="max-w-[1440px] mx-auto flex items-center justify-between px-10 py-3 bg-neutral-50">
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="Logo" width={40} height={40} />
        </Link>
        <ul className="flex flex-row gap-5">
          <NavbarLink href="/">Inicio</NavbarLink>
          <NavbarLink href="/blog">Blog</NavbarLink>
          <NavbarLink href="/team">Equipo</NavbarLink>
        </ul>
      </nav>
    </header>
  );
}
