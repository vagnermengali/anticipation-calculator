import {
    createContext, ReactNode, useState, Dispatch, SetStateAction
} from 'react';
import Api from "../services/api"
import { toast } from "react-toastify";
import { useNavigate, NavigateFunction } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import ApiTimeout from '../services/apiTimeout';
import ApiInternalError from '../services/apiInternalError';
import ApiDelay from '../services/apiDelay';

export const Context = createContext<IContext>({} as IContext)

interface IProvider {
    children: ReactNode
}

interface ICalculatorSimulationResponse {
    1: number
    15: number
    30: number
    90: number
}

interface ICalculationSimulation {
    1: number
    15: number
    30: number
    90: number
}

interface IContext {
    loading: boolean;

    navigate: NavigateFunction;

    notifyLoginSuccess?: (test: string) => void;

    notifyLoginError?: (test: string) => void;

    PostCalculatorTimeout: () => any

    PostCalculatorInternalError: () => any

    PostCalculatorDelay: () => any

    finalCalculationSimulation: ICalculationSimulation

    setFinalCalculationSimulation: Dispatch<SetStateAction<ICalculationSimulation>>

    calculationSimulation: boolean

    setCalculationSimulation: Dispatch<SetStateAction<boolean>>

    setLoading: Dispatch<SetStateAction<boolean>>

}
const ProviderCalculatorSimulation = ({ children }: IProvider) => {
    const [finalCalculationSimulation, setFinalCalculationSimulation] = useState<ICalculationSimulation>({} as ICalculationSimulation)
    const [calculationSimulation, setCalculationSimulation] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(true);
    const navigate = useNavigate();

    const notifyLoginSuccess = (test: string) => toast.success(test);
    const notifyLoginError = (test: string) => toast.error(test);

    const PostCalculatorTimeout = async () => {
        await ApiTimeout.post("", { amount: 1000, installments: 4, mdr: 4 })
            .then((res) => {
                setFinalCalculationSimulation(res.data)
            })
            .catch(() => { notifyLoginError("Tempo esgotado"); })
    };

    const PostCalculatorInternalError = async () => {
        await ApiInternalError.post<ICalculatorSimulationResponse>("", { amount: 1000, installments: 4, mdr: 4 })
            .catch(() => notifyLoginError("Erro interno do servidor"))
    };

    const PostCalculatorDelay = async () => {
        await ApiDelay.post<ICalculatorSimulationResponse>("", { amount: 1000, installments: 4, mdr: 4 })
            .then((res) => {
                setFinalCalculationSimulation(res.data)
                setLoading(true)
                setCalculationSimulation(true)
            })

            .catch(() => { console.log() })
    };

    return (
        <Context.Provider value={{ navigate, notifyLoginSuccess, notifyLoginError, PostCalculatorTimeout, finalCalculationSimulation, setFinalCalculationSimulation, calculationSimulation, setCalculationSimulation, PostCalculatorInternalError, PostCalculatorDelay, loading, setLoading }}>
            {children}
        </Context.Provider>);
};

export default ProviderCalculatorSimulation;
