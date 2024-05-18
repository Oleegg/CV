import { createContext } from "react";
import { initialState } from "./reducer";

export const Context = createContext({
  state: initialState,
  dispatch: () => {},
});
