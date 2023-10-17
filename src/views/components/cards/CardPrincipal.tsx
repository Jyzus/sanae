import { PiExam } from "react-icons/pi";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  description: string;
  tag: {
    name: string;
    color: string;
  };
  footer: string | JSX.Element;
  link: string;
}

export const CardPrincipal = ({
  title,
  description,
  tag,
  footer,
  link,
}: Props) => {
  const { name, color } = tag;
  return (
    <Link
      to={link}
      className="rounded-xl bg-white p-4 ring ring-indigo-50 hover:ring-principal sm:p-6 lg:p-8 duration-200"
    >
      <div className="flex items-start sm:gap-8">
        <div
          className="hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-principal"
          aria-hidden="true"
        >
          <PiExam className="text-4xl text-principal" />
        </div>

        <div>
          <strong
            className={`rounded border px-3 py-1.5 text-[10px] font-medium text-white`}
            style={{ borderColor: color, backgroundColor: color }}
          >
            {name}
          </strong>

          <h3 className="mt-4 text-lg font-medium sm:text-xl">
            <p>{title}</p>
          </h3>

          <p className="mt-1 text-sm text-gray-700">{description}</p>

          <div className="mt-4 sm:flex sm:items-center sm:gap-2 text-xs text-gray-500 font-medium">
            {footer}
          </div>
        </div>
      </div>
    </Link>
  );
};
