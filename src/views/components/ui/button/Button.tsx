import { Button as ButtonNUI } from "@nextui-org/react";
import { Colors, colors } from "../color";

interface Props {
  label?: string;
  icon?: JSX.Element;
  isOnlyIcon?: boolean;
  className?: string;
  color?: Colors;
  onClick?: () => void;
  type?: "button" | "reset" | "submit";
}

const Button = ({
  label,
  icon,
  isOnlyIcon,
  className,
  color = "primary",
  onClick,
  type = "button",
}: Props) => {
  return (
    <ButtonNUI
      isIconOnly={isOnlyIcon}
      startContent={icon}
      className={className}
      color={colors[color] as Colors}
      onClick={onClick}
      type={type}
    >
      {label}
    </ButtonNUI>
  );
};

export default Button;
