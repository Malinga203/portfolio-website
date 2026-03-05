import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <div className="space-y-12">
      <section className="card">
        <span className="badge mb-4">Undergraduate • BSc (Hons) Computing</span>

        <h1 className="text-3xl font-bold">
          Hi, I’m Malinga — I build web apps, dashboards and student systems.
        </h1>

        <p className="mt-3 text-slate-600">
          I’m interested in full-stack development, database systems and IoT-based monitoring solutions.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link className="btn btn-primary" to="/projects">View Projects</Link>
          <Link className="btn" to="/contact">Contact Me</Link>
        </div>
      </section>

      <section>
        <div className="flex items-end justify-between">
          <h2 className="text-xl font-bold">Featured Projects</h2>
          <Link to="/projects" className="text-sm hover:underline">See all →</Link>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {featured.map((p) => <ProjectCard key={p.slug} project={p} />)}
        </div>
      </section>
    </div>
  );
}