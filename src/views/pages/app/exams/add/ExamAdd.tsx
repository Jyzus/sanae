import { useCustomDispatch, useCustomSelector } from "@hooks/redux";
import { Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { getListOfCourses } from "@store/app/thunks";
import { useEffect } from "react";
import { FieldValues } from "react-hook-form";
import { ModalAddCourse } from "./ModalAddCourse";

export const ExamAdd = () => {
  const { listOfCourses } = useCustomSelector((state) => state.app);

  const dispatch = useCustomDispatch();

  const handleNewCourse = (value: FieldValues) => {
    console.log(value);
  };
  const onSubmit = (value: FieldValues) => {
    console.log(value);
  };

  useEffect(() => {
    dispatch(getListOfCourses());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-4 p-4 rounded-md bg-white shadow-md">
      <h1 className="text-xl font-bold text-center">
        Añadir nueva fuente de información
      </h1>
      {/* Formulario */}
      <form onSubmit={onSubmit}>
        <div className="flex items-center gap-4 w-full mt-4">
          <Select label="Elige un curso">
            {listOfCourses &&
              listOfCourses.map((course: string, key: number) => (
                <SelectItem key={key}>{course}</SelectItem>
              ))}
          </Select>
          <ModalAddCourse handleNewCourse={handleNewCourse} />
        </div>
        <div className="mt-4 flex flex-col sm:flex-row gap-4 w-full">
          <label
            htmlFor="inputImage"
            className="sm:w-72 h-80 border-2 border-dashed rounded-md cursor-pointer"
          >
            {/* {inputImageRef.current?.value == undefined ? (
              <IoAddCircleOutline />
            ) : (
              <img src={inputImageRef.current} alt="" />
            )} */}
            <input
              type="file"
              name="inputImage"
              id="inputImage"
              className="hidden"
            />
          </label>
          <div className="w-full grid sm:grid-cols-2 h-fit gap-y-4 gap-x-2">
            <Input label="Titulo del libro" className="w-full sm:col-span-2" />
            <Input label="Autor" />
            <Input label="Edición" />
            <Textarea label="Descripción" className="w-full sm:col-span-2" />
          </div>
        </div>
        <div className="mt-4 w-full flex justify-center">
          <button className="btn btn-success">
            Añadir secciones y preguntas
          </button>
        </div>
      </form>
    </div>
  );
};
