import SvgFacebook from "../../SvgComponents/SvgFacebook";
import SvgInstagram from "../../SvgComponents/SvgInstagram";
import SvgLinkedIn from "../../SvgComponents/SvgLinkedIn";
import SvgX from "../../SvgComponents/SvgX";
import SvgYoutube from "../../SvgComponents/SvgYoutube";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <section className="footer-links">
        <div className="link-column">
          <h6 className="link-title">Fountainebleau</h6>
          <p className="link-text">
            Cummerata Trail, 33
            <br />
            08012 Marianfort <br />
            (+34) 123 456 789
          </p>
          <a className="link-mail" href="mailto:">
            info@colillas.com
          </a>
        </div>
        <div className="link-column">
          <h6 className="link-title">Daly City</h6>
          <p className="link-text">
            N Front Street, 85
            <br />
            8895 Daly City <br />
            (+34) 123 456 789
          </p>
          <a className="link-mail" href="mailto:">
            hello@colillas.com
          </a>
        </div>
      </section>
      <section className="footer-credits">
        <div className="social-links">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="social-logo">
              <SvgFacebook />
            </div>
          </a>
          <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
            <div className="social-logo">
              <SvgX />
            </div>
          </a>
          <a
            href="http://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="social-logo">
              <SvgLinkedIn />
            </div>
          </a>
          <a
            href="http://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="social-logo">
              <SvgInstagram />
            </div>
          </a>
          <a
            href="http://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="social-logo">
              <SvgYoutube />
            </div>
          </a>
        </div>
        <div className="credits">
          <p className="credits-text">© 2024 All rights reserved.</p>
          <div className="credits-links">
            <a
              className="credits-text"
              href="https://colillas.com/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
            <a
              className="credits-text"
              href="https://colillas.com/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of Service
            </a>
            <a
              className="credits-text"
              href="https://colillas.com/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cookies Settings
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
}
