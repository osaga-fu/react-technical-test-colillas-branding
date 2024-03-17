import SvgAward from "../../SvgComponents/SvgAward";
import SvgPenTool from "../../SvgComponents/SvgPenTool";
import SvgRocket from "../../SvgComponents/SvgRocket";
import SvgSettings from "../../SvgComponents/SvgSettings";
import "./Advantages.css";

export default function Advantages() {
  return (
    <section className="advantages">
      <div className="advantages-container">
        <article className="advantages-article">
          <div className="advantages-logo">
            <SvgSettings />
          </div>
          <span className="advantages-text-container">
            <h4 className="advantages-text-title">Pauline</h4>
            <p className="advantages-text-content">
              Lorem ipsum dolor sit amet consectetur. Eget enim quam quis
              commodo nisi. Blandit augue faucibus aliquam volutpat.
            </p>
          </span>
        </article>
        <article className="advantages-article">
          <div className="advantages-logo">
            <SvgAward />
          </div>
          <span className="advantages-text-container">
            <h4 className="advantages-text-title">Bailee</h4>
            <p className="advantages-text-content">
              Lorem ipsum dolor sit amet consectetur. Quis nulla rhoncus iaculis
              ac. Sed pretium sapien condimentum odio nunc lectus.
            </p>
          </span>
        </article>
        <article className="advantages-article">
          <div className="advantages-logo">
            <SvgRocket />
          </div>
          <span className="advantages-text-container">
            <h4 className="advantages-text-title">Henry</h4>
            <p className="advantages-text-content">
              Lorem ipsum dolor sit amet consectetur. Eu sed libero sed ultrices
              blandit enim at neque turpis. Turpis congue tempus at.
            </p>
          </span>
        </article>
        <article className="advantages-article">
          <div className="advantages-logo">
            <SvgPenTool />
          </div>
          <span className="advantages-text-container">
            <h4 className="advantages-text-title">Laurence</h4>
            <p className="advantages-text-content">
              Lorem ipsum dolor sit amet consectetur. Dignissim urna dui aliquam
              ut enim commodo nibh. Ornare amet semper sit..
            </p>
          </span>
        </article>
      </div>
    </section>
  );
}
