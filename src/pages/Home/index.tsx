import { Link } from "react-router-dom";
import Calculator from "../../components/Calculator";
import { StyledHomeSection } from "./style";
import { motion } from "framer-motion";

const HomePage = () => {

    return (
        <motion.div
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <StyledHomeSection>
                <Calculator />
                <Link className="link" to="/simulation-error">Simulação de erros Api</Link>
            </StyledHomeSection>
        </motion.div>
    )
}

export default HomePage