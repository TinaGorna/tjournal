import React from "react";
import {Button, TextField} from "@material-ui/core";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {LoginFormSchema} from "../../../utils/validations";

interface LoginProps {
    onOpenRegister: () => void
}


export const Login: React.FC<LoginProps> = ({onOpenRegister}) => {

    const form = useForm({
        mode: "onSubmit",
        resolver: yupResolver(LoginFormSchema)
    })
    const onSubmit = data => console.log(data)

    return (
        <div>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <TextField
                    {...form.register("email")}
                    className="mb-20"
                    name="email"
                    size="small"
                    required
                    label="Почта"
                    variant="outlined"
                    fullWidth
                    helperText={form.formState.errors.email?.message}
                    error={!!form.formState.errors.email?.message}
                />
                <TextField
                    {...form.register("password")}
                    className="mb-20"
                    name="password"
                    size="small"
                    required
                    label="Пароль"
                    type="password"
                    variant="outlined"
                    fullWidth
                    helperText={form.formState.errors.password?.message}
                    error={!!form.formState.errors.password?.message}
                />
                <div className="d-flex align-center justify-between">
                    <Button type="submit" color="primary" variant="contained">Войти</Button>
                    <Button onClick={onOpenRegister} color="primary" variant="text">Регистрация</Button>
                </div>
            </form>
        </div>
    )
}