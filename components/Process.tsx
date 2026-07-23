import {
  Search,
  PenTool,
  Code2,
  ClipboardCheck,
  Rocket,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery & Audit",
    description:
      "We review the current system, database and existing business logic before writing a single line of new code.",
    icon: Search,
  },
  {
    number: "02",
    title: "Architecture & Technical Plan",
    description:
      "We define the stack, architecture and data migration plan aligned with your business goals.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Iterative Development",
    description:
      "We build module by module, with verifiable deliveries and constant reviews with you.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Parity Testing & QA",
    description:
      "We compare the new system's behavior against the original to prevent regressions.",
    icon: ClipboardCheck,
  },
  {
    number: "05",
    title: "Launch & Handover",
    description:
      "Deployment, documentation and knowledge transfer for your team.",
    icon: Rocket,
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="mx-auto mb-24 max-w-3xl text-center">

          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            OUR PROCESS
          </span>

          <h2 className="mt-6 text-4xl font-black md:text-5xl">
            From audit to
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              successful launch
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            A transparent, five-step workflow that keeps you informed
            throughout every stage of the project.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative">

          {/* Vertical line */}

          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-violet-500 via-cyan-500 to-violet-500 lg:block" />

          <div className="space-y-16">

            {steps.map((step, index) => {

              const Icon = step.icon;

              return (

                <div
                  key={step.number}
                  className={`flex items-center ${
                    index % 2 === 0
                      ? "lg:flex-row"
                      : "lg:flex-row-reverse"
                  } flex-col gap-10`}
                >

                  {/* Card */}

                  <div className="w-full lg:w-5/12">

                    <div className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-violet-500/40">

                      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-600/20 text-violet-400 transition group-hover:bg-violet-600 group-hover:text-white">
                        <Icon size={30} />
                      </div>

                      <p className="mb-2 text-sm font-semibold tracking-widest text-violet-400">
                        STEP {step.number}
                      </p>

                      <h3 className="text-3xl font-bold">
                        {step.title}
                      </h3>

                      <p className="mt-5 leading-8 text-zinc-400">
                        {step.description}
                      </p>

                    </div>

                  </div>

                  {/* Center circle */}

                  <div className="relative hidden lg:flex w-2/12 justify-center">

                    <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full border border-violet-500 bg-[#09090B] text-lg font-bold text-white shadow-lg shadow-violet-500/30">
                      {step.number}
                    </div>

                  </div>

                  {/* Empty side */}

                  <div className="hidden lg:block lg:w-5/12" />

                </div>

              );

            })}

          </div>

        </div>

      </div>
    </section>
  );
}