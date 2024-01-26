import { Input } from "@nextui-org/react";
import { Colors, colors } from "../color";
import { FieldValues } from "react-hook-form";

interface Props {
  label: string;
  startContent?: JSX.Element;
  placeholder?: string;
  type?: string;
  color?: Colors;
  onChange?: (event: FieldValues) => void;
}

const InputText = ({
  label,
  startContent,
  placeholder,
  type = "text",
  color = "default",
  onChange,
}: Props) => {
  return (
    <Input
      label={label}
      startContent={startContent}
      placeholder={placeholder}
      type={type}
      color={colors[color] as Colors}
      onChange={onChange}
    />
  );
};

export default InputText;
