import FormSimulation from "./FormSimulation";
import { StyledCalculator, DivLeft, DivRight } from "./style";
import { useContext } from "react";
import { Context } from "../../../context/calculatorSimulatorContext";

const CalculatorSimulation = () => {
    const { finalCalculationSimulation, calculationSimulation, loading } = useContext(Context)

    return (
        <StyledCalculator>
            <DivLeft>
                <FormSimulation />
            </DivLeft>
            <DivRight>
                <div className="container-right">
                    <div>
                        <h2>Você receberá:</h2>
                        <hr></hr>
                    </div>
                    {calculationSimulation ? (
                        <>
                            <p>Amanhã: <span>R$ {(finalCalculationSimulation["1"] / 100).toFixed(2)}</span></p>
                            <p>Em 15 dias: <span>R$ {(finalCalculationSimulation["15"] / 100).toFixed(2)}</span></p>
                            <p>Em 30 dias: <span>R$ {(finalCalculationSimulation["30"] / 100).toFixed(2)}</span></p>
                            <p>Em 90 dias: <span>R$ {(finalCalculationSimulation["90"] / 100).toFixed(2)}</span></p>
                        </>
                    ) : !loading && !calculationSimulation ? (
                        <div className="loading">
                            <div>
                                <div className="d1"></div>
                                <div className="d2"></div>
                            </div>
                        </div>
                    ) : (
                        <>
                            <p>Amanhã: <span>R$ 0,00</span></p>
                            <p>Em 15 dias: <span>R$ 0,00</span></p>
                            <p>Em 30 dias: <span>R$ 0,00</span></p>
                            <p>Em 90 dias: <span>R$ 0,00</span></p>
                        </>
                    )}
                </div>
            </DivRight>
        </StyledCalculator>
    )
}

export default CalculatorSimulation