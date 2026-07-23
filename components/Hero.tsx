"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[140px]" />
        <div className="absolute right-10 top-52 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-28 lg:grid lg:grid-cols-2 lg:gap-16">

        {/* LEFT */}

        <div>

          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            <CheckCircle2 size={18} />
            Available for new projects
          </div>

          <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
            Full Stack Experts
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              Across Modern and Legacy Technologies
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
            We design, build, modernize, and refactor web and desktop 
            applications—from brand-new products to legacy systems such 
            as VB6, Delphi, and WinForms. Every project is delivered by 
            a senior-led team, with 100% of the code reviewed to ensure 
            quality, maintainability, and reliability.

          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Button
              asChild
              size="lg"
              className="rounded-xl bg-violet-600 hover:bg-violet-500"
            >
              <a href="#contact">Start Your Project</a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-xl border-zinc-700 bg-transparent"
            >
              <a href="#process">
                See How We Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>

          </div>

          <div className="mt-12 flex gap-10">

            <div>
              <h3 className="text-3xl font-bold">3</h3>
              <p className="text-zinc-500">
                Developers, Senior-Lead
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">Any</h3>
              <p className="text-zinc-500">
                Language or Stack
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">100%</h3>
              <p className="text-zinc-500">
                Code Reviewed by a Senior
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative mx-auto mt-20 origin-top scale-[0.82] sm:scale-90 md:scale-95 lg:mt-0 lg:scale-100 lg:origin-center">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl">

            <div className="mb-6 flex gap-2">

              <div className="h-3 w-3 rounded-full bg-red-500" />

              <div className="h-3 w-3 rounded-full bg-yellow-500" />

              <div className="h-3 w-3 rounded-full bg-green-500" />

            </div>

            <pre className="overflow-hidden text-sm leading-7 text-zinc-300">
{`const project = {
  frontend: "React / Vue / Angular",
  backend: ".NET / Node / Python / Java",
  legacy: "VB6, Delphi, WinForms -> Web",
  mobile: "React Native / Flutter",
  cloud: "AWS / Azure / GCP"
}

migrate(project)
`}
            </pre>

          </div>

          {/* Floating Card */}

          <div className="absolute -left-12 top-10 rounded-2xl border border-white/10 bg-zinc-900/80 p-5 backdrop-blur-xl">

            <h4 className="font-semibold">
              Any Stack
            </h4>

            <p className="mt-2 text-sm text-zinc-400">
              Modern & legacy, web & desktop
            </p>

          </div>

          {/* Floating Card */}

          <div className="absolute -bottom-8 right-0 rounded-2xl border border-white/10 bg-zinc-900/80 p-5 backdrop-blur-xl">

            <h4 className="font-semibold">
              Worldwide
            </h4>

            <p className="mt-2 text-sm text-zinc-400">
              Remote Development Team
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}