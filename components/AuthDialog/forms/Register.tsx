import React from "react";
import {Button} from "@material-ui/core";
import {FormField} from "../../FormField";
import {useForm, FormProvider} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {RegisterFormSchema} from "../../../utils/validations";

interface RegisterProps {
    onOpenRegister: () => void
    onOpenLogin: () => void
}

export const Register: React.FC<RegisterProps> = ({onOpenRegister, onOpenLogin}) => {

    const form = useForm({
        mode: "onChange",
        resolver: yupResolver(RegisterFormSchema)
    })
    const onSubmit = data => console.log(data)

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
                            disabled={!form.formState.isValid}
                            color="primary" variant="contained">Зарегестрироваться</Button>
                        <Button onClick={onOpenLogin} color="primary" variant="text">Войти</Button>
                    </div>
                </form>
            </FormProvider>
        </div>
    )
}