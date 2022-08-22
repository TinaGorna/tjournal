import React from "react";
import {Divider, Paper, Tab, Tabs, Typography} from "@material-ui/core";
import {Comment} from "../Comment";
import {AddCommentForm} from "../AddCommentForm";

type CommentObj = {
    text: string
    id: number
    createdAt?: string
    user?: {
        fullName: string
        avatar: string
    }
}

interface PostCommentsProps {
    items: CommentObj[]
}

export const PostComments: React.FC<PostCommentsProps> = ({items}) => {
    const [activeTab, setActiveTab] = React.useState(0)

    return (
        <Paper elevation={0} className="mt-40 p-30 ">
            <div className="container">
                <Typography
                    variant="h6"
                    className="mb-20">
                    42 comments
                </Typography>
                <Tabs
                    onChange={(_, newValue) => setActiveTab(newValue)}
                    className="mt-20"
                    value={activeTab}
                    indicatorColor="primary" textColor="primary">
                    <Tab
                        label="Популярные"/>
                    <Tab label="По порядку"/>
                </Tabs>
                <Divider/>
                <AddCommentForm/>
                <div className="mb-20"/>
                {
                    items.map((obj) => <Comment key={obj.id} user={obj.user} text={obj.text} createdAt={obj.createdAt}
                                                id={obj.id}/>)
                }
            </div>
        </Paper>
    )
}