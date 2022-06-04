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
import { useState } from "react";
import axios from "axios";

const LoginFormEmailPassword = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    const res = await axios.post("http://localhost:8080/users/login", {
      email: email,
      password: password,
    });
    localStorage.setItem("token", res.data.data.token);
  };

  return (
    <div className="loginContainer">
      <div className="loginMain">
        <Link to="/">
          <img width="200px" height="57.14px" src={logoTrello} alt="" />
        </Link>
        <div className="loginContainerRegister">
          <p className="loginTextCreateAccount">Iniciar sesión en Trello</p>
          <form className="loginForm" onSubmit={handleSubmit}>
            <InputForm
              type="email"
              name="email"
              text="Introduce tu correo electrónico"
              pattern="[a-zA-Z0-9!#$%&'*_+-]([\.]?[a-zA-Z0-9!#$%&'*_+-])+@[a-zA-Z0-9]([^@&%$\/()=?¿!.,:;]|\d)+[a-zA-Z0-9][\.][a-zA-Z]{2,4}([\.][a-zA-Z]{2})?"
              errorMessage="El email es requerido y debe ser válido"
              onChange={handleChange}
              value={user.email}
            ></InputForm>
            <InputForm
              type="password"
              name="password"
              text="Introduce tu contraseña"
              pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}"
              errorMessage="La contraseña es requerida y debe contener mínimo 8 carácteres y al menos una letra mayúscula, una letra minúscula y un número"
              value={user.password}
              onChange={handleChange}
            ></InputForm>
            <ButtonFormRegister
              text={"Continuar"}
              color={"white"}
              background={"#28a746"}
              idbtn={1}
            />
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
