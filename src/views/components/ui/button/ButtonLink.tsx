import { useNavigate } from "react-router-dom";
import { Colors, colors } from "../color";
import { Button as ButtonNUI } from "@nextui-org/react";

interface Props {
  label: string;
  to: string;
  icon?: JSX.Element;
  isOnlyIcon?: boolean;
  className?: string;
  color?: Colors;
}

const ButtonLink = ({
  label,
  to,
  color = "primary",
  className,
  icon,
  isOnlyIcon,
}: Props) => {
  const navigate = useNavigate();
  return (
    <ButtonNUI
      isIconOnly={isOnlyIcon}
      startContent={icon}
      className={className}
      color={colors[color] as Colors}
      onClick={() => navigate(to)}
    >
      {label}
    </ButtonNUI>
  );
};

export default ButtonLink;
