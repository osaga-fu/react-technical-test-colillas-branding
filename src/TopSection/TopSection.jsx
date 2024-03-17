import "./TopSection.css";
import SvgArrow from "../SvgComponents/SvgArrow";
import SvgColillasLogo from "../SvgComponents/SvgColillasLogo";
import backgroundImage from "../assets/leone-venter-VieM9BdZKFo-unsplash.jpg"

export default function TopSection() {
  return (
    <section className="top-section">
      <nav>
        <div className="colillas-logo">
            <SvgColillasLogo />
        </div>
      </nav>
      <header>
        <div className="hero-container">
          <h2 className="hero-text">
            Lorem, ipsum dolor sit amet consectetur. Elementum mauris tincidunt
            vitae ornare ultrices eget integer. Sagittis in ac fringilla sit.
          </h2>
        </div>
      </header>
      <div className="selector">
        <div className="selector-header">
          <h4 className="selector-header-text">Lorem ipsum dolor sit amet</h4>
        </div>
        <hr className="selector-line" />
        <article className="selector-card">
          <h3 className="selector-card-text">
            Lorem ipsum dolor sit amet consectetur. Nibh vestibulum eleifend a
            et.
          </h3>
          <div className="selector-card-button">
            <div className="arrow-image">
              <SvgArrow />
            </div>
          </div>
        </article>
        <hr className="selector-line" />
        <article className="selector-card">
          <h3 className="selector-card-text">
            Lorem ipsum dolor sit amet consectetur. Amet sed vitae urna egestas
            amet.
          </h3>
          <div className="selector-card-button">
            <div className="arrow-image">
              <SvgArrow />
            </div>
          </div>
        </article>
        <hr className="selector-line" />
      </div>
      <img
        className="background-image"
        src={backgroundImage}
        alt="Café, cerezas y ordenador"
      />
    </section>
  );
}
