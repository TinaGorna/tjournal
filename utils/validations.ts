import * as yup from "yup"

export const LoginFormSchema = yup.object().shape({
    email: yup.string().email("Неверная почта").required("Почта"),
    password: yup.string().min(6, "Длина пароля минимум 6 символов").required("Введите пароль")
})

export const RegisterFormSchema = yup.object().shape({
    fullName: yup.string().required("Введите имя и фамилию"),
}).concat(LoginFormSchema)