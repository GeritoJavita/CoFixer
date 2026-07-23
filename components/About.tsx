import { Award, Code2, GraduationCap } from "lucide-react";

const team = [
  {
    role: "Senior Developer",
    description:
      "Architecture, data migration strategy, complex business logic and code review.",
    icon: Award,
  },
  {
    role: "Mid-level Developer",
    description:
      "Core feature implementation, API design and backend development.",
    icon: Code2,
  },
  {
    role: "Junior Developer",
    description:
      "UI implementation, testing, documentation and support on well-defined modules.",
    icon: GraduationCap,
  },
];

const stats = [
  { value: "3", label: "Developers on the Team" },
  { value: "Any", label: "Language or Stack" },
  { value: "100%", label: "Code Reviewed by a Senior" },
];

export default function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            WHO WE ARE
          </span>

          <h2 className="mt-6 text-4xl font-black md:text-5xl">
            A full stack team,
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              ready for any stack
            </span>
          </h2>

        <div className="mt-6 text-lg leading-8 text-zinc-400">
          <p>
            CodeFixers is a full-stack software development team
            specializing in building, rewriting, and modernizing
            web and desktop applications. We work across a wide
            range of programming languages, frameworks, and
            platforms, helping clients deliver reliable,
            scalable software solutions.
          </p>
          <p className="mt-6">
            From startups launching new products to established
            businesses modernizing legacy systems—including VB6,
            Delphi, WinForms, and other desktop technologies—we
            help organizations migrate to modern, scalable
            architectures while preserving business continuity.
          </p>
        </div>

        </div>

        {/* Stats */}

        <div className="mx-auto mb-16 grid max-w-3xl gap-8 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl sm:grid-cols-3">

          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <h3 className="text-4xl font-black text-violet-400">
                {stat.value}
              </h3>
              <p className="mt-2 text-sm text-zinc-400">{stat.label}</p>
            </div>
          ))}

        </div>

        {/* Team */}

        <div className="grid gap-8 md:grid-cols-3">

          {team.map((member) => {
            const Icon = member.icon;

            return (
              <div
                key={member.role}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-violet-500/40"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-600/15 text-violet-400">
                  <Icon size={30} />
                </div>

                <h3 className="text-xl font-bold">{member.role}</h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  {member.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
