// app/projects/page.tsx
export const metadata = { title: "DC 6 Projects | Clarke David Murcia" };

const projects = [
  { id: 1, name: "Coding", description: "Web development projects." },
  { id: 2, name: "Mobile App Development", description: "Mobile app development projects." },
  { id: 3, name: "Game Development", description: "Game development projects." },
];

export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-8">
      <header className="mb-10 max-w-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
          What I work on
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Projects
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          A collection of areas I enjoy exploring and building in.
        </p>
      </header>

      <ul className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <li
            key={project.id}
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg"
          >
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-sm font-bold text-indigo-700">
              {String(project.id).padStart(2, "0")}
            </div>
            <h2 className="text-xl font-semibold text-slate-900 group-hover:text-indigo-700">
              {project.name}
            </h2>
            <p className="mt-2 leading-7 text-slate-600">{project.description}</p>

            <hr />
          </li>
        ))}
      </ul>
    </main>
  );
}
