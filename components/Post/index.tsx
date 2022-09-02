import React from "react";
import Link from "next/link"
import {Paper, Typography} from "@material-ui/core";
import styles from "./Post.module.scss";
import {PostActions} from "../PostActions";

export const Post: React.FC = () => {
    return (
        <Paper elevation={0} className="p-20" classes={{root: styles.paper}}>
            <Typography variant="h5" className={styles.title}>
                <Link href={"/news/news"}>
                    As tourism has impacted parts of Seychelles' environment, the island nation
                    now aims to protect its 72 low-lying coralline "Outer Islands" from development before it's too
                    late.
                </Link>
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
            <img
                src="https://s4.files.enjourney.ru/upload/a57eae99c47afc12c3bc47d3e81f98f9/1920x0/e17dc93f772366237944059c24d11012.jpg"
                height={400}
                width={600}
            />
            <PostActions/>
        </Paper>
    )
}