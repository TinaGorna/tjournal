import React from "react";
import {IconButton, Paper, Typography} from "@material-ui/core";
import {
    ModeCommentOutlined as CommentsIcon,
    RepeatOutlined as RepostIcon,
    BookmarkBorderOutlined as FavoriteIcon,
    ShareOutlined as ShareIcon
}
    from "@material-ui/icons";
import Image from "next/image";
import styles from "./Post.module.scss";

export const Post: React.FC = () => {
    return (
        <Paper elevation={0} className="p-20" classes={{root: styles.paper}}>
            <Typography variant="h5" className={styles.title}>
                As tourism has impacted parts of Seychelles' environment, the island nation
                now aims to protect its 72 low-lying coralline "Outer Islands" from development before it's too
                late.
            </Typography>

            <Typography className="mt-10 mb-15">
                The parks' official designation was established once the Seychelles started growing as a
                tourist destination, a few years after the first international airport was built and the island
                nation gained its independence. Similar to the initiatives at sea, the national park status was
                meant to help protect the land while creating an infrastructure to allow visitors to enjoy it by
                walking more than 15km of trails and viewing its rare bird species and plants.
                <br/>
                <br/>
                With all eyes on their landmark conservation goals, Seychelles is gearing up to show how such a
                small nation can become an example for the many other insular countries facing the effects of
                climate change. Hopefully, it's not too late.
            </Typography>
            <Image
                src="https://s4.files.enjourney.ru/upload/a57eae99c47afc12c3bc47d3e81f98f9/1920x0/e17dc93f772366237944059c24d11012.jpg"
                height={400}
                width={600}
            />

            <ul className={styles.actions}>
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
        </Paper>
    )
}