import React from "react";
import {Paper, Button, IconButton, Avatar} from "@material-ui/core";
import styles from "./Header.module.scss";
import SearchIcon from "@material-ui/icons/Search"
import Link from "next/link"
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
        <Link href="/">
          <a>
            <svg className={styles.logo} viewBox="0 0 24 25">
              <path fill="#e8a427" d="M0 19h8.5v6H0v-6z"></path>
              <path d="M0 7h8.5v18l6.5-6V7h9V0H0v7z"></path>
              <path fill="rgba(0,0,0,0.15)" d="M7.5 19h1v6l-1-6z"></path>
            </svg>
          </a>
        </Link>

        <div className={styles.searchBlock}>
          <SearchIcon/>
          <input placeholder="Search"/>
        </div>
        <Button variant="contained" className={styles.penButton}>
          New post
        </Button>
      </div>
      <div className="d-flex align-center">
        <IconButton>
          <SmsOutlined/>
        </IconButton>
        <IconButton>
          <NotificationIcon/>
        </IconButton>
        <Link href="/profile/1">
          <a className="d-flex align-center">
            <Avatar
              className={styles.avatar}
              alt="Avatar"
              src="https://i.etsystatic.com/11663546/r/il/45f4d5/1893120597/il_570xN.1893120597_ag77.jpg"/>

            <ExpandMoreOutlined/>
          </a>
        </Link>
      </div>
    </Paper>
  )
}