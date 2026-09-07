import projects from "../../data/Projects.json";
import { ProjectCard } from "./ProjectCard";
import "./Projects.css";

export const Projects = () => {
  return (
    <section id="projects" className="projects py-5">
      <div className="container py-lg-5">

        {/* Section title */}
        <div className="text-center mb-5">
          <p className="section-label">MY WORK</p>

          <h2 className="section-title">
            My <span>Projects</span>
          </h2>

          <p className="section-description mx-auto">
            A selection of projects I've built while learning and developing
            my skills as a web developer.
          </p>
        </div>


        {/* Project grid */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">

          {projects.map((project) => (
            <div className="col" key={project.title}>
              <ProjectCard project={project} />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};