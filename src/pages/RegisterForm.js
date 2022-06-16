import logoTrello from "../assets/logo/Logo.svg";
import ButtonFormRegister from "../components/componentsLogin/ButtonFormRegister";
import { Link, useNavigate } from "react-router-dom";
import InputForm from "../components/componentsLogin/InputForm";
import ButtonFacebookRegister from "../components/componentsLogin/ButtonFacebookRegister";
import RedirectionLink from "../components/componentsLogin/RedirectionLinkForm";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import ls from "localstorage-slim";
import encUTF8 from "crypto-js/enc-utf8";
import AES from "crypto-js/aes";

const RegisterForm = () => {
  const [user, setUser] = useState({
    name: "",
    nickname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const nav = useNavigate();
  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    ls.config.encrypt = true;
    ls.config.secret = "secret-string";

    ls.config.encrypter = (data, secret) =>
      AES.encrypt(JSON.stringify(data), secret).toString();

    ls.config.decrypter = (data, secret) => {
      try {
        return JSON.parse(AES.decrypt(data, secret).toString(encUTF8));
      } catch (e) {
        return data;
      }
    };
    const { name, nickname, email, password } = user;
    try {
      const res = await axios.post("http://localhost:8080/users/register", {
        name: name,
        nickname: nickname,
        email: email,
        password: password,
      });
      localStorage.setItem("token", res.data.data.token);
      ls.set("name", res.data.data.name);
      ls.set("nickname", res.data.data.nickname);
      ls.set("email", res.data.data.email);
      ls.set("picture", res.data.data.picture);
      const token = await localStorage.getItem("token");
      if (token) {
        nav("/dashboard");
      }
    } catch (e) {
      swal("Error", "El usuario ya se encuentra registrado", "error");
    }
  };

  return (
    <div className="loginContainer">
      <div className="loginMain">
        <Link to="/">
          <img width="200px" height="57.14px" src={logoTrello} alt="" />
        </Link>
        <div className="loginContainerRegister">
          <p className="loginTextCreateAccount">Crea tu cuenta</p>
          <form className="loginForm" onSubmit={handleSubmit}>
            <InputForm
              type="name"
              name="name"
              text="Introduce tu nombre"
              pattern="^[A-Za-z].{8,}$"
              errorMessage="El nombre es requerido y debe contener mínimo 8 carácteres"
              onChange={handleChange}
              value={user.name}
            ></InputForm>
            <InputForm
              type="nickname"
              name="nickname"
              text="Introduce tu nickname"
              pattern="^[A-Za-z0-9].{8,}$"
              errorMessage="El nickname es requerido y debe contener mínimo 8 carácteres"
              onChange={handleChange}
              value={user.nickname}
            ></InputForm>
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
              onChange={handleChange}
              value={user.password}
            ></InputForm>
            <InputForm
              type="password"
              name="confirmPassword"
              text="Confirma tu contraseña"
              pattern={user.password}
              errorMessage="Las contraseñas no coinciden"
              onChange={handleChange}
              value={user.confirmPassword}
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
            <ButtonFacebookRegister />
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
