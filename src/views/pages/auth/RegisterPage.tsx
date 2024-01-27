import InputText from "@views/components/form/input/InputText";
import { Form } from "@views/components/form/provider/Form";
import AuthLayout from "@views/layouts/auth/AuthLayout";
import { FieldValues } from "react-hook-form";
import { MdLock, MdMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const onSubmit = (values: FieldValues) => {
    console.log(values);
  };
  return (
    <AuthLayout title="Regístrate y forma parte de esta familia">
      <Form
        submit={onSubmit}
        button={{ label: "Registrarse", className: "mt-4 w-full" }}
      >
        <InputText
          name="email"
          label="Correo"
          startContent={<MdMailOutline />}
          validations={{ required: true }}
          placeholder="yourmail@mail.com"
        />
        <InputText
          name="password"
          label="Contraseña"
          validations={{ required: "La contraseña es necesaria" }}
          startContent={<MdLock />}
          placeholder="contraseña1234"
          type="password"
        />
        <InputText
          name="confirmPassword"
          label="Confirmar contraseña"
          validations={{
            required: "Necesitas confirmar la contraseña",
            validate: (value) =>
              value == "password" || "La contraseña debe ser la misma",
          }}
          startContent={<MdLock />}
          placeholder="contraseña1234"
          type="password"
        />
      </Form>
      <p className="text-sm text-center">
        ¿Ya tienes una cuenta?{" "}
        <Link
          to={"/auth/login"}
          className="text-main-600 hover:text-main-700 font-semibold"
        >
          Inicia sesión
        </Link>
      </p>
    </AuthLayout>
  );
};

export default RegisterPage;
