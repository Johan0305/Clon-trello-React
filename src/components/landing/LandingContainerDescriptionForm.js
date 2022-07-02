import { Link } from "react-router-dom";

const LandingContainerDescriptionForm = () => {
  return (
    <>
      <div className="lCDescription-form">
        <Link to="/register-form" className=".link-lCDescription-form-button">
          <button
            type="submit"
            className="lCDescription-form-button"
            data-cy="buttonBody-landing"
          >
            Regístrate. ¡Es gratis!
          </button>
        </Link>
      </div>
    </>
  );
};

export default LandingContainerDescriptionForm;
