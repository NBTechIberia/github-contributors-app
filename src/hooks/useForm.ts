import { useState } from "react";

export const useForm = (initialState: {}): [
  any,
  (event: React.ChangeEvent<HTMLInputElement>) => void
] => {
  const [values, setValues] = useState(initialState);

  const handleInputChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  return [values, handleInputChange];
};
