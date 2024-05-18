import { CHANGE_LANG } from "./actionTypes";

export const initialState = {
  lang: "ru",
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    // "ru" | "en"
    case CHANGE_LANG:
      return { ...state, lang: payload };

    default:
      return { ...state };
  }
};
