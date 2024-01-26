import InputTextCustom from "@components/ui/input/InputText";
import { Colors } from "@views/components/ui/color";
import {
  Controller,
  FieldValues,
  RegisterOptions,
  useFormContext,
} from "react-hook-form";

interface Props {
  label: string;
  name: string;
  validations?: RegisterOptions<FieldValues, string>;
  startContent?: JSX.Element;
  placeholder?: string;
  type?: string;
  color?: Colors;
  onChange?: (event: FieldValues) => void;
}

const InputText = ({
  label,
  name,
  validations,
  startContent,
  placeholder,
  type,
  color,
  onChange,
}: Props) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      rules={validations}
      render={({ field }) => (
        <InputTextCustom
          {...field}
          label={label}
          startContent={startContent}
          placeholder={placeholder}
          type={type}
          color={color}
          onChange={onChange}
        />
      )}
    />
  );
};

export default InputText;
