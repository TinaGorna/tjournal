import React from "react";
import {Button, TextField} from "@material-ui/core";
import {useForm, FormProvider} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {LoginFormSchema} from "../../../utils/validations";
import {FormField} from "../../FormField";

interface LoginProps {
    onOpenRegister: () => void
}

export const Login: React.FC<LoginProps> = ({onOpenRegister}) => {

    const form = useForm({
        mode: "onChange",
        resolver: yupResolver(LoginFormSchema)
    })
    const onSubmit = data => console.log(data)

    return (
        <div>
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField name="email" label="Почта"/>
                    <FormField name="password" label="Пароль"/>
                    <div className="d-flex align-center justify-between">
                        <Button
                            disabled={!form.formState.isValid}
                            type="submit"
                            color="primary"
                            variant="contained">Войти</Button>
                        <Button
                            onClick={onOpenRegister}
                            color="primary"
                            variant="text">Регистрация</Button>
                    </div>
                </form>
            </FormProvider>
        </div>
    )
}