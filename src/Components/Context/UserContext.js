import { createContext, useState } from "react";

export let UserContext = createContext(null);

export let UserContextProvider = ({ children }) => {
  let [name, setName] = useState("");
  return (
    <UserContext.Provider value={{ name, setName }}>
      {children}
    </UserContext.Provider>
  );
};
