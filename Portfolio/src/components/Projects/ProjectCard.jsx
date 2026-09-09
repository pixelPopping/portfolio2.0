import PropTypes from "prop-types";
import { getImageUrl } from "../../utils";
import "./ProjectCard.css";

export const ProjectCard = ({
  project: {
    title,
    imageSrc,
    description,
    skills,
    demo,
    source,
  },
}) => {
  return (
    <article className="project-card">

      {/* Image */}
      <div className="project-image-wrapper">
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          className="project-image"
        />
      </div>


      {/* Content */}
      <div className="project-content">

        <h3>{title}</h3>

        <p>{description}</p>


        {/* Skills */}
        <ul className="project-skills">
          {skills.slice(0, 5).map((skill) => (
            <li key={skill}>
              {skill}
            </li>
          ))}

          {skills.length > 5 && (
            <li className="more-skills">
              +{skills.length - 5}
            </li>
          )}
        </ul>


        {/* Links */}
        <div className="project-links">

          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Live Demo →
            </a>
          )}

          <a
            href={source}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-dark"
          >
            GitHub ↗
          </a>

        </div>

      </div>

    </article>
  );
};


ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    demo: PropTypes.string,
    source: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;