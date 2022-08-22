import React from "react";
import ArrowRightIcon from "@material-ui/icons/NavigateNextOutlined"
import styles from "./SideComments.module.scss"
import data from "../../data.json"

interface SideCommentsProps {
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

export const SideComments = () => {
    return (
        <div className={styles.root}>
            <h3>
                Комментарии <ArrowRightIcon/>
            </h3>
            {data.comments.popular.map((obj) => {
                <CommentItem key={obj.id} {...obj}/>
            })}
        </div>
    )
}