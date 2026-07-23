import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const UPWORK_URL = "https://www.upwork.com/agencies/2076468430495689955/";

export default function Contac() {
  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">

        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-violet-600/10 via-white/5 to-cyan-500/10 p-10 text-center backdrop-blur-xl md:p-16">

          <h2 className="text-3xl font-black md:text-5xl">
            Let&apos;s talk about
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              your project
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Whether it&apos;s a legacy system rewrite, a mobile app, or a web
            platform from scratch, we&apos;re ready to talk about your
            project and give you a real estimate based on your code and
            objectives.
          </p>

          <div className="mt-10 flex justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-xl bg-violet-600 px-8 hover:bg-violet-500"
            >
              <a href={UPWORK_URL} target="_blank" rel="noopener noreferrer">
                Contact Us on Upwork
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

        </div>

      </div>
    </section>
  );
}
