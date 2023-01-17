import {
  createContext, ReactNode, useState, Dispatch, SetStateAction
} from 'react';
import Api from "../services/api"
import { toast } from "react-toastify";
import { useNavigate, NavigateFunction } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

export const Context = createContext<IContext>({} as IContext)

interface IProvider {
  children: ReactNode
}

interface ICalculatorData {
  amount: number
  installments: number
  mdr: number
}

interface ICalculatorResponse {
  1: number
  15: number
  30: number
  90: number
}

interface ICalculation {
  1: number
  15: number
  30: number
  90: number
}

interface IContext {
  navigate: NavigateFunction;

  notifyLoginSuccess?: (test: string) => void;

  notifyLoginError?: (test: string) => void;

  PostCalculator: (data: ICalculatorData) => any

  finalCalculation: ICalculation

  setfinalCalculation: Dispatch<SetStateAction<ICalculation>>

  calculation: boolean

  setCalculation: Dispatch<SetStateAction<boolean>>

}
const ProviderCalculator = ({ children }: IProvider) => {
  const [finalCalculation, setfinalCalculation] = useState<ICalculation>({} as ICalculation)
  const [calculation, setCalculation] = useState<boolean>(false)

  const navigate = useNavigate();

  const notifyLoginSuccess = (test: string) => toast.success(test);
  const notifyLoginError = (test: string) => toast.error(test);

  const PostCalculator = async (data: ICalculatorData) => {
    await Api.post<ICalculatorResponse>("", data)
      .then((res) => {
        setfinalCalculation(res.data)
        setCalculation(true)
      })

      .catch(() => { console.log() })
  };

 console.log(finalCalculation)

  return (
    <Context.Provider value={{ navigate, notifyLoginSuccess, notifyLoginError, PostCalculator, finalCalculation, setfinalCalculation, calculation, setCalculation }}>
      {children}
    </Context.Provider>);
};

export default ProviderCalculator;
