import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

export const AddInformationSource = () => {
  const [addCourse, setAddCourse] = useState(false);

  const handleAddCourse = () => {
    setAddCourse(!addCourse);
  };
  return (
    <>
      <div className="modal-box">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
        <form action="">
          <h3 className="font-bold text-lg">Añadir una funte de información</h3>
          <div className="mt-4">
            <div className="flex items-center gap-4">
              <select
                className="select select-bordered w-full"
                defaultValue={"---"}
              >
                <option value={"empty"}>Elige un curso</option>
                {/* {courses.length > 0
                  ? courses.map((course: any) => (
                      <option value={course.id} key={course.id}>
                        {course.course}
                      </option>
                    ))
                  : null} */}
              </select>
              {!addCourse ? (
                <button
                  type="button"
                  className="btn btn-info"
                  onClick={handleAddCourse}
                >
                  +
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-error"
                  onClick={handleAddCourse}
                >
                  <AiOutlineClose />
                </button>
              )}
            </div>
            {addCourse && (
              <div className="flex items-center justify-center mt-4 gap-4">
                <input
                  type="text"
                  placeholder="Nombre del curso"
                  className="input input-bordered w-full input-md"
                />
                <button type="button" className="btn btn-primary">
                  Añadir
                </button>
              </div>
            )}
          </div>
          <button type="submit" className="btn btn-success mt-4">
            Añadir fuente
          </button>
        </form>
      </div>
    </>
  );
};
