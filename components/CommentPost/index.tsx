import React, {useState} from "react";
import {IconButton, Menu, Paper, Typography} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {text} from "stream/consumers";

interface CommentPostProps {
    user: {
        fullName: string
    }
    text: string
    post: {
        title: string
    }
}

export const CommentPost: React.FC<CommentPostProps> = () => {

    const [anchorEl, setAnchorEl] = useState()
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    return (
        <div>
            <Paper elevation={0} className="p-20" classes={{root: styles.paper}}>
                <Typography variant="h6" classes={styles.title}>
                    <a href="#">{post.title}</a>
                    <IconButton onClick={handleClick}>
                        <MoreVertIcon/>
                    </IconButton>
                </Typography>
                <Typography className="mt-10 mb-15">
                    {text}
                </Typography>

                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                >

                </Menu>

            </Paper>
        </div>
    )
}