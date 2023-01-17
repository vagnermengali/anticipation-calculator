import * as yup from "yup";

export const formSchema = yup.object().shape({
    salesValue: yup
        .number()
        .positive()
        .typeError('Campo obrigatório')
        .required("Campo obrigatório"),
    installments: yup
        .number()
        .integer()
        .positive()
        .typeError('Campo obrigatório')
        .required("Campo obrigatório")
        .min(1, "Mínimo 1 parcela")
        .max(12, "Máximo 12 parcelas"),
    percentageMDR: yup
        .number()
        .positive()
        .typeError('Campo obrigatório')
        .required("Campo obrigatório")
});