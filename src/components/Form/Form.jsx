import SvgArrow from "../../SvgComponents/SvgArrow";
import "./Form.css";

export default function Form() {
  return (
    <section className="form-section">
      <div className="form-container">
        <span className="form-info">
          <h4 className="form-info-title">
            Figma ipsum component variant main layer.
          </h4>
          <h3 className="form-info-subtitle">
            Figma ipsum component variant main layer. Asset connection.
          </h3>
        </span>
        <form id="form" action="">
          <div className="form-line">
            <div className="input-container">
              <label for="name">Nombre</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="input-container">
              <label for="company">Empresa</label>
              <input type="text" name="company" id="company" />
            </div>
          </div>
          <div className="form-line">
            <div className="input-container">
              <label for="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="input-container">
              <label for="phone">Teléfono de contacto</label>
              <input type="text" name="phone" id="phone" />
            </div>
          </div>
          <div className="message-input">
            <label for="message">Mensaje</label>
            <input type="text" name="message" id="message" />
          </div>
          <div className="checkbox-container">
            <input type="checkbox" name="checkbox-terms" id="checkbox-terms" />
            <label className="checkbox-terms-label" for="checkbox-terms">
              I accept the &nbsp;
              <a href="https://colillas.com/en/contact/" target="_blank">
                Terms
              </a>
            </label>
          </div>
          <div className="submit-button-container">
            <input type="submit" value="Enviar" id="submit" />
            <div className="submit-arrow">
              <SvgArrow />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
