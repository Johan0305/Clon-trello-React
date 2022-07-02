import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "@mantine/form";
import { Button, Group, Box, PasswordInput, TextInput } from "@mantine/core";
import Nav from "../components/dashboard/nav/Nav";
import axios from "axios";
import swal from "sweetalert";

const RecoverPassword = () => {
  const { token } = useParams();
  const form = useForm({
    initialValues: {
      email: "",
      newPassword: "",
      confirmNewPassword: "",
    },

    validate: {
      email: (value) =>
        /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value)
          ? null
          : "El email es inválido",
      confirmNewPassword: (value, values) =>
        value !== values.newPassword ? "Las contraseñas no coinciden" : null,
    },
  });
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    const { email, newPassword, confirmNewPassword } = form.values;
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_URL_BACK}/users/recovered-password`,
        {
          email: email,
          newPassword: newPassword,
          confirmNewPassword: confirmNewPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      swal(
        "Recuperación de contraseña!",
        "Si tu cambio de contraseña fue exitoso recibirás un correo con la confirmación"
      );
      form.reset();
      if (res.status === 201) {
        nav("/");
      }
    } catch (e) {
      swal(
        "Error",
        "Tu token expiró o verifique los datos, no se pudo recuperar la contraseña",
        "error"
      );
    }
  };

  return (
    <>
      <Nav />
      <Box
        sx={(theme) => ({
          maxWidth: 340,
          padding: theme.spacing.xl,
        })}
        mx="auto"
      >
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            label="Ingresa tu email"
            placeholder="@ Email"
            {...form.getInputProps("email")}
          />

          <PasswordInput
            mt="sm"
            label="Nueva contraseña"
            placeholder="Escribe tu nueva contraseña"
            {...form.getInputProps("newPassword")}
          />

          <PasswordInput
            mt="sm"
            label="Confirma nueva contraseña"
            placeholder="Escribe tu nueva contraseña"
            {...form.getInputProps("confirmNewPassword")}
          />

          <Group position="right" mt="md">
            <Button
              type="submit"
              variant="gradient"
              gradient={{ from: "teal", to: "blue", deg: 60 }}
            >
              Cambiar contraseña
            </Button>
          </Group>
        </form>
      </Box>
    </>
  );
};

export default RecoverPassword;
