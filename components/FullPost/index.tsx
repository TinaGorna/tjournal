import React from "react";
import {Button, Paper, Typography} from "@material-ui/core";
import TextsmsOutlinedIcon from "@material-ui/icons/TextsmsOutlined"
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import styles from "./FullPost.module.scss"
import {PostActions} from "../PostActions";

export const FullPost = () => {
    return (
        <Paper elevation={0} className={styles.paper}>
            <div className="container">
                <div>
                    <Typography variant="h4"
                                className={styles.title}>
                        Sega снимет полнометражные фильмы по двум играм 1990-х годов
                    </Typography>
                    <Typography>
                        <a>
                            После успеха «Соника в кино» компания решила экранизировать музыкальную игру Space Channel 5
                            и
                            аркадный экшн Comix Zone, сообщил THR.
                        </a>
                        <Typography>
                            <a>
                                Фильм расскажет историю незадачливого работника фаст-фуда, которого репортер из будущего
                                завербовал
                                с целью спасти мир от инопланетян.
                            </a>
                        </Typography>
                        <Typography>
                            Лента, основанная на Comix Zone, расскажет о молодом энергичном писателе и измученном
                            создателе
                            комиксов, оказавшихся втянутыми в последний выпуск своего творения.
                        </Typography>
                        <Typography>
                            Сценарий пишет Мэй Кэтт («Юная Лига Справедливости», «Драконы: Девять миров»).
                        </Typography>
                    </Typography>
                    <div
                        style={{
                            width: 250,
                            marginLeft: 14,
                        }}
                    >
                        <PostActions/>
                    </div>
                    <div className="d-flex justify-between align-center mt-30 mb-30">
                        <div
                            className={styles.userInfo}
                        >
                            <img
                                src="https://coolsen.ru/wp-content/uploads/2021/06/14-4.jpg" alt="Avatar"/>
                            <b>Donnie Darko</b>
                            <span>+1685</span>
                        </div>
                        <div>
                            <Button variant="contained" className="mr-15">
                                <TextsmsOutlinedIcon/>
                            </Button>
                            <Button variant="contained">
                                <PersonAddOutlinedIcon/>
                                <b className="ml-10">Follow</b>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Paper>
    )
}