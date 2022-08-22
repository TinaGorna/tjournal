import * as React from "react"
import {MainLayout} from "../../layouts/MainLayout";
import {FullPost} from "../../components/FullPost";
import {Divider, Paper, Tab, Tabs, Typography} from "@material-ui/core";
import {Comment} from "../../components/Comment";

export default function Home() {
    return (
        <MainLayout className="mb-50" contentFullWidth>
            <FullPost/>

        </MainLayout>
    )
}