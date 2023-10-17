import { InformationSource } from "interface/InformationSources.interface";
import { Link } from "react-router-dom";

export const CardExam = ({
  title,
  subject,
  image,
  edition,
  author,
  description,
  id,
}: InformationSource) => {
  const titleShort = title.length <= 30 ? title : title.slice(0, 30) + "...";
  const descriptionShort =
    description.length <= 230 ? description : description.slice(0, 230) + "...";
  return (
    <Link
      to={`use/${id}`}
      className="w-full border rounded-md group duration-300 text-center"
    >
      <div className="h-72 overflow-hidden">
        <img
          src={image}
          alt={subject}
          className="w-full object-cover h-[80%] group-hover:h-[20%] rouned-md duration-300"
        />
        <div className="p-2 h-[20%] group-hover:h-[80%] duration-300">
          <h4>{titleShort}</h4>
          <p className="font-bold hidden group-hover:block">{author}</p>
          <p className="font-bold text-sm hidden group-hover:block">
            {edition}
          </p>
          <p className="text-sm hidden group-hover:block duration-300">
            {descriptionShort}
          </p>
        </div>
      </div>
      {/* <Tag value={subject} className="mb-2" /> */}
    </Link>
  );
};
