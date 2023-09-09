import { userInitialValue, userReducer } from "@/reducer";
import React, { createContext, useContext, useReducer } from "react";

const UserContext = createContext({
  ...userInitialValue,
});

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, userInitialValue);
  return (
    <UserContext.Provider value={{ ...state }}>{children}</UserContext.Provider>
  );
};

const useUserContext = () => {
  return useContext(UserContext);
};

export default useUserContext;
