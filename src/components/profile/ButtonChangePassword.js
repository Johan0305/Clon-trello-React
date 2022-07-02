import { useState } from "react";
import { useForm } from "@mantine/form";
import { Modal, Button, Group, Box, PasswordInput } from "@mantine/core";
import axios from "axios";
import swal from "sweetalert";

const ButtonChangePassword = () => {
  const [opened, setOpened] = useState(false);
  const form = useForm({
    initialValues: {
      actualPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },

    validate: {
      confirmNewPassword: (value, values) =>
        value !== values.newPassword ? "Las contraseñas no coinciden" : null,
    },
  });

  const handleSubmit = async (e) => {
    const { actualPassword, newPassword, confirmNewPassword } = form.values;
    const token = localStorage.getItem("token");
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_URL_BACK}/users/changepassword`,
        {
          actualPassword: actualPassword,
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
        "Cambio de contraseña!",
        "Si tu cambio de contraseña fue exitoso recibirás un correo con la confirmación"
      );
      form.reset();
    } catch (e) {
      swal(
        "Error",
        "Verifique los datos, no se pudo actualizar la contraseña",
        "error"
      );
    }
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Cambia tu contraseña!"
      >
        {
          <Box sx={{ maxWidth: 340 }} mx="auto">
            <form onSubmit={form.onSubmit(handleSubmit)}>
              <PasswordInput
                label="Contraseña Actual"
                placeholder="Escribe tu contraseña actual"
                {...form.getInputProps("actualPassword")}
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
                <Button type="submit">Enviar</Button>
              </Group>
            </form>
          </Box>
        }
      </Modal>

      <Group position="center">
        <Button
          onClick={() => setOpened(true)}
          variant="gradient"
          gradient={{ from: "teal", to: "blue", deg: 60 }}
        >
          Cambiar contraseña
        </Button>
      </Group>
    </>
  );
};

export default ButtonChangePassword;
