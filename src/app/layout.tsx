import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarComp from "@/components/Navbar";
import  FooterComp  from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <NavbarComp />
      <main className="h-100">{children}</main>
      <FooterComp />
    </>
  );
}
