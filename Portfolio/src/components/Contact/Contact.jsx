import { getImageUrl } from "../../utils"; // import getImageUrl


export const Contact = () => {
  return (
    <footer id="contact">
      <div>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul>
        <li>
          <img src={getImageUrl("contact/mail.png")} alt="Email icon" />
          <a href="mailto:sydney-cook@outlook.com">sydney-cook@outlook.com</a>
        </li>
        <li>
          <img src={getImageUrl("contact/linkedin.png")} alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/yorian-fransz-58111527b/">
            linkedin.com/yorian-fransz
          </a>
        </li>
        <li>
          <img src={getImageUrl("contact/github.png")} alt="GitHub icon" />
          <a href="https://www.github.com/Pixelpopping">
            github.com/PixelPopping
          </a>
        </li>
      </ul>
    </footer>
  );
};
