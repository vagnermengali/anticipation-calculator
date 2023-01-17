import * as yup from "yup";

export const formSchema = yup.object().shape({
    amount: yup
        .number()
        .transform((value) => value ? value * 100 : 0)
        .positive('O valor deve ser deve ser um número positivo')
        .required("Campo obrigatório")
        .min(1000, "O valor mínimo é de R$10,00")
        .max(1000000000, "O valor máximo é de R$1.000.000.000,00"),
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
        .min(0, "O valor mínimo é de 0%")
});