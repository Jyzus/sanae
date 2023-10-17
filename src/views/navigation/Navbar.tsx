import { LogoPath } from "@components/LogoPath";
import { useCustomDispatch, useCustomSelector } from "@hooks/redux";
import { startLogout } from "@store/auth/thunks";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { LogOutModal } from "./LogOutModal";
import { NavOptions } from "./NavOptions";
import { NavbarLink } from "./NavbarLink";

export const Navbar = () => {
  const { photoURL, displayName } = useCustomSelector((state) => state.auth);
  const [navbar, setNavbar] = useState(false);

  const dispatch = useCustomDispatch();

  const toggleNavbar = () => {
    setNavbar(!navbar);
  };
  const onLogout = () => {
    dispatch(startLogout());
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
          <div className="lg:hidden">
            <button
              className={`${
                navbar ? "text-red-600 rotate-90" : "text-blue-600"
              } navbar-burger flex items-center p-3 duration-200`}
              onClick={toggleNavbar}
            >
              <svg
                className="block h-4 w-4 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
          <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex gap-8 lg:items-center lg:w-auto lg:space-x-6">
            {NavOptions.map((option) => (
              <li key={option.name}>
                <NavbarLink
                  name={option.name}
                  link={option.link}
                  active="text-sm text-principal font-bold"
                  pending="text-sm text-gray-400 hover:text-gray-500"
                />
              </li>
            ))}
          </ul>
          <div className="lg:flex items-center gap-4 hidden">
            <LogOutModal onLogout={onLogout} />

            <Link to={"/profile"} className="w-8 h-8 rounded-full">
              <img
                src={photoURL ? photoURL : "/img/noUser.jpg"}
                alt=""
                className="w-full h-full rounded-full"
              />
            </Link>
          </div>
        </div>

        {/* Mobile */}
        <div
          className={`${
            navbar ? "" : "invisible"
          } navbar-menu relative z-50 lg:hidden duration-200`}
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
              <a className="mr-auto text-3xl font-bold leading-none" href="#">
                <p>Sanae</p>
              </a>
              <button className="navbar-close" onClick={toggleNavbar}>
                <svg
                  className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
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
              <div className="pt-6">
                {/* <LogOutModal onLogout={onLogout} /> */}
                <Link
                  className="flex items-center justify-center gap-4 btn btn-md btn-outline mb-2 leading-loose"
                  to={"/profile"}
                  onClick={toggleNavbar}
                >
                  <img
                    src={photoURL ? photoURL : "/img/noUser.jpg"}
                    alt="avatar..."
                    className="w-8 h-8 rounded-full"
                  />
                  <span>{displayName}</span>
                </Link>
              </div>
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
