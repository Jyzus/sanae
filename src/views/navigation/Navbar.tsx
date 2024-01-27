import { LogoPath } from "@components/LogoPath";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { LogOutModal } from "./LogOutModal";
import { NavOptions } from "./NavOptions";
import { NavbarLink } from "./NavbarLink";
import { useAuthStore } from "@store/auth/authStore";
import Button from "@views/components/ui/button/Button";
import { IoMdClose } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import ButtonLink from "@views/components/ui/button/ButtonLink";

export const Navbar = () => {
  const status = useAuthStore((state) => state.status);
  const [navbar, setNavbar] = useState(false);

  const toggleNavbar = () => {
    setNavbar(!navbar);
  };
  const onLogout = () => {
    console.log("saliendo");
  };
  return (
    <>
      <nav className="bg-white overflow-hidden shadow-md">
        <div className="container mx-auto relative p-4 flex justify-between items-center bg-white">
          <Link
            to={"/"}
            className="text-xl font-bold leading-none flex items-center gap-3"
          >
            <LogoPath />
            <span className="">Sanae</span>
          </Link>
          <div className="md:hidden">
            <button
              className={`${
                navbar ? "text-red-600 rotate-90" : "text-blue-600"
              }  flex items-center duration-200 text-2xl`}
              onClick={toggleNavbar}
            >
              <IoMdMenu />
            </button>
          </div>
          <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto md:flex gap-8 lg:items-center lg:w-auto lg:space-x-6">
            {NavOptions.map((option) => (
              <li key={option.name} className="font-medium">
                <NavbarLink
                  name={option.name}
                  link={option.link}
                  active="text-sm text-main-500 font-bold"
                  pending="text-sm text-default-500 hover:text-gray-500"
                />
              </li>
            ))}
          </ul>
          <div className="md:flex items-center gap-4 hidden">
            {status == "Authenticated" && (
              <>
                <LogOutModal onLogout={onLogout} />{" "}
                {/* <Link to={"/profile"} className="w-8 h-8 rounded-full">
  <img
    src={photoURL ?? "/img/noUser.jpg"}
    alt=""
    className="w-full h-full rounded-full"
  />
</Link> */}
              </>
            )}
            {status == "not-Authenticated" && (
              <>
                <ButtonLink label="Iniciar sesión" to="/auth/login" />
              </>
            )}
          </div>
        </div>

        {/* // *Mobile */}
        <div
          className={`${
            navbar ? "" : "invisible"
          } navbar-menu relative z-50 md:hidden duration-200`}
        >
          <div
            className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"
            onClick={toggleNavbar}
          ></div>
          <nav
            className={`${
              navbar ? "translete-x-0" : "-translate-x-full"
            } duration-200 fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto`}
          >
            <div className="flex items-center mb-8">
              <a
                className="flex items-center mr-auto text-3xl font-bold leading-none"
                href="#"
              >
                <LogoPath />
                <p>Sanae</p>
              </a>
              <button
                className="text-2xl text-danger-500"
                onClick={toggleNavbar}
              >
                <IoMdClose />
              </button>
            </div>
            <div>
              <ul>
                {NavOptions.map((option) => (
                  <li className="mb-1" onClick={toggleNavbar} key={option.name}>
                    <Link
                      to={option.link}
                      className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                    >
                      {option.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-auto">
              {status == "Authenticated" && (
                <div className="pt-6">
                  <LogOutModal onLogout={onLogout} />
                  <Link
                    className="flex items-center justify-center gap-4 btn btn-md btn-outline mb-2 leading-loose"
                    to={"/profile"}
                    onClick={toggleNavbar}
                  >
                    {/* <img
                    src={photoURL ? photoURL : "/img/noUser.jpg"}
                    alt="avatar..."
                    className="w-8 h-8 rounded-full"
                  />
                  <span>{displayName}</span> */}
                  </Link>
                </div>
              )}
              {status == "not-Authenticated" && (
                <Button label="Iniciar sesión" className="w-full" />
              )}
            </div>
          </nav>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};
