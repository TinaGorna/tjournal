import React from "react";
import {Paper, Button, IconButton, Avatar} from "@material-ui/core";
import styles from "./Header.module.scss";
import SearchIcon from "@material-ui/icons/Search"
import CreateIcon from "@material-ui/icons/Create"
import MenuIcon from "@material-ui/icons/Menu"
import {SmsOutlined, ExpandMoreOutlined} from "@material-ui/icons";
import NotificationIcon from "@material-ui/icons/NotificationsNoneOutlined"

export const Header: React.FC = () => {
    return (
        <Paper classes={{root: styles.root}} elevation={0}>
            <div className="d-flex align-center">
                <IconButton>
                    <MenuIcon/>
                </IconButton>
                <svg className={styles.logo} viewBox="0 0 24 25">
                    <path fill="#e8a427" d="M0 19h8.5v6H0v-6z"></path>
                    <path d="M0 7h8.5v18l6.5-6V7h9V0H0v7z"></path>
                    <path fill="rgba(0,0,0,0.15)" d="M7.5 19h1v6l-1-6z"></path>
                </svg>


                <div className={styles.searchBlock}>
                    <SearchIcon/>
                    <input placeholder="Search"/>
                </div>

                <Button variant="contained" className={styles.penButton}>
                    New post <CreateIcon/>
                </Button>
            </div>

            <div className="d-flex align-center">
                <IconButton>
                    <SmsOutlined/>
                </IconButton>
                <IconButton>
                    <NotificationIcon/>
                </IconButton>
                <Avatar
                    className={styles.avatar}
                    src="/static/images/avatar/1.jpg"/>
                <ExpandMoreOutlined />
            </div>
        </Paper>
    )
}