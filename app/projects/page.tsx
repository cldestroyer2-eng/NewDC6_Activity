// app/projects/page.tsx
export const metadata = { title: "DC 6 Projects | Clarke David Murcia" };

const projects = [
  { id: 1, name: "Coding", description: "Web development projects." },
  { id: 2, name: "Mobile App Development", description: "Mobile app development projects." },
  { id: 3, name: "Game Development", description: "Game development projects." },
];

export default function ProjectsPage() {
  return (
    <main>
      <h1>Projects</h1>

      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h2>Project name: {project.name}</h2>
            <p>Description: {project.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}