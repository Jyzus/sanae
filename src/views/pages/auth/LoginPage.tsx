import { ButtonLogin } from "@views/components/ui/button/ButtonLogin";
import { LogoPath } from "../../components/LogoPath";

export const LoginPage = () => {
  return (
    <div className="relative py-4 md:py-16 bg-gradient-to-br from-sky-50 to-gray-200 min-h-screen flex items-center justify-center">
      <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
        <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
          <div className="rounded-xl bg-white shadow-xl">
            <div className="p-6 sm:p-16">
              <div className="space-y-4">
                <LogoPath />
                <h2 className="mb-8 text-2xl text-cyan-900 font-bold">
                  Inicia sesión y empieza <br /> tu aprendizaje.
                </h2>
              </div>
              <div className="mt-16 grid space-y-4">
                <ButtonLogin
                  text="Continuar con Google"
                  icon="https://cdn.iconscout.com/icon/free/png-256/free-google-1772223-1507807.png"
                />
                <ButtonLogin
                  text="Continuar con Github"
                  icon="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                  disable
                />
                <ButtonLogin
                  text="Continuar con Facebook"
                  icon="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
                  disable
                />
              </div>
              {/* {errorMessage && (
                <div className="w-full h-12 bg-red-500 rounded-lg text-white font-semibold flex items-center justify-center mt-4 shadow-lg">
                  {errorMessage}
                </div>
              )} */}

              {/* Términos y condiciones */}
              <div className="mt-32 space-y-4 text-gray-600 text-center sm:-mb-8">
                <p className="text-xs">
                  Al ingresar a este sitio, usted acepta nuestros{" "}
                  <a href="#" className="underline">
                    Términos y condiciones
                  </a>
                  .
                </p>
                <p className="text-xs">
                  This site is protected by reCAPTCHA and the{" "}
                  <a href="#" className="underline">
                    Google Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="#" className="underline">
                    Terms of Service
                  </a>{" "}
                  apply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
