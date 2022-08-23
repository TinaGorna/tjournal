import * as React from "react"
import {Dialog, DialogContent, DialogContentText, Typography} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import {MainForm} from "./forms/Main";
import {Login} from "./forms/Login";
import {Register} from "./forms/Register";
import styles from "../AddCommentForm/AuthDialog.module.scss"

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
                                К авторизации
                            </p>}
                        </Typography>
                        {formType === "main" && <MainForm onOpenLogin={() => setFormType("login")}/>}
                        {formType === "login" && <Login onOpenRegister={() => setFormType("register")}/>}
                        {formType === "register" && <Register onOpenRegister={() => setFormType("register")}
                                                              onOpenLogin={() => setFormType("login")}/>}

                    </div>
                </DialogContentText>
            </DialogContent>
        </Dialog>
    )
}