import logoTrello from "../assets/logo/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "@mantine/form";
import { Box, TextInput, PasswordInput, Button, Group } from "@mantine/core";
import axios from "axios";
import swal from "sweetalert";
import ls from "localstorage-slim";
import encUTF8 from "crypto-js/enc-utf8";
import AES from "crypto-js/aes";
import ButtonRecoveredPassword from "../components/componentsLogin/ButtonRecoveredPassword";

const LoginFormEmailPassword = () => {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value) =>
        /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value)
          ? null
          : "El email es inválido",
      password: (value) =>
        /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(value)
          ? null
          : "La contraseña debe contener mínimo 8 carácteres y al menos una letra mayúscula, una letra minúscula y un número",
    },
  });
  const nav = useNavigate();

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

  const handleSubmit = async (e) => {
    const { email, password } = form.values;
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_URL_BACK}/users/login`,
        {
          email: email,
          password: password,
        }
      );
      localStorage.setItem("token", res.data.data.token);
      ls.set("name", res.data.data.name);
      ls.set("nickname", res.data.data.nickname);
      ls.set("email", res.data.data.email);
      ls.set("picture", res.data.data.picture);
      ls.set("premium", res.data.data.premium);
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

  return (
    <div className="loginContainer">
      <div className="loginMain">
        <Link to="/">
          <img
            width="200px"
            height="57.14px"
            src={logoTrello}
            alt=""
            data-cy="trelloImg-login"
          />
        </Link>
        <div className="loginContainerRegister">
          <p className="loginTextCreateAccount">Iniciar sesión en Trello</p>
          <Box>
            <form className="loginForm" onSubmit={form.onSubmit(handleSubmit)}>
              <TextInput
                required
                className="inputForm"
                placeholder="Introduce tu email"
                {...form.getInputProps("email")}
                data-cy="textInput-login"
              />
              <PasswordInput
                required
                className="inputForm"
                placeholder="Introduce tu contraseña"
                {...form.getInputProps("password")}
                data-cy="passwordInput-login"
              />
              <Group mt="md">
                <Button
                  type="submit"
                  variant="gradient"
                  gradient={{ from: "teal", to: "lime", deg: 105 }}
                  className="loginFormButton"
                  data-cy="button-login"
                >
                  Continuar
                </Button>
              </Group>
            </form>
          </Box>
          <ButtonRecoveredPassword />
          <Link to="/register-form" className="linkSites2">
            Registrese para crear una cuenta
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginFormEmailPassword;
