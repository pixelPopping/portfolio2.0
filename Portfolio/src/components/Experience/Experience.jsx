import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
import "./Experience.css";

export const Experience = () => {
  return (
    <section id="experience" className="experience py-5">
      <div className="container py-lg-5">

        {/* Titel */}
        <div className="text-center mb-5">
          <p className="section-label">MY JOURNEY</p>

          <h2 className="section-title">
            Experience & <span>Skills</span>
          </h2>

          <p className="section-description mx-auto">
            The technologies I've learned and the education I've followed
            while developing my skills as a web developer.
          </p>
        </div>


        <div className="row g-5">

          {/* Skills */}
          <div className="col-12 col-lg-5">

            <h3 className="experience-heading">
              My Skills
            </h3>

            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-2 g-3">

              {skills.map((skill) => (
                <div className="col" key={skill.title}>

                  <div className="skill-card">

                    <div className="skill-icon">
                      <img
                        src={getImageUrl(skill.imageSrc)}
                        alt={skill.title}
                      />
                    </div>

                    <p>{skill.title}</p>

                  </div>

                </div>
              ))}

            </div>

          </div>


          {/* History */}
          <div className="col-12 col-lg-7">

            <h3 className="experience-heading">
              Education
            </h3>

            <div className="history">

              {history.map((historyItem) => (
                <div
                  className="history-card"
                  key={`${historyItem.organisation}-${historyItem.startDate}`}
                >

                  <div className="history-header">

                    {historyItem.imageSrc && (
                      <div className="history-logo">
                        <img
                          src={getImageUrl(historyItem.imageSrc)}
                          alt={`${historyItem.organisation} logo`}
                        />
                      </div>
                    )}

                    <div>
                      <h4>
                        {historyItem.role}
                      </h4>

                      <p className="organisation">
                        {historyItem.organisation}
                      </p>

                      <span className="date">
                        {historyItem.startDate} – {historyItem.endDate}
                      </span>
                    </div>

                  </div>


                  {/* Ervaringen */}
                  <ul className="experience-list">

                    {historyItem.experiences.map((experience) => (
                      <li key={experience}>
                        {experience}
                      </li>
                    ))}

                  </ul>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};