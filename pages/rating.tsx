import * as React from "react"
import {MainLayout} from "../layouts/MainLayout";
import {Paper, Tab, Tabs, Typography} from "@material-ui/core";

export default function Rating() {
    return (
        <MainLayout hideComments>
            <Paper className="p-20" elevation={0}>
                <Typography variant="h5">Rating of communities and blogs</Typography>
                <Typography>Десять лучших автором и комментаторов, а также администраторы первых десяти сообществ из рейтинга по итогам месяца бесплатно получают Plus-аккаунт на месяц.</Typography>
                <Tabs className="mt-20" value={0}>
                    <Tab label="Август"/>
                    <Tab label="За 3 месяца"/>
                    <Tab label="За все время"/>
                </Tabs>
            </Paper>
        </MainLayout>
    )
}