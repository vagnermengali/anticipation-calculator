import Footer from "./Footer";
import { StyledHomeSection } from "./style";
import CalculatorSimulation from "./CalculatorSimulation";
import ProviderCalculatorSimulation from "../../context/calculatorSimulatorContext";
import { Link } from "react-router-dom";

const HomePage = () => {

    return (
        <StyledHomeSection>
            <ProviderCalculatorSimulation>
                <Link className="link" to="/">Pagina inicial</Link>
                <CalculatorSimulation />
                <Footer />
            </ProviderCalculatorSimulation>
        </StyledHomeSection>
    )
}

export default HomePage