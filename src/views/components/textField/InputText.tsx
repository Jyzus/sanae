import {
  FieldErrors,
  FieldValues,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

interface Props {
  name: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  validations?: RegisterOptions<FieldValues, string>;
  errors: FieldErrors<FieldValues>;
}

export const InputText = ({
  name,
  placeholder,
  register,
  validations,
  errors,
}: Props) => {
  return (
    <div>
      <label className="">
        <input
          {...register(name, validations)}
          type="text"
          name={name}
          id=""
          placeholder={placeholder}
          className="input input-bordered w-full"
        />
      </label>
      {!errors ? null : (
        <div className="w-full">
          {validations?.required
            ? errors[name]?.type == "required" && (
                <span className="text-error font-bold text-sm">
                  Este campo en requerido
                </span>
              )
            : null}
        </div>
      )}
    </div>
  );
};
