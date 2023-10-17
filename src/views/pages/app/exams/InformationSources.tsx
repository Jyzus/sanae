import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import { CardExamCourse } from "@components/cards/CardExamCourse";

export const InformationSources = () => {
  const [navbar, setNavbar] = useState(false);
  const toggleNavbar = () => {
    setNavbar(!navbar);
  };
  return (
    <div
      className={`${
        navbar ? "absolute top-0 left-0 h-screen w-full overflow-auto" : ""
      } lg:relative lg:h-auto lg:overflow-auto lg:col-span-4 lg:w-auto p-4 mx-2 rounded-md border shadow-md bg-white`}
    >
      <div className="flex items-center">
        <h3 className="text-center font-semibold text-xl w-full">
          Fuentes de información
        </h3>
        <Link to="add" className="btn btn-sm btn-success">
          +
        </Link>
        <button
          className="btn btn-sm btn-success ml-2 lg:hidden"
          onClick={toggleNavbar}
        >
          <FiMenu />
        </button>
      </div>
      <div
        className={`${
          navbar ? "grid" : "hidden"
        } lg:grid mt-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2`}
      >
        <CardExamCourse
          title="Atlas de anatomía humana"
          img="https://contentv2.tap-commerce.com/cover/large/9780323547048_1.jpg?id_com=1158"
        />
        <CardExamCourse
          title="Atlas de anatomía humana"
          img="https://contentv2.tap-commerce.com/cover/large/9780323547048_1.jpg?id_com=1158"
        />
        <CardExamCourse
          title="Atlas de anatomía humana"
          img="https://contentv2.tap-commerce.com/cover/large/9780323547048_1.jpg?id_com=1158"
        />
      </div>
    </div>
  );
};
