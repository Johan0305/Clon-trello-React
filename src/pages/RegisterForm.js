import logoTrello from "../assets/logo/Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import ButtonFacebookRegister from "../components/componentsLogin/ButtonFacebookRegister";
import RedirectionLink from "../components/componentsLogin/RedirectionLinkForm";
import axios from "axios";
import swal from "sweetalert";
import ls from "localstorage-slim";
import encUTF8 from "crypto-js/enc-utf8";
import AES from "crypto-js/aes";
import { useForm } from "@mantine/form";
import { Box, TextInput, PasswordInput, Button, Group } from "@mantine/core";

const RegisterForm = () => {
  const form = useForm({
    initialValues: {
      name: "",
      nickname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate: {
      name: (value) =>
        /^[a-zA-ZÀ-ÿ\s]{8,}$/.test(value)
          ? null
          : "El nombre debe contener mínimo 8 letras",
      nickname: (value) =>
        /^[a-zA-Z0-9]{6,}$/.test(value)
          ? null
          : "El nickname debe contener mínimo 6 carácteres",
      email: (value) =>
        /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value)
          ? null
          : "El email es inválido",
      password: (value) =>
        /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(value)
          ? null
          : "La contraseña debe contener mínimo 8 carácteres y al menos una letra mayúscula, una letra minúscula y un número",
      confirmPassword: (value, values) =>
        value !== values.password ? "Las contraseñas no coinciden" : null,
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
    const { name, nickname, email, password } = form.values;
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
      ls.set("premium", res.data.data.premium);
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
          <Box sx={{ maxWidth: 340 }} mx="auto">
            <form className="loginForm" onSubmit={form.onSubmit(handleSubmit)}>
              <TextInput
                required
                className="inputForm"
                placeholder="Introduce tu nombre"
                {...form.getInputProps("name")}
              />
              <TextInput
                required
                className="inputForm"
                placeholder="Introduce tu nickname"
                {...form.getInputProps("nickname")}
              />
              <TextInput
                required
                className="inputForm"
                placeholder="Introduce tu email"
                {...form.getInputProps("email")}
              />
              <PasswordInput
                required
                className="inputForm"
                placeholder="Introduce tu contraseña"
                {...form.getInputProps("password")}
              />
              <PasswordInput
                className="inputForm"
                placeholder="Confirma tu contraseña"
                {...form.getInputProps("confirmPassword")}
              />
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
              <Group mt="md">
                <Button
                  type="submit"
                  variant="gradient"
                  gradient={{ from: "teal", to: "lime", deg: 105 }}
                  className="loginFormButton"
                >
                  Continuar
                </Button>
              </Group>
              <p>O</p>
              <ButtonFacebookRegister />
            </form>
          </Box>
          <Link to="/login" className="linkSites2">
            ¿Ya tienes cuenta? Inicia sesión
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
