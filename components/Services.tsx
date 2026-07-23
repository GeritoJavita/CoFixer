import {
  Code2,
  RefreshCw,
  Smartphone,
  Palette,
  Server,
  Wrench,
} from "lucide-react";

const services = [
  {
    title: "Full Stack Web Development",
    description:
      "Custom web applications built end-to-end, from database to UI.",
    icon: Code2,
    items: [
      "Custom web applications (frontend + backend)",
      "API design & development (REST, GraphQL)",
      "Database design & optimization",
      "Third-party integrations (payments, CRMs, APIs)",
      "Progressive Web Apps (PWAs)",
    ],
  },
  {
    title: "Legacy Systems Modernization",
    description:
      "Rewriting and preserving the business logic of desktop systems.",
    icon: RefreshCw,
    items: [
      "Desktop-to-web application rewrites (VB6, Delphi, WinForms)",
      "Business logic migration & preservation",
      "Schema migration & data conversion",
      "Legacy vs. new system parity testing",
    ],
  },
  {
    title: "Mobile Development",
    description:
      "Cross-platform mobile apps and native rewrites of web products.",
    icon: Smartphone,
    items: [
      "React Native & Flutter (cross-platform)",
      ".NET MAUI for Microsoft stacks",
      "Web-to-native app redesign",
      "App Store & Google Play publishing",
    ],
  },
  {
    title: "Frontend Development",
    description:
      "Responsive interfaces implemented with modern frameworks.",
    icon: Palette,
    items: [
      "React, Angular, Vue.js",
      "Responsive UI/UX implementation",
      "Dashboards & admin panels",
      "Cross-browser performance optimization",
    ],
  },
  {
    title: "Backend & Infrastructure",
    description:
      "Scalable APIs and cloud infrastructure built for growth.",
    icon: Server,
    items: [
      ".NET, Node.js, Python, Java",
      "Cloud deployment (AWS, Azure, GCP)",
      "Microservices architecture",
      "CI/CD pipeline setup",
    ],
  },
  {
    title: "Maintenance & QA",
    description:
      "Ongoing support and quality assurance for existing systems.",
    icon: Wrench,
    items: [
      "Bug fixing & ongoing support",
      "Code audits & technical debt reviews",
      "Manual & automated testing",
      "Documentation & knowledge transfer",
    ],
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
              to build or modernize software
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            From full stack web apps to legacy system modernization, we
            provide end-to-end software development services tailored to
            your business.
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

                  <ul className="mt-6 space-y-2.5">

                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm leading-6 text-zinc-300"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-violet-400" />
                        {item}
                      </li>
                    ))}

                  </ul>

                </div>
              </div>
            );

          })}
        </div>
      </div>
    </section>
  );
}
