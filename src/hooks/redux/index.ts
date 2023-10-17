import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { CustomDispatch, RootState } from "@store/store";

export const useCustomDispatch: () => CustomDispatch = useDispatch;
export const useCustomSelector: TypedUseSelectorHook<RootState> = useSelector;
