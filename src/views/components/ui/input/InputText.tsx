import { Input } from "@nextui-org/react";

interface Props {
  label: string;
}

const InputText = ({ label }: Props) => {
  return <Input label={label} />;
};

export default InputText;
