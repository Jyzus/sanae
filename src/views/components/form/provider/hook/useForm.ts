import { useState } from "react";
import { useForm as useFormRHF } from "react-hook-form";

export const useForm = () => {
  const form = useFormRHF();
  const [error, setError] = useState(null);
};
