import SvgComany3 from "../../SvgComponents/SvgComany3";
import SvgCompany1 from "../../SvgComponents/SvgCompany1";
import SvgCompany2 from "../../SvgComponents/SvgCompany2";
import SvgCompany4 from "../../SvgComponents/SvgCompany4";
import SvgCompany5 from "../../SvgComponents/SvgCompany5";
import SvgStar from "../../SvgComponents/SvgStar";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <section className="about-us">
      <article className="about-us-container">
        <h3 className="about-us-title">
          Figma ipsum component variant main layer.
        </h3>
        <div className="testimonial">
          <div className="testimonial-container">
            <div className="stars-container">
              <div className="star-logo">
                <SvgStar />
              </div>
              <div className="star-logo">
                <SvgStar />
              </div>
              <div className="star-logo">
                <SvgStar />
              </div>
              <div className="star-logo">
                <SvgStar />
              </div>
              <div className="star-logo">
                <SvgStar />
              </div>
            </div>
            <h4 className="testimonial-quote">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat."
            </h4>
            <div className="avatar-container">
              <h5 className="avatar-title">Name Surname</h5>
              <h6 className="avatar-text">Position, Company name</h6>
            </div>
          </div>
        </div>
        <hr className="about-us-line" />
      </article>
      <div className="logos-container">
        <div className="about-us-log">
          <SvgCompany1 />
        </div>
        <div className="about-us-log">
          <SvgCompany2 />
        </div>
        <div className="about-us-log">
          <SvgComany3 />
        </div>
        <div className="about-us-log">
          <SvgCompany4 />
        </div>
        <div className="about-us-log">
          <SvgCompany5 />
        </div>
      </div>
    </section>
  );
}
