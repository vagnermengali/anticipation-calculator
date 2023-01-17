import Form from "./Form";
import { StyledCalculator, DivLeft, DivRight } from "./style";
import { useContext } from "react";
import { Context } from "../../context/calculatorContext";

const Calculator = () => {
    const { finalCalculation, calculation } = useContext(Context)

    return (
        <StyledCalculator>
            <DivLeft>
                <Form />
            </DivLeft>
            <DivRight>
                <div className="container-right">
                    <div>
                        <h2>Você receberá:</h2>
                        <hr></hr>
                    </div>
                    {calculation ? (
                        <>
                            <p>Amanhã: <span>R$ {(finalCalculation["1"] / 100).toFixed(2)}</span></p>
                            <p>Em 15 dias: <span>R$ {(finalCalculation["15"] / 100).toFixed(2)}</span></p>
                            <p>Em 30 dias: <span>R$ {(finalCalculation["30"] / 100).toFixed(2)}</span></p>
                            <p>Em 90 dias: <span>R$ {(finalCalculation["90"] / 100).toFixed(2)}</span></p>
                        </>
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

export default Calculator