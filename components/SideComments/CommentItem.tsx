import React from "react";
import styles from "./SideComments.module.scss";

export interface SideCommentsProps {
    user: {
        fullName: string
    },
    text: string
    post: {
        title: string
    },
}

export const CommentItem: React.FC<SideCommentsProps> = ({user, text, post}) => {

    return (
        <div className={styles.commentItem}>
            <div className={styles.userInfo}>
                <img src=""/>
                <a href="#">
                    <b>{user.fullName}</b>
                </a>
            </div>
            <p className={styles.text}>{text}</p>
            <a href="#">
                <span className={styles.postTitle}>{post.title}</span>
            </a>
        </div>
    )
}