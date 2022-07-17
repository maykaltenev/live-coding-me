import { createContext, useState } from "react";
const Context = createContext(null);
const ContextProvider = (props) => {
  const [data, setData] = useState(null);
  return (
    <Context.Provider value={{ data, setData }}>
      {props.children}
    </Context.Provider>
  );
};
export { Context, ContextProvider };
