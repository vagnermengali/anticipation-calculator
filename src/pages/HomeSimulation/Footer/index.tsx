import { StyledFooter } from "./style";
import { useContext } from "react";
import { Context } from "../../../context/calculatorSimulatorContext";

const Footer = () => {
    const { PostCalculatorTimeout, PostCalculatorInternalError, PostCalculatorDelay, setLoading, setCalculationSimulation } = useContext(Context)

    return (
        <StyledFooter>
            <div className="container-footer">
                <button onClick={() => PostCalculatorTimeout()}>Timeout</button>
                <button onClick={() => PostCalculatorInternalError()}>Internal Error</button>
                <button onClick={() => {
                    PostCalculatorDelay()
                    setCalculationSimulation(false)
                    setLoading(false)
                }}>Delay</button>
            </div>
        </StyledFooter>
    )
}

export default Footer