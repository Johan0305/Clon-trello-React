import logoTrello from "../assets/logo/Logo.svg";
import ButtonFormRegister from "../components/componentsLogin/ButtonFormRegister";
import { Link } from "react-router-dom";
import InputForm from "../components/componentsLogin/InputForm";
import RedirectionLink from "../components/componentsLogin/RedirectionLinkForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faApple,
  faMicrosoft,
} from "@fortawesome/free-brands-svg-icons";

const RegisterForm = () => {
  return (
    <div className="loginContainer">
      <div className="loginMain">
        <Link to="/">
          <img width="200px" height="57.14px" src={logoTrello} alt="" />
        </Link>
        <div className="loginContainerRegister">
          <p className="loginTextCreateAccount">Crea tu cuenta</p>
          <form className="loginForm">
            <InputForm
              type="email"
              text="Introduce tu correo electrónico"
            ></InputForm>
            <small>
              Al registrarte, confirmas que has leído y aceptado nuestras
              <RedirectionLink
                text=" Condiciones del servicio "
                redirect="https://www.atlassian.com/legal/cloud-terms-of-service"
                numId={1}
              />
              y nuestra
              <RedirectionLink
                text=" Política de Privacidad."
                redirect="https://www.atlassian.com/legal/privacy-policy"
                numId={1}
              />
            </small>
            <ButtonFormRegister
              text={"Continuar"}
              color={"white"}
              background={"#28a746"}
              idbtn={1}
            ></ButtonFormRegister>
            <p>O</p>
            <ButtonFormRegister
              text={"Continuar con Google"}
              icon={<FontAwesomeIcon icon={faGoogle} />}
              color={"#212529"}
              background={"#f8f9fa"}
              idbtn={2}
            />
            <ButtonFormRegister
              text={"Continuar con Microsoft"}
              icon={<FontAwesomeIcon icon={faMicrosoft} />}
              color={"#212529"}
              background={"#f8f9fa"}
              idbtn={2}
            />
            <ButtonFormRegister
              text={"Continuar con Apple"}
              icon={<FontAwesomeIcon icon={faApple} />}
              color={"#212529"}
              background={"#f8f9fa"}
              idbtn={2}
            />
          </form>
          <Link to="/login" className="linkSites2">
            ¿Ya tienes cuenta? Inicia sesión
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
