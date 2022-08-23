import * as React from "react"
import {Button, Dialog, DialogContent, DialogContentText, TextField, Typography} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import styles from "./AuthDialog.module.scss"
import {MainForm} from "./forms/Main";
import {Login} from "./forms/Login";


interface AuthDialogProps {
    onClose: () => void
    visible: boolean
}

export const AuthDialog: React.FC<AuthDialogProps> = ({onClose, visible}) => {

    const [formType, setFormType] = React.useState<"main" | "login" | "register">("main")

    return (
        <Dialog
            open={visible}
            onClose={onClose}
            maxWidth="xs"
            fullWidth
        >

            <DialogContent>
                <DialogContentText>
                    <div className={styles.content}>
                        <Typography
                            className={styles.title}>{formType === "main" ? "Вход в TJ" :
                            <p onClick={() => setFormType("main")} className={styles.backTitle}>
                                <ArrowBackIcon/>
                                "Войти
                                через почту"
                            </p>}
                        </Typography>
                        {formType === "main" && <MainForm onOpenLogin={() => setFormType("login")}/>}
                        {
                            formType === "login" && <Login onOpenRegister={() => setFormType("register")}/>
                        }

                    </div>
                </DialogContentText>
            </DialogContent>
        </Dialog>
    )
}