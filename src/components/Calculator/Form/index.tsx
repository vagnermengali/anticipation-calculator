import { formSchema } from "../../../validators/calculator";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { StyledForm } from "./style";

const Form = () => {

    interface CalculatorDataLogin {
        salesValue: number;
        installments: number;
        percentageMDR: number;
    }

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<CalculatorDataLogin>({
        resolver: yupResolver(formSchema)
    });

    return (
        <StyledForm onChange={handleSubmit()}>
            <h1>Simule sua Antecipação</h1>
            <div className="input-group">
                <label className="label">Informe o valor da venda*</label>
                <input className="input" type="number" {...register("salesValue")} />
                {errors.salesValue ? (
                    <label className="error">{errors.salesValue?.message}</label>
                ) : (
                    <label className="no-error">ㅤ</label>
                )}
            </div>
            <div className="input-group">
                <label className="label">Em quantas parcelas*</label>
                <input className="input" type="number" {...register("installments")} />
                {errors.installments ? (
                    <label className="error">{errors.installments?.message}</label>
                ) : (
                    <label className="no-error">ㅤ</label>
                )}
            </div>
            <div className="input-group">
                <label className="label">Informe o percentual de MDR*</label>
                <input className="input" type="number" {...register("percentageMDR")} />
                {errors.percentageMDR ? (
                    <label className="error">{errors.percentageMDR?.message}</label>
                ) : (
                    <label className="no-error">ㅤ</label>
                )}
            </div>
        </StyledForm>
    )
}

export default Form