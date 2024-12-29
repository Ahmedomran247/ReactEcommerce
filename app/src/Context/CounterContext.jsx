import React, { createContext, useState } from "react";

export const CounterContext = createContext();

export default function CounterContextProvider({ children }) {
  const [count , setCount] = useState(0);
  const [userName, setUserName] = useState("");

  return (
    <CounterContext.Provider value={{ count , setCount, userName, setUserName }}>
      {children}
    </CounterContext.Provider>
  );
}
