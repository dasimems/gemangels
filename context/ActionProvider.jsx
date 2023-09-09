import { actionInitialValue, actionReducer } from "@/reducer";
import {
  CLOSE_LOGIN_MODAL,
  OPEN_LOGIN_MODAL,
  SET_NAV_ACTION,
} from "@/utils/_dispatchers";
import React, {
  createContext,
  useCallback,
  useContext,
  useReducer,
} from "react";

const ActionContext = createContext({
  ...actionInitialValue,
  setActiveNavAction: () => {},
  openLoginModal: () => {},
  performAction: () => {},
  closeLoginModal: () => {},
});

export const ActionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(actionReducer, actionInitialValue);

  const setActiveNavAction = useCallback((payload) => {
    dispatch({
      type: SET_NAV_ACTION,
      payload: payload || "",
    });
  }, []);

  const openLoginModal = useCallback(() => {
    dispatch({
      type: OPEN_LOGIN_MODAL,
    });
  }, []);

  const closeLoginModal = useCallback(() => {
    dispatch({
      type: CLOSE_LOGIN_MODAL,
    });
  }, []);

  const performAction = useCallback((type, payload) => {
    dispatch({
      type,
      payload,
    });
  }, []);

  return (
    <ActionContext.Provider
      value={{
        ...state,
        setActiveNavAction,
        openLoginModal,
        performAction,
        closeLoginModal,
      }}
    >
      {children}
    </ActionContext.Provider>
  );
};

const useActionContext = () => {
  return useContext(ActionContext);
};

export default useActionContext;
