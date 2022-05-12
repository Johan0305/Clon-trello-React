const LandingContainerDescriptionForm = () => {
    return (
        <form class="lCDescription-form">  
            <input name="email" class="lCDescription-form-email" type="email" placeholder="Correo electrónico"/>
            <button type="submit" class="lCDescription-form-button">
                Regístrate. ¡Es gratis!
            </button>                      
        </form>
    );
}

export default LandingContainerDescriptionForm;