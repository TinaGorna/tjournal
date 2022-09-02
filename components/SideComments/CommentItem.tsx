import React from "react";
import styles from "./SideComments.module.scss";
import Link from "next/link"
import Image from "next/image"

export interface SideCommentsProps {
    user?: {
        id: number
        fullName: string
    },
    text?: string
    post?: {
        title: string
    },
}

export const CommentItem: React.FC<SideCommentsProps> = ({user, text, post}) => {

    return (
        <div className={styles.commentItem}>
            <div className={styles.userInfo}>
                <img
                    src="https://avatars.mds.yandex.net/i?id=6d7c8191d9ce10a8b38dd7a55613b0f3-5347144-images-thumbs&n=13"
                    alt="User avatar"/>
                <Link href={`/profile/${user.id}`}>
                    <a>
                        <b>{user.fullName}</b>
                    </a>
                </Link>
            </div>
            <p className={styles.text}>{text}</p>
            <Link href={`/news/${user.id}`}>
                <a>
                    <span className={styles.postTitle}>{post.title}</span>
                </a>
            </Link>
        </div>
    )
}