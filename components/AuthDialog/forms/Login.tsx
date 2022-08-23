import React from "react";
import {Button, TextField} from "@material-ui/core";

interface LoginProps {
    onOpenRegister: () => void
}

export const Login: React.FC<LoginProps> = ({onOpenRegister}) => {
    return (
        <div>
            <form>
                <TextField
                    className="mb-20"
                    size="small"
                    required
                    label="Почта"
                    variant="outlined"
                    fullWidth
                />
                <TextField
                    className="mb-20"
                    size="small"
                    required
                    label="Пароль"
                    type="password"
                    variant="outlined"
                    fullWidth
                />
                <div className="d-flex align-center justify-between">
                    <Button color="primary" variant="contained">Войти</Button>
                    <Button onClick={onOpenRegister} color="primary" variant="text">Регистрация</Button>
                </div>
            </form>
        </div>
    )
}