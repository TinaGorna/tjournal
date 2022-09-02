import React, {useState} from "react";
import {IconButton, Menu, MenuItem, Typography} from "@material-ui/core";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import styles from "./Comment.module.scss"
import Image from "next/image"

interface CommentProps {
    id: number
    user?: {
        fullName: string
        avatar: string
    }
    text?: string
    createdAt?: string
}

export const Comment: React.FC<CommentProps> = ({user, text, createdAt}) => {

    const [anchorEl, setAnchorEl] = useState(null)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <div className={styles.comment}>
            <div className={styles.userInfo}>
                <img src={user.avatar} alt="Avatar"
                />
                <b>{user.fullName}</b>
                <span>{createdAt}</span>
            </div>
            <Typography className={styles.text}>
                {text}
            </Typography>
            <span
                className={styles.replyButton}
            >Ответить</span>
            <IconButton onClick={handleClick}>
                <MoreHorizOutlinedIcon/>
            </IconButton>

            <Menu
                anchorEl={anchorEl}
                elevation={2}
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                <MenuItem onClick={handleClose}>Удалить</MenuItem>
                <MenuItem onClick={handleClose}>Редактировать</MenuItem>
            </Menu>
        </div>
    )
}