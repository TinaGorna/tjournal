import * as React from "react"
import {Button, Dialog, DialogContent, DialogContentText, TextField, Typography} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import styles from "./AuthDialog.module.scss"


interface AuthDialogProps {
    onClose: () => void
    visible: boolean
}

export const AuthDialog: React.FC<AuthDialogProps> = ({onClose, visible}) => {

    const [formType, setFormType] = React.useState<"main" | "email">("main")

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
                        {formType === "main" && <>
                            <div>
                                <Button className="mb-15" variant="contained" fullWidth>
                                    <img
                                        src="https://avatars.mds.yandex.net/i?id=1c43476e0d56ae22ac2d438b6b34a41d-6489726-images-thumbs&n=13"/>
                                    ВКонтакте
                                </Button>
                                <Button className="mb-15" variant="contained" fullWidth>
                                    <img
                                        src="https://avatars.mds.yandex.net/i?id=beee30f94ff58961159481e9ce074d9e-5440551-images-thumbs&n=13"/>
                                    Google
                                </Button>
                                <Button className="mb-15" variant="contained" fullWidth
                                        onClick={() => setFormType("email")}>
                                    <img
                                        src="https://avatars.mds.yandex.net/i?id=0687b0e7ba94a3971e410e408f5ca1da-5388624-images-thumbs&n=13"/>
                                    Через почту
                                </Button>
                            </div>
                            <div className={styles.miniButtons}>
                                <Button className="mb-15" variant="contained" fullWidth>
                                    <img
                                        src="https://avatars.mds.yandex.net/i?id=8e4e2b06dfe3581df2a3486d4b8dace8-4628663-images-thumbs&n=13"/>
                                </Button>
                                <Button className="mb-15" variant="contained" fullWidth>
                                    <img
                                        src="https://avatars.mds.yandex.net/i?id=c9a44afcee18c85dc9e8f75692b2235b-4055879-images-thumbs&n=13"/>
                                </Button>
                                <Button className="mb-15" variant="contained" fullWidth>
                                    <img
                                        src="https://avatars.mds.yandex.net/i?id=30999aa96fdeba625d8a192827e2b191-4524739-images-thumbs&n=13"/>
                                </Button>
                            </div>
                        </>}
                        {
                            formType === "email" && <div>
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
                                    <Button color="primary" variant="contained">Войти</Button>
                                </form>
                            </div>
                        }
                    </div>
                </DialogContentText>
            </DialogContent>
        </Dialog>
    )
}