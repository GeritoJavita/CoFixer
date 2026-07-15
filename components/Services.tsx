import {
  Code2,
  Smartphone,
  Database,
  Cloud,
  ShieldCheck,
  Palette,
} from "lucide-react";

const services = [
  {
    title: "Web Development",
    description:
      "High-performance web applications built with modern frameworks.",
    icon: Code2,
    technologies: ["Next.js", "React", "Laravel", "Spring Boot"],
  },
  {
    title: "Mobile Development",
    description:
      "Cross-platform mobile applications for Android and iOS.",
    icon: Smartphone,
    technologies: ["Flutter", "Android", "Responsive Apps"],
  },
  {
    title: "Backend & APIs",
    description:
      "Secure and scalable REST APIs connected to robust databases.",
    icon: Database,
    technologies: ["Node.js", "Laravel", "PostgreSQL", "MySQL"],
  },
  {
    title: "Cloud & DevOps",
    description:
      "Deployment automation, containers and cloud infrastructure.",
    icon: Cloud,
    technologies: ["Docker", "AWS", "GitHub Actions", "Linux"],
  },
  {
    title: "UI / UX Design",
    description:
      "Modern interfaces focused on user experience and conversion.",
    icon: Palette,
    technologies: ["Figma", "Tailwind", "Dashboard", "Landing Pages"],
  },
  {
    title: "Cybersecurity",
    description:
      "Security best practices integrated into every stage of development.",
    icon: ShieldCheck,
    technologies: ["OWASP", "Authentication", "Pentesting", "Audits"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            OUR SERVICES
          </span>

          <h2 className="mt-6 text-4xl font-black md:text-5xl">
            Everything you need
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              to build modern software
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            From MVPs to enterprise platforms, we provide end-to-end
            software development services tailored to your business.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => {

            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-8
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-violet-500/40
                  hover:bg-white/10
                "
              >
                {/* Glow */}

                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 via-violet-500/0 to-cyan-500/0 opacity-0 transition duration-500 group-hover:opacity-100 group-hover:from-violet-600/10 group-hover:to-cyan-500/10" />

                <div className="relative">

                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-600/15 text-violet-400 transition group-hover:bg-violet-600 group-hover:text-white">
                    <Icon size={30} />
                  </div>

                  <h3 className="text-2xl font-bold">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-7 text-zinc-400">
                    {service.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">

                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="
                          rounded-full
                          border
                          border-white/10
                          bg-zinc-900
                          px-3
                          py-1
                          text-xs
                          text-zinc-300
                        "
                      >
                        {tech}
                      </span>
                    ))}

                  </div>

                </div>
              </div>
            );

          })}
        </div>
      </div>
    </section>
  );
}