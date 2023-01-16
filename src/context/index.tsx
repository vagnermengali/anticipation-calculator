import { ReactNode } from "react";
import ProviderCalculator from "./calculatorContext";

interface IProvider {
  children: ReactNode
}

const Providers = ({ children }: IProvider) => {
  return <ProviderCalculator>{children}</ProviderCalculator>;
};

export default Providers;
