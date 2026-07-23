"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { title: "About", href: "#about" },
  { title: "Services", href: "#services" },
  { title: "Tech Stack", href: "#tech" },
  { title: "Process", href: "#process" },
  { title: "Contact", href: "#contact" },
];

const UPWORK_URL = "https://www.upwork.com/agencies/2076468430495689955/";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-black/60 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}

        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/shield.png"
            alt="CodeFixers logo"
            width={55}
            height={55}
            className="h-11 w-11 rounded-xl object-contain"
            priority
          />

          <div>
            <h1 className="text-lg font-bold tracking-tight text-white">
              CodeFixers
            </h1>

            <p className="text-xs text-zinc-400">
              Software Development
            </p>
          </div>
        </Link>

        {/* Desktop */}

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-sm font-medium text-zinc-400 transition hover:text-white"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Right */}

        <div className="hidden items-center gap-4 lg:flex">
          <Button
            asChild
            className="rounded-xl bg-violet-600 px-6 hover:bg-violet-500"
          >
            <a href={UPWORK_URL} target="_blank" rel="noopener noreferrer">
              Hire Us
            </a>
          </Button>
        </div>

        {/* Mobile */}

        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost">
                <Menu />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="bg-zinc-950">
              <div className="mt-12 flex flex-col items-center gap-6">
                {navLinks.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="text-lg text-zinc-300 hover:text-white"
                  >
                    {item.title}
                  </Link>
                ))}

                <Button asChild className="mt-4 w-full bg-violet-600">
                  <a href={UPWORK_URL} target="_blank" rel="noopener noreferrer">
                    Hire Us
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}