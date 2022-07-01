import { Link } from "react-router-dom";

const LandingHeaderButton = () => {
  return (
    <Link to="/login" className="link-landingHeader-Button">
      <button
        className="landingHeader-Button"
        type="submit"
        data-cy="buttonNav-landing"
      >
        <strong>Ir a tus tableros</strong>
      </button>
    </Link>
  );
};

export default LandingHeaderButton;
