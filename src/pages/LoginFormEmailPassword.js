import logoTrello from "../assets/logo/Logo.svg";
import ButtonFormRegister from "../components/componentsLogin/ButtonFormRegister";
import { Link } from "react-router-dom";
import InputForm from "../components/componentsLogin/InputForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faApple,
  faMicrosoft,
} from "@fortawesome/free-brands-svg-icons";

const LoginFormEmailPassword = () => {
  return (
    <div className="loginContainer">
      <div className="loginMain">
        <Link to="/">
          <img width="200px" height="57.14px" src={logoTrello} alt="" />
        </Link>
        <div className="loginContainerRegister">
          <p className="loginTextCreateAccount">Iniciar sesión en Trello</p>
          <form className="loginForm">
            <InputForm
              type="email"
              text="Introduce tu correo electrónico"
            ></InputForm>
            <InputForm
              type="password"
              text="Introduce tu contraseña"
              pattern=".{6,}"
            ></InputForm>
            <p className="loginPassword-text">
              La contraseña debe contener al menos 6 caractéres.
            </p>
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
            <Link to="/loginsso" className="linkSites1">
              Ingresar con SSO
            </Link>
          </form>
          <Link to="/register-form" className="linkSites2">
            Registrese para crear una cuenta
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginFormEmailPassword;
