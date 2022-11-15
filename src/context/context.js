import { createContext, useState } from "react";
export const colorContext = createContext();

export function ContextProvider({ children }) {
  const [color, setColor] = useState("#000000");

  //voir index.js pour attribuer les contexts aux enfants

  return (
    <colorContext.Provider
      value={{
        color,
        setColor,
      }}
    >
      {children}
    </colorContext.Provider>
  );
}
