import Button from "@views/components/ui/button/Button";
import InputText from "@views/components/ui/input/InputText";
import AuthLayout from "@views/layouts/auth/AuthLayout";
import { FieldValues, useForm } from "react-hook-form";
import { MdLock, MdMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (values: FieldValues) => {
    console.log(values);
  };
  return (
    <AuthLayout title="Regístrate y forma parte de esta familia">
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputText
          {...register("email")}
          label="Correo"
          startContent={<MdMailOutline />}
          placeholder="yourmail@mail.com"
        />
        <InputText
          {...register("password")}
          label="Contraseña"
          startContent={<MdLock />}
          placeholder="contraseña1234"
          type="password"
        />
        <InputText
          label="Confirmar contraseña"
          startContent={<MdLock />}
          placeholder="contraseña1234"
          type="password"
        />
        <Button label="Iniciar sesión" type="submit" />
      </form>
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
