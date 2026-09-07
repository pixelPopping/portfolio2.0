import { getImageUrl } from "../../utils";
import "./Hero.css";

export const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="row align-items-center">

          {/* Hero tekst */}
          <div className="col-12 col-lg-6">
            <div className="hero-content">

              <p className="hero-eyebrow">
                JUNIOR FRONTEND DEVELOPER
              </p>

              <h1>
                Hi, I'm <span>Yorian</span>
              </h1>

              <p className="hero-text">
                I'm a Junior Frontend Developer from the Netherlands.
                After working as a chef, I decided to bring my creativity
                and attention to detail into web development.
              </p>

              <p className="hero-text">
                I'm currently studying web development and I'm excited
                to keep learning and growing in the world of ICT.
              </p>

              <div className="hero-buttons">
                <a href="#projects" className="btn btn-primary">
                  View my work →
                </a>

                <a href="#contact" className="btn btn-outline-primary">
                  Contact me
                </a>
              </div>

            </div>
          </div>

          {/* Hero afbeelding */}
          <div className="col-12 col-lg-6">
            <div className="hero-image-wrapper">

              <div className="hero-circle"></div>

              <img
                src={getImageUrl("hero/20230613_164750.jpg")}
                alt="Yorian"
                className="hero-image"
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};