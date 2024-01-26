import { LogoPath } from "@views/components/LogoPath";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  children: JSX.Element | JSX.Element[];
}

const AuthLayout = ({ children, title }: Props) => {
  return (
    <div className="relative py-4 md:py-16 bg-gradient-to-br from-sky-50 to-gray-200 min-h-screen flex items-center justify-center">
      <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
        <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
          <div className="rounded-xl bg-white shadow-xl">
            <div className="p-6 sm:p-16">
              <div className="space-y-4">
                <Link to={"/"}>
                  <LogoPath />
                </Link>
                <h2 className="mb-8 text-2xl text-cyan-900 font-bold">
                  {title}
                </h2>
              </div>
              <div className="my-16 grid space-y-4">{children}</div>
              <div className="space-y-4 text-gray-600 text-center sm:-mb-8">
                <p className="text-xs">
                  Al ingresar a este sitio, usted acepta nuestros{" "}
                  <a href="#" className="underline">
                    Términos y condiciones
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
