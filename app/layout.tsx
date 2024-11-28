import "./globals.css";

import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
});

export const metadata: Metadata = {
  title: "Igualdad de Género",
  description:
    "Página web dedicada a promover la igualdad de género y los derechos en TECSUP, ofreciendo recursos y herramientas para estudiantes, docentes y personal, en apoyo al ODS 5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={geistSans.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
