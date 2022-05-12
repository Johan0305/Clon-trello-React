import logoTrello from "../assets/logo/Logo.svg";
import ButtonFormRegister from "../components/componentsLogin/ButtonFormRegister";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <div className="loginContainer">
      <div className="loginMain">
        <img width="200px" height="57.14px" src={logoTrello} alt="" />
        <div className="loginContainerRegister">
          <p className="loginTextCreateAccount">Crea tu cuenta</p>
          <form className="loginForm">
            <input
              type="email"
              placeholder="Introduce tu correo electronico"
            ></input>
            <small>
              Al registrarte, confirmas que has leído y aceptado nuestras
              <Link to="/cs" className="linkSites1">
                {" Condiciones del servicio "}
              </Link>
              y nuestra
              <Link to="/pp" className="linkSites1">
                {" Política de Privacidad."}
              </Link>
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
              color={"#212529"}
              background={"#f8f9fa"}
              idbtn={2}
            />
            <ButtonFormRegister
              text={"Continuar con Microsoft"}
              color={"#212529"}
              background={"#f8f9fa"}
              idbtn={2}
            />
            <ButtonFormRegister
              text={"Continuar con Apple"}
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
