import Form from "./Form";
import { StyledCalculator, DivLeft, DivRight } from "./style";

const Calculator = () => {

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
                    <p>Amanhã: <span>R$ 0,00</span></p>
                    <p>Em 15 dias: <span>R$ 0,00</span></p>
                    <p>Em 30 dias: <span>R$ 0,00</span></p>
                    <p>Em 90 dias: <span>R$ 0,00</span></p>
                </div>
            </DivRight>
        </StyledCalculator>
    )
}

export default Calculator