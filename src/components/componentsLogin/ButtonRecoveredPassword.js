import { useState } from "react";
import { useForm } from "@mantine/form";
import { Modal, Button, Group, Box, TextInput } from "@mantine/core";
import axios from "axios";
import swal from "sweetalert";

const ButtonRecoveredPassword = () => {
  const [opened, setOpened] = useState(false);
  const form = useForm({
    initialValues: {
      email: "",
    },

    validate: {
      email: (value) =>
        /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value)
          ? null
          : "El email es inválido",
    },
  });

  const handleSubmit = async (e) => {
    const { email } = form.values;
    try {
      console.log(email);
      const res = await axios.post("http://localhost:8080/users/getemail", {
        email: email,
      });
      swal(
        "Recuperación de contraseña!",
        "Si el email está registrado, se enviará un link al correo para la recuperación de la contraseña"
      );
      form.reset();
    } catch (e) {
      swal("Error", "Verifique los datos, no se pudo enviar correo", "error");
    }
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Recupera tu contraseña!"
      >
        {
          <Box sx={{ maxWidth: 340 }} mx="auto">
            <form onSubmit={form.onSubmit(handleSubmit)}>
              <TextInput
                required
                label="Escribe el email con el que estás registrado"
                className="inputForm"
                placeholder="Introduce tu email"
                {...form.getInputProps("email")}
              />
              <Group position="right" mt="md">
                <Button type="submit">Enviar</Button>
              </Group>
            </form>
          </Box>
        }
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)} variant="subtle">
          Olvidaste tu contraseña?
        </Button>
      </Group>
    </>
  );
};

export default ButtonRecoveredPassword;
