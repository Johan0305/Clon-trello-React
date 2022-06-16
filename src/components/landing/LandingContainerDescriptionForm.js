import { Link } from "react-router-dom";
import ButtonFacebookLogin from "./ButtonFacebookLogin";

const LandingContainerDescriptionForm = () => {
  return (
    <>
      <div className="lCDescription-form">
        <Link to="/register-form" className=".link-lCDescription-form-button">
          <button type="submit" className="lCDescription-form-button">
            Regístrate. ¡Es gratis!
          </button>
        </Link>
      </div>
      <div className="lCDescription-formFacebook">
        <p>
          Si ya estas <strong>Registrado con Facebook</strong>, Debes hacer el
          login con el botón de
          <strong> Inicia sesión con Facebook</strong>. Si deseas registrarte
          con facebook, en la página de Regístrate encontrarás el botón!
        </p>
        <ButtonFacebookLogin />
      </div>
    </>
  );
};

export default LandingContainerDescriptionForm;
