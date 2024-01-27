import Button from "@views/components/ui/button/Button";
import React from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

interface Props {
  submit: SubmitHandler<FieldValues>;
  children: React.ReactElement[];
  className?: string;
  button?: {
    className?: string;
    label?: string;
  };
}

export const Form = ({ submit, children, button, className }: Props) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(submit)}
        className={className ?? "flex flex-col gap-2"}
      >
        {children}
        <Button
          label={button?.label ?? "Enviar"}
          type="submit"
          className={button?.className}
        />
      </form>
    </FormProvider>
  );
};
