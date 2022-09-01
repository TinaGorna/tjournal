import React from "react";
import {setCookie} from "nookies";
import {Button} from "@material-ui/core";
import {FormField} from "../../FormField";
import {useForm, FormProvider} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {RegisterFormSchema} from "../../../utils/validations";
import {CreateUserDto} from "../../../utils/api/types";
import {UserApi} from "../../../utils/api";

interface RegisterProps {
    onOpenRegister: () => void
    onOpenLogin: () => void
}

export const Register: React.FC<RegisterProps> = ({onOpenRegister, onOpenLogin}) => {

    const form = useForm({
        mode: "onChange",
        resolver: yupResolver(RegisterFormSchema)
    })

    const onSubmit = async (dto: CreateUserDto) => {
        try {
            const data = await UserApi.register(dto)
            setCookie(null, "authToken", data.token, {
                maxAge: 30 * 24 * 60 * 60, //save token for 30 days
                path: "/", // on a main path
            })
        } catch (err) {
            alert("Ошибка при регистрации")
            console.warn("Register error", err)
        }
    }

    return (
        <div>
            <FormProvider {...form}>
                <FormField name="fullName" label="Имя и фамилия"/>
                <FormField name="email" label="Почта"/>
                <FormField name="password" label="Пароль"/>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="d-flex align-center justify-between">
                        <Button
                            onClick={onOpenRegister}
                            disabled={!form.formState.isValid || form.formState.isSubmitting}
                            color="primary" variant="contained">Зарегестрироваться</Button>
                        <Button onClick={onOpenLogin} color="primary" variant="text">Войти</Button>
                    </div>
                </form>
            </FormProvider>
        </div>
    )
}