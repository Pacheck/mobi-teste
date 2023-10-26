import {createContext, useContext} from "react";
import {ContextProps, Props} from "@/app/context/types";

const AppContext = createContext({} as ContextProps);

const Context = ({ children }: Props) => {
  return <AppContext.Provider value={{ color: 'lightgreen' }}>
    {children}
  </AppContext.Provider>
}

export const useContextData = () => useContext(AppContext);

export default Context;