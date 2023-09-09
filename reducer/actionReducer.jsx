import {
  CLOSE_LOGIN_MODAL,
  OPEN_LOGIN_MODAL,
  SET_NAV_ACTION,
} from "@/utils/_dispatchers";
import { actionList } from "@/utils/general";

export const initialValue = {
  activeNavAction: "",
  openLogin: false,
};

export const reducer = (state, action) => {
  const { type, payload } = action || {};

  switch (type) {
    case SET_NAV_ACTION:
      return { ...state, activeNavAction: payload || "" };

    case OPEN_LOGIN_MODAL:
      return { ...state, openLogin: true };
    case CLOSE_LOGIN_MODAL:
      return { ...state, openLogin: false };
    default:
      return state;
  }
};
