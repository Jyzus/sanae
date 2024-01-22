import { Button as ButtonNUI } from "@nextui-org/react";
import { Colors, colors } from "../color";

interface Props {
  label?: string;
  icon?: JSX.Element;
  isOnlyIcon?: boolean;
  className?: string;
  color?: Colors;
}

const Button = ({
  label,
  icon,
  isOnlyIcon,
  className,
  color = "primary",
}: Props) => {
  return (
    <ButtonNUI
      isIconOnly={isOnlyIcon}
      startContent={icon}
      className={className}
      color={colors[color] as Colors}
    >
      {label}
    </ButtonNUI>
  );
};

export default Button;
