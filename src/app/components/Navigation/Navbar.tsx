import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { BiLogOutCircle } from "react-icons/bi";
import { startLogout } from "../../../store/auth/thunks";

export const Navbar = () => {
  const { photoURL } = useSelector((state) => state.auth);
  const [navbar, setNavbar] = useState(false);
  const modalRef = useRef(null);

  const dispatch = useDispatch();

  const toggleNavbar = () => {
    setNavbar(!navbar);
  };
  const onLogout = () => {
    dispatch(startLogout());
  };
  return (
    <>
      <nav className="bg-white overflow-hidden">
        <div className="container mx-auto relative p-4 flex justify-between items-center bg-white">
          <Link
            to={"/"}
            className="text-xl font-bold leading-none text-blue-500"
          >
            <p>Sanae</p>
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
          <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
            <li>
              <a className="text-sm text-gray-400 hover:text-gray-500" href="#">
                Home
              </a>
            </li>
            <li className="text-gray-300">
              <span>|</span>
            </li>
            <li>
              <a className="text-sm text-blue-600 font-bold" href="#">
                About Us
              </a>
            </li>
            <li className="text-gray-300">
              <span>|</span>
            </li>
            <li>
              <a className="text-sm text-gray-400 hover:text-gray-500" href="#">
                Services
              </a>
            </li>
            <li className="text-gray-300">
              <span>|</span>
            </li>
            <li>
              <a className="text-sm text-gray-400 hover:text-gray-500" href="#">
                Pricing
              </a>
            </li>
            <li className="text-gray-300">
              <span>|</span>
            </li>
            <li>
              <a className="text-sm text-gray-400 hover:text-gray-500" href="#">
                Contact
              </a>
            </li>
          </ul>
          <button
            className="hidden lg:flex items-center gap-2 lg:ml-auto lg:mr-8 border border-red-400 px-4 py-1 rounded-md bg-gray-50 hover:bg-red-400 hover:text-white text-red-400 transition duration-200"
            onClick={() => modalRef.current.showModal()}
          >
            <BiLogOutCircle className="text-2xl" />
            <span className="text-sm font-semibold">Salir</span>
          </button>
          <dialog ref={modalRef} className="modal">
            <div className="modal-box">
              <p className="text-xl font-semibold">Cerrar Sesión</p>
              <p className="my-2">¿Estás seguro de cerrar sesión?</p>
              <div className="flex items-center justify-evenly">
                <form method="dialog">
                  <button className="btn">Close</button>
                </form>
                <button
                  className="btn btn-outline btn-error"
                  onClick={onLogout}
                >
                  Cerrar sesión
                </button>
              </div>
            </div>
          </dialog>
          <Link
            to={"/profile"}
            className="hidden lg:inline-block w-8 h-8 rounded-full"
          >
            <img src={photoURL} alt="" className="w-full h-full rounded-full" />
          </Link>
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div>
              <ul>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                    href="#"
                  >
                    About Us
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                    href="#"
                  >
                    Services
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                    href="#"
                  >
                    Pricing
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                    href="#"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-auto">
              <div className="pt-6">
                <a
                  className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold bg-gray-50 hover:bg-red-100 rounded-xl"
                  href="#"
                >
                  Cerrar sesión
                </a>
                <a
                  className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl"
                  href="#"
                >
                  Sign Up
                </a>
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
