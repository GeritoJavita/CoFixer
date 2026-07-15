import {
  Code2,
  Database,
  Cloud,
  Smartphone,
  Shield,
  Wrench,
} from "lucide-react";

const categories = [
  {
    title: "Frontend",
    icon: Code2,
    color: "from-violet-500 to-fuchsia-500",
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    icon: Database,
    color: "from-cyan-500 to-blue-500",
    tech: [
      "Laravel",
      "Spring Boot",
      "Node.js",
      "PHP",
      "Java",
      ".NET",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    color: "from-emerald-500 to-green-500",
    tech: [
      "MySQL",
      "PostgreSQL",
      "SQL Server",
      "MongoDB",
      "Firebase",
    ],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    color: "from-orange-500 to-red-500",
    tech: [
      "Flutter",
      "Android",
      "Responsive Design",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "from-sky-500 to-indigo-500",
    tech: [
      "Docker",
      "AWS",
      "GitHub Actions",
      "Linux",
      "Vercel",
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    color: "from-pink-500 to-violet-500",
    tech: [
      "Git",
      "GitHub",
      "Postman",
      "Figma",
      "VS Code",
      "Jira",
    ],
  },
];

export default function TechStack() {
  return (
    <section
      id="tech"
      className="relative py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            OUR TECHNOLOGIES
          </span>

          <h2 className="mt-6 text-4xl font-black md:text-5xl">
            Built with
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              {" "}
              modern technologies
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            We choose reliable technologies that allow us to
            build secure, scalable and high-performance software.
          </p>

        </div>

        {/* Grid */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {categories.map((category) => {

            const Icon = category.icon;

            return (

              <div
                key={category.title}
                className="
                  group
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-8
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-cyan-400/40
                "
              >

                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${category.color}`}
                >
                  <Icon className="text-white" size={30} />
                </div>

                <h3 className="text-2xl font-bold">
                  {category.title}
                </h3>

                <div className="mt-8 flex flex-wrap gap-3">

                  {category.tech.map((item) => (
                    <span
                      key={item}
                      className="
                        rounded-full
                        border
                        border-white/10
                        bg-zinc-900
                        px-3
                        py-2
                        text-sm
                        text-zinc-300
                        transition
                        hover:border-cyan-400
                        hover:text-white
                      "
                    >
                      {item}
                    </span>
                  ))}

                </div>

              </div>

            );

          })}

        </div>

        {/* Bottom Section */}

        <div className="mt-24 rounded-3xl border border-white/10 bg-gradient-to-r from-violet-500/10 via-transparent to-cyan-500/10 p-10">

          <div className="grid gap-10 md:grid-cols-3">

            <div className="text-center">
              <h3 className="text-5xl font-black text-violet-400">
                15+
              </h3>

              <p className="mt-3 text-zinc-400">
                Technologies Mastered
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-5xl font-black text-cyan-400">
                100%
              </h3>

              <p className="mt-3 text-zinc-400">
                Modern Development Stack
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-5xl font-black text-emerald-400">
                24/7
              </h3>

              <p className="mt-3 text-zinc-400">
                Continuous Support
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}