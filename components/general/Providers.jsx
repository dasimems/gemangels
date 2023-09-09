import { ActionProvider, UserProvider } from "@/context";
import React from "react";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <ActionProvider>{children}</ActionProvider>;
    </UserProvider>
  );
};

export default Providers;
