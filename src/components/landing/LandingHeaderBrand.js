import { Link } from "react-router-dom";
import logoTrello from "../../assets/logo/logo.svg";

const LandingHeaderBrand = () => {
  return (
    <Link to="/">
      <img width="128" src={logoTrello} alt="" data-cy="trelloImg-landing" />
    </Link>
  );
};

export default LandingHeaderBrand;
