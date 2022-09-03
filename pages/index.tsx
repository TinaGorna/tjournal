import * as React from "react"
import {Post} from "../components/Post";
import {MainLayout} from "../layouts/MainLayout";
import {GetServerSideProps} from "next";
import {wrapper} from "../redux/store";
import {parseCookies} from "nookies";
import {UserApi} from "../utils/api";

export default function Home() {
    return (
        <MainLayout>
            <Post/>
            <Post/>
            <Post/>
        </MainLayout>
    )
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
    store => async (ctx) => {
        try {
            const {authToken} = parseCookies(ctx)
            const userData = await UserApi.getMe(authToken)

            return {props: {}}
        } catch (e) {
            console.log(e)
            return {props: {}}
        }
    })
