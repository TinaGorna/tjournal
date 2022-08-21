import * as React from "react"
import {MainLayout} from "../../layouts/MainLayout";
import {FullPost} from "../../components/FullPost";

export default function Home() {
    return (
        <MainLayout contentFullWidth>
            <FullPost/>
        </MainLayout>
    )
}