import { StyledForm } from "./style";

const FormSimulation = () => {

    return (
        <StyledForm>
            <h1>Simule sua Antecipação</h1>
            <div className="input-group">
                <label className="label">Informe o valor da venda*</label>
                <input className="input" type="number" value="10" />
            </div>
            <div className="input-group">
                <label className="label">Em quantas parcelas*</label>
                <input className="input" type="number" value="4" />
                <label className="no-error">ㅤ</label>
            </div>
            <div className="input-group">
                <label className="label">Informe o percentual de MDR*</label>
                <input className="input" type="number" value="4" />
                <label className="no-error">ㅤ</label>
            </div>
        </StyledForm>
    )
}

export default FormSimulation