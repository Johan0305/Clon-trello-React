import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import swal from "sweetalert";
import ls from "localstorage-slim";
import encUTF8 from "crypto-js/enc-utf8";
import AES from "crypto-js/aes";
import FacebookLogin from "react-facebook-login";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ButtonFacebookLogin = () => {
  const nav = useNavigate();

  const responseFacebook = async (response) => {
    const resFb = await response;
    console.log(resFb);

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

    const email = resFb.email;
    const password = resFb.id;

    try {
      const res = await axios.post("http://localhost:8080/users/login", {
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
        "No se pudo iniciar sesión con facebook, posiblemente no este registrado con Facebook, de click en el botón Registrate con Facebook",
        "error"
      );
    }
  };

  return (
    <FacebookLogin
      appId="447152813888823"
      autoLoad={false}
      fields="name,email,picture"
      callback={responseFacebook}
      textButton="Inicia sesión con Facebook"
      cssClass="lCDescription-form-buttonFb"
      icon={<FontAwesomeIcon icon={faFacebook} className="logginButton-Icon" />}
    />
  );
};

export default ButtonFacebookLogin;
