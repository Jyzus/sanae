import { useState } from "react";

export const useHandleState = (initialState = false): [boolean, () => void] => {
  const [state, setState] = useState(initialState);
  const handleState = () => {
    setState(!state);
  };
  return [state, handleState];
};
