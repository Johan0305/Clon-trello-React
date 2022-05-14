import { Link } from "react-router-dom";

const LandingContainerDescriptionForm = () => {
    return (
        <form className="lCDescription-form">  
            <input name="email" className="lCDescription-form-email" type="email" placeholder="Correo electrónico"/>
            <Link to="/register-form" className=".link-lCDescription-form-button"> 
                <button type="submit" className="lCDescription-form-button">            
                    Regístrate. ¡Es gratis!
                </button> 
            </Link>                   
        </form>
    );
}

export default LandingContainerDescriptionForm;