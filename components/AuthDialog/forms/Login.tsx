import React from "react";
import {Button} from "@material-ui/core";
// import Alert from "@material-ui/lab";
import {useForm, FormProvider} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {LoginFormSchema} from "../../../utils/validations";
import {FormField} from "../../FormField";
import {LoginDto} from "../../../utils/api/types";
import {UserApi} from "../../../utils/api";
import {setCookie} from "nookies";

interface LoginProps {
    onOpenRegister: () => void
}

export const Login: React.FC<LoginProps> = ({onOpenRegister}) => {

    const [errorMessage, setErrorMessage] = React.useState("")

    const form = useForm({
        mode: "onChange",
        resolver: yupResolver(LoginFormSchema)
    })

    const onSubmit = async (dto: LoginDto) => {
        try {
            const data = await UserApi.login(dto)
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
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField name="email" label="Почта"/>
                    <FormField name="password" label="Пароль"/>
                    {/*{errorMessage && (<Alert severity="error"/>)}*/}
                    {/*{errorMessage && (*/}
                    {/*    <Alert className="mb-20" severity="error">{errorMessage}</Alert>*/}
                    {/*)}*/}
                    <div className="d-flex align-center justify-between">
                        <Button
                            disabled={!form.formState.isValid || form.formState.isSubmitting}
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