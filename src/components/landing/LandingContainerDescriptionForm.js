import { Link } from "react-router-dom";

const LandingContainerDescriptionForm = () => {
  return (
    <form className="lCDescription-form">
      <Link to="/register-form" className=".link-lCDescription-form-button">
        <button type="submit" className="lCDescription-form-button">
          Regístrate. ¡Es gratis!
        </button>
      </Link>
      <p>O</p>
      <Link to="/login" className=".link-lCDescription-form-button">
        <button type="submit" className="lCDescription-form-button">
          Si ya tienes cuenta, ¡Inicia Sesión!
        </button>
      </Link>
    </form>
  );
};

export default LandingContainerDescriptionForm;
