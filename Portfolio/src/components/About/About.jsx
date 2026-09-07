import { getImageUrl } from "../../utils";
import "./About.css";

export const About = () => {
  return (
    <section id="about" className="about py-5">
      <div className="container py-lg-5">

        {/* Section title */}
        <div className="text-center mb-5">
          <p className="section-label">GET TO KNOW ME</p>

          <h2 className="section-title">
            About <span>Me</span>
          </h2>

          <p className="section-description mx-auto">
            A little bit about my background and my journey into web
            development.
          </p>
        </div>


        {/* About card */}
        <div className="row justify-content-center">

          <div className="col-12 col-lg-10">
            <div className="about-card p-4 p-md-5">

              <div className="row align-items-center g-4">

                {/* Icon */}
                <div className="col-12 col-md-3 text-center">
                  <div className="about-icon mx-auto">
                    <img
                      src={getImageUrl("about/cursorIcon.png")}
                      alt="Cursor icon"
                    />
                  </div>
                </div>


                {/* Text */}
                <div className="col-12 col-md-9">

                  <h3>Frontend Developer</h3>

                  <p>
                    I'm a Junior Frontend Developer with a passion for
                    creating modern and user-friendly websites and
                    applications.
                  </p>

                  <p>
                    My current skillset includes HTML, CSS, JavaScript,
                    React and Python. I'm continuously learning and
                    developing my skills as a web developer.
                  </p>

                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};