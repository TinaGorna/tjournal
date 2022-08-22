import React from "react";
import ArrowRightIcon from "@material-ui/icons/NavigateNextOutlined"
import styles from "./SideComments.module.scss"

export const comments = [
    {
        id: 1,
        user: {
            fullName: "Vasya",
            avatar: "https://avatars.mds.yandex.net/i?id=ede79fa87f5de70e92fbe04d4215d214_l-5486213-images-thumbs&ref=rim&n=13&w=1080&h=1080"
        },
        text: "Теперь каждое утро после кровати я перекладываюсь туда еще",
        post: {
            title: "Какая у вас дома ванна,"
        },
        createdAt: new Date().toString()
    },

    {
        id: 2,
        user: {
            fullName: "Pusya",
            avatar: "https://i.pinimg.com/originals/43/41/06/4341068ff814413d0e51b776aec1c021.jpg"
        },
        text: "Теперь каждое утро после кровати я перекладываюсь туда еще",
        post: {
            title: "Какая у вас дома ванна,"
        },
        createdAt: new Date().toString()
    },
    {
        id: 3,
        user: {
            fullName: "Tasya",
            avatar: "https://coolsen.ru/wp-content/uploads/2021/12/65-20211209_141440.jpg"
        },
        text: "Теперь каждое утро после кровати я перекладываюсь туда еще",
        post: {
            title: "Какая у вас дома ванна,"
        },
        createdAt: new Date().toString()
    }
]

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
            {comments.map((obj) => {
                <CommentItem key={obj.id} {...obj}/>
            })}
        </div>
    )
}