import { useParams } from "react-router-dom";

export const useCustomParam = () => {
  const param = useParams();
  return param;
};
