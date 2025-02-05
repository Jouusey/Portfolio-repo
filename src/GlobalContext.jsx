import React, { createContext, useState } from 'react';

// Create context
export const GlobalContext = createContext();

// Create the provider component
export function GlobalContextProvider({ children }) {
  const [content, setContent] = useState(<p>Welcome to the Homepage!</p>);

  return (
    <GlobalContext.Provider value={{ content, setGlobal: setContent }}>
      {children}
    </GlobalContext.Provider>
  );
}