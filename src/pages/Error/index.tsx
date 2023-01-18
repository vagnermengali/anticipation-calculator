import { Link } from "react-router-dom";
import { StyledErrorSection } from "./style";
import { motion } from "framer-motion";

const ErrorPage = () => {
    document.title = "Page not found";
    return (
        <motion.div
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <StyledErrorSection>
                <div className="container">
                    <div className="content">
                        <h1>Oops!</h1>
                        <div className="div-links">
                            <p>Algo deu errado...</p>
                            <p>A página que você procurava não pode ser encontrada.</p>
                            <Link className="link" to="/">
                                Clique aqui para voltar para a página inicial
                            </Link>
                        </div>
                    </div>
                </div>
            </StyledErrorSection>
        </motion.div>
    );
}

export default ErrorPage;
