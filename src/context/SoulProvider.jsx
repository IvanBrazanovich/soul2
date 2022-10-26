import { createContext, useRef, useState } from "react";

const SoulContext = createContext();

import React from "react";

const SoulProvider = ({ children }) => {
  const refScroll = useRef();
  const [nav, setNav] = useState(false);

  const changeNav = (value) => {
    setNav(value);
  };

  return (
    <SoulContext.Provider
      value={{
        nav,
        changeNav,
        refScroll,
      }}
    >
      {children}
    </SoulContext.Provider>
  );
};

export { SoulProvider };

export default SoulContext;
