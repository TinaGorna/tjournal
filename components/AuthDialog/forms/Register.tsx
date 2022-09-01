import React from "react";
import {setCookie} from "nookies";
import {Button} from "@material-ui/core";
import {FormField} from "../../FormField";
import {useForm, FormProvider} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {RegisterFormSchema} from "../../../utils/validations";
import {LoginDto} from "../../../utils/api/types";
import {UserApi} from "../../../utils/api";
import {Alert} from "@material-ui/lab";

interface RegisterProps {
    onOpenRegister: () => void
    onOpenLogin: () => void
}

export const Register: React.FC<RegisterProps> = ({onOpenRegister, onOpenLogin}) => {

    const [errorMessage, setErrorMessage] = React.useState("")

    const form = useForm({
        mode: "onChange",
        resolver: yupResolver(RegisterFormSchema)
    })

    const onSubmit = async (dto: LoginDto) => {
        try {
            const data = await UserApi.register(dto)
            setCookie(null, "authToken", data.token, {
                maxAge: 30 * 24 * 60 * 60, //save token for 30 days
                path: "/", // on a main path
            })
            setErrorMessage("")
        } catch (err) {
            console.warn("Register error", err)
            if (err.response) {
                setErrorMessage(err.response.data.message)
            }
        }
    }

    return (
        <div>
            <FormProvider {...form}>
                <FormField name="fullName" label="Имя и фамилия"/>
                <FormField name="email" label="Почта"/>
                <FormField name="password" label="Пароль"/>
                {/*{errorMessage && (<Alert severity="error"/>)}*/}

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