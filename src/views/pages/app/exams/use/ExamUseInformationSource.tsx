import { useCustomDispatch } from "@hooks/redux";
import { useCustomParam } from "@hooks/useCustomParams";
import { getTopics } from "@store/app/thunks";
import { useEffect } from "react";

export const ExamUseInformationSource = () => {
  const { id } = useCustomParam();
  const dispatch = useCustomDispatch();
  useEffect(() => {
    dispatch(getTopics(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="container mx-auto mt-4">
      <div>
        <img src="" alt="" />
      </div>
    </div>
  );
};
