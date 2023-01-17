import { formSchema } from "../../../validators/calculator";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { StyledForm } from "./style";
import { useContext } from "react";
import { Context } from "../../../context/calculatorContext";

const Form = () => {
    const { PostCalculator, setCalculation } = useContext(Context)

    interface CalculatorDataLogin {
        amount: number
        installments: number
        mdr: number
    }

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<CalculatorDataLogin>({
        shouldFocusError: false,
        resolver: yupResolver(formSchema)
    });

    return (
        <StyledForm onChange={handleSubmit((data) => PostCalculator(data))}>
            <h1>Simule sua Antecipação</h1>
            <div className="input-group" onClick={() => setCalculation(false)}>
                <label className="label">Informe o valor da venda*</label>
                <input className="input" type="number" {...register("amount")} />
                {errors.amount ? (
                    <label className="error">{errors.amount?.message}</label>
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
                <input className="input" type="number" {...register("mdr")} />
                {errors.mdr ? (
                    <label className="error">{errors.mdr?.message}</label>
                ) : (
                    <label className="no-error">ㅤ</label>
                )}
            </div>
        </StyledForm>
    )
}

export default Form