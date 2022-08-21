import React from "react";
import {Paper, Typography} from "@material-ui/core";
import styles from "./FullPost.module.scss"

export const FullPost = () => {
    return (
        <Paper elevation={0} className={styles.paper} style={{
            marginTop: -30
        }}>
            <div style={{
                margin: "0 auto",
                width: 680,
            }}>
                <Typography variant="h4" style={{
                    fontWeight: 500
                }}>
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
            </div>
        </Paper>
    )
}