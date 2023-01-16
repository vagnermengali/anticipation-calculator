import { createContext, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

export const Context = createContext<IContext>({} as IContext)

interface IProvider {
  children: ReactNode
}

interface IContext {

}
const ProviderCalculator = ({ children }: IProvider) => {
  const navigate = useNavigate();

  return (
    <Context.Provider value={{ navigate }}>
      {children}
    </Context.Provider>);
};

export default ProviderCalculator;
