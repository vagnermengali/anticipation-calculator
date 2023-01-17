import { Link } from "react-router-dom";
import Calculator from "../../components/Calculator";
import { StyledHomeSection } from "./style";

const HomePage = () => {

    return (
        <StyledHomeSection>
            <Calculator />
            <Link className="link" to="/simulation-error">Simulação de erros Api</Link>
        </StyledHomeSection>
    )
}

export default HomePage