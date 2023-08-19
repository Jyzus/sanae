import { NavLink } from "react-router-dom";

type Props = {
  link: string;
  name: string;
  active: string;
  pending: string;
};
export const NavbarLink = ({ link, name, active, pending }: Props) => {
  return (
    <NavLink
      to={link}
      className={({ isActive, isPending }) =>
        isPending ? "" : isActive ? active : pending
      }
    >
      {name}
    </NavLink>
  );
};
