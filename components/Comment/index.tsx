import React, {useState} from "react";
import {IconButton, Menu, MenuItem, Typography} from "@material-ui/core";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import styles from "./Comment.module.scss"

interface CommentProps {
    user?: {
        fullName: string
    }
    text?: string

}

export const Comment: React.FC<CommentProps> = () => {

    const [anchorEl, setAnchorEl] = useState()
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    return (
        <div className={styles.comment}>
            <div className={styles.userInfo}>
                <img src="https://coolsen.ru/wp-content/uploads/2021/06/14-4.jpg" alt="Avatar"
                />
                <b>Master Oogway</b>
                <span>5 h</span>
            </div>
            <Typography className={styles.text}>
                Я оценил, годные работы, рекомендую к просмотру
            </Typography>
            <span
                className={styles.replyButton}
            >Reply</span>
            <IconButton>
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