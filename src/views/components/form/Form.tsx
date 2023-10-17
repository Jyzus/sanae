import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

interface Props {
  submit: SubmitHandler<FieldValues>;
  children: React.ReactElement[];
}

export const Form = ({ submit, children }: Props) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  return (
    <form onSubmit={handleSubmit(submit)}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          register: register,
          error: errors,
        })
      )}
    </form>
  );
};
