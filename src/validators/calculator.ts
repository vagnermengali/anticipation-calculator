import * as yup from "yup";

export const formSchema = yup.object().shape({
    amount: yup
        .number()
        .positive('O valor deve ser deve ser um número positivo')
        .typeError('Campo obrigatório')
        .required("Campo obrigatório"),
    installments: yup
        .number()
        .integer()
        .positive('O valor deve ser deve ser um número positivo')
        .typeError('Campo obrigatório')
        .required("Campo obrigatório")
        .min(1, "Mínimo 1 parcela")
        .max(12, "Máximo 12 parcelas"),
    mdr: yup
        .number()
        .positive('O valor deve ser um número positivo')
        .typeError('Campo obrigatório')
        .required("Campo obrigatório")
});