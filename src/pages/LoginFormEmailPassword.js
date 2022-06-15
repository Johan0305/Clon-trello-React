import logoTrello from "../assets/logo/Logo.svg";
import ButtonFormRegister from "../components/componentsLogin/ButtonFormRegister";
import { Link, useNavigate } from "react-router-dom";
import InputForm from "../components/componentsLogin/InputForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import FacebookLogin from "react-facebook-login";

const LoginFormEmailPassword = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const nav = useNavigate();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    try {
      const res = await axios.post("http://localhost:8080/users/login", {
        email: email,
        password: password,
      });
      localStorage.setItem("token", res.data.data.token);
      localStorage.setItem("name", res.data.data.name);
      localStorage.setItem("nickname", res.data.data.nickname);
      localStorage.setItem("email", res.data.data.email);
      localStorage.setItem("picture", res.data.data.picture);
      const token = await localStorage.getItem("token");
      if (token) {
        nav("/dashboard");
      }
    } catch (e) {
      swal(
        "Error",
        "Verifique su contraseña o email, o si el usuario aún no esta registrado",
        "error"
      );
    }
  };

  const responseFacebook = async (response) => {
    try {
      console.log(response);

      const email = response.email;
      const password = response.id;

      const res = await axios.post("http://localhost:8080/users/login", {
        email: email,
        password: password,
      });
      localStorage.setItem("token", res.data.data.token);
      localStorage.setItem("name", res.data.data.name);
      localStorage.setItem("nickname", res.data.data.nickname);
      localStorage.setItem("email", res.data.data.email);
      localStorage.setItem("picture", res.data.data.picture);

      const token = await localStorage.getItem("token");
      if (token) {
        nav("/dashboard");
      }
    } catch (e) {
      swal("Error", "No se pudo iniciar sesión con facebook", "error");
    }
  };
  const componentClicked = () => {
    swal("Facebook", "Iniciarás sesión con facebook");
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
            <FacebookLogin
              appId="447152813888823"
              autoLoad={false}
              fields="name,email,picture"
              onClick={componentClicked}
              textButton="Inicia sesión con Facebook"
              callback={responseFacebook}
              cssClass="loginFormButton"
              icon={
                <div className="logginButton-Icon">
                  <FontAwesomeIcon icon={faFacebook} />
                </div>
              }
            />
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
