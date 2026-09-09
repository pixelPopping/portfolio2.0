import { getImageUrl } from "../../utils";
import "./Contact.css";

export const Contact = () => {
  return (
    <footer id="contact" className="contact py-5">
      <div className="container">

        {/* Heading */}
        <div className="contact-heading text-center">

          <p className="section-eyebrow">
            GET IN TOUCH
          </p>

          <h2>
            Let's <span>Connect</span>
          </h2>

          <p>
            Feel free to reach out if you want to talk about a project,
            collaboration, or just say hello.
          </p>

        </div>


        {/* Contact card */}
        <div className="contact-card">

          <div className="row g-4 justify-content-center">

            {/* Email */}
            <div className="col-12 col-md-4">
              <a
                href="mailto:sydney-cook@outlook.com"
                className="contact-item"
              >
                <div className="contact-icon">
                  <img
                    src={getImageUrl("Contact/mail.png")}
                    alt="Email"
                  />
                </div>

                <div>
                  <h3>Email</h3>
                  <p>sydney-cook@outlook.com</p>
                </div>
              </a>
            </div>


            {/* LinkedIn */}
            <div className="col-12 col-md-4">
              <a
                href="https://nl.linkedin.com/in/yorian-fransz-925649403?trk/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <div className="contact-icon">
                  <img
                    src={getImageUrl("Contact/linkedin.png")}
                    alt="LinkedIn"
                  />
                </div>

                <div>
                  <h3>LinkedIn</h3>
                  <p>yorian-fransz</p>
                </div>
              </a>
            </div>


            {/* GitHub */}
            <div className="col-12 col-md-4">
              <a
                href="https://www.github.com/Pixelpopping"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <div className="contact-icon">
                  <img
                    src={getImageUrl("Contact/github.png")}
                    alt="GitHub"
                  />
                </div>

                <div>
                  <h3>GitHub</h3>
                  <p>PixelPopping</p>
                </div>
              </a>
            </div>

          </div>

        </div>

        <p className="contact-footer">
          © 2026 Yorian. Built with React & Bootstrap.
        </p>

      </div>
    </footer>
  );
};