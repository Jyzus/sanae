import Button from "@views/components/ui/button/Button";
import InputText from "@views/components/ui/input/InputText";
import AuthLayout from "@views/layouts/auth/AuthLayout";
import { MdLock, MdMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <AuthLayout title="Inicia sesión y empieza tu aprendizaje">
      <InputText
        label="Correo"
        startContent={<MdMailOutline />}
        placeholder="yourmail@mail.com"
      />
      <InputText
        label="Contraseña"
        startContent={<MdLock />}
        placeholder="contraseña1234"
        type="password"
      />
      <Button label="Iniciar sesión" />
      <p className="text-sm text-center">
        ¿No tienes una cuenta?{" "}
        <Link
          to={"/auth/register"}
          className="text-main-600 hover:text-main-700 font-semibold"
        >
          Registrarse
        </Link>
      </p>
    </AuthLayout>
  );
};
