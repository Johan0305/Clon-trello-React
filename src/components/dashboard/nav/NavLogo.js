import logoTrello from "../../../assets/logo/logo-white.svg";

const NavLogo = () => {
    return(
        <figure className="nav-logo">
            <a>
                <img src={logoTrello} alt=""/>
            </a>
        </figure>
    );
}

export default NavLogo;