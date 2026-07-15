"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { title: "Services", href: "#services" },
  { title: "Tech Stack", href: "#tech" },
  { title: "Portfolio", href: "#portfolio" },
  { title: "Process", href: "#process" },
  { title: "Contact", href: "#contact" },
];

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
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-500 font-bold text-white shadow-lg shadow-violet-500/30">
            
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-tight text-white">
              CodeFixer
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
            className="rounded-xl bg-violet-600 px-6 hover:bg-violet-500"
          >
            Hire Us
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
              <div className="mt-12 flex flex-col gap-6">
                {navLinks.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="text-lg text-zinc-300 hover:text-white"
                  >
                    {item.title}
                  </Link>
                ))}

                <Button className="mt-4 bg-violet-600">
                  Hire Us
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}