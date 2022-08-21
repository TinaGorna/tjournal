import React from "react";
import {IconButton} from "@material-ui/core";
import {
    BookmarkBorderOutlined as FavoriteIcon,
    ModeCommentOutlined as CommentsIcon,
    RepeatOutlined as RepostIcon,
    ShareOutlined as ShareIcon
} from "@material-ui/icons";

const styles = {
    "display": "flex",
    "justify-content": "space-between",
    "position": "relative",
    "top": 5,
    "list-style": "none",
    "padding": 0,
    "margin": 0,
}
export const PostActions: React.FC = () => {
    return (
        <ul style={styles} >
            <li>
                <IconButton>
                    <CommentsIcon/>
                </IconButton>

            </li>
            <li>
                <IconButton>
                    <RepostIcon/>
                </IconButton>
            </li>
            <li>
                <IconButton>
                    <FavoriteIcon/>
                </IconButton>
            </li>
            <li>
                <IconButton>
                    <ShareIcon/>
                </IconButton>
            </li>
        </ul>
    )
}