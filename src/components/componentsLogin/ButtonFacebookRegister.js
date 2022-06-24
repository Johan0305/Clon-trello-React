import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import swal from "sweetalert";
import ls from "localstorage-slim";
import encUTF8 from "crypto-js/enc-utf8";
import AES from "crypto-js/aes";
import FacebookLogin from "react-facebook-login";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ButtonFacebookRegister = () => {
  const nav = useNavigate();

  const responseFacebookRe = async (response) => {
    const resFb = await response;

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

    const name = resFb.name;
    const nickname = resFb.name;
    const email = resFb.email;
    const password = resFb.id;

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

      const token = localStorage.getItem("token");
      if (token) {
        nav("/dashboard");
      }
    } catch (e) {
      swal(
        "Error",
        "No se pudo iniciar sesión con facebook, posiblemente ya este registrado con facebook, de click en el botón Inicia sesión con Facebook",
        "error"
      );
    }
  };

  return (
    <FacebookLogin
      appId="447152813888823"
      autoLoad={false}
      fields="name,email,picture"
      callback={responseFacebookRe}
      textButton="Registrate con Facebook"
      cssClass="loginFormButton"
      icon={<FontAwesomeIcon icon={faFacebook} className="logginButton-Icon" />}
    />
  );
};

export default ButtonFacebookRegister;
