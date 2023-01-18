import Footer from "./Footer";
import { motion } from "framer-motion";
import { StyledHomeSection } from "./style";
import CalculatorSimulation from "./CalculatorSimulation";
import ProviderCalculatorSimulation from "../../context/calculatorSimulatorContext";
import { Link } from "react-router-dom";

const HomePage = () => {

    return (
        <motion.div
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <StyledHomeSection>
                <ProviderCalculatorSimulation>
                    <Link className="link" to="/">Pagina inicial</Link>
                    <CalculatorSimulation />
                    <Footer />
                </ProviderCalculatorSimulation>
            </StyledHomeSection>
        </motion.div>
    )
}

export default HomePage