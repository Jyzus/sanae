import { Link } from "react-router-dom";
import { MdEdit } from "react-icons/md";

type Props = {
  title: string;
  img: string;
};

export const CardExamCourse = ({ title, img }: Props) => {
  // const words = title.split('')
  return (
    <div className="relative w-full border rounded-md p-4 flex gap-4 mt-4 group">
      <div className="absolute w-full h-full bg-[#000000aa] top-0 left-0 opacity-0 group-hover:opacity-100 duration-300 flex items-center justify-center gap-4">
        <Link to={"/exams/edit/uid"} className="btn btn-secondary">
          <MdEdit />
        </Link>
        <button className="btn btn-primary">Seleccionar</button>
      </div>
      <img src={img} alt="" className="w-32" />
      <div className="w-full flex flex-col justify-between">
        <div>
          <p className="text-lg font-bold">{title}</p>
          <div className="mt-2 text-sm font-medium">
            <span className="block">Frank H. Netter</span>
            <span>7ma edición</span>
          </div>
        </div>
        <div>
          <p className="font-semibold">Cantidad de preguntas</p>
          <p>195</p>
        </div>
      </div>
    </div>
  );
};
