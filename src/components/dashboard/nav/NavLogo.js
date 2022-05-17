import logoTrello from "../../../assets/logo/logo-white.svg";
import { Link } from "react-router-dom";

const NavLogo = () => {
    return(
        <figure className="nav-logo">
            <Link to="/dashboard">
                <img src={logoTrello} alt=""/>
            </Link>
        </figure>
    );
}

export default NavLogo;