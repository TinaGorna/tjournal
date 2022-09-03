import {Header} from "../components/Header";
import {CssBaseline, MuiThemeProvider} from "@material-ui/core";
import {theme} from "../theme";
import "../styles/globals.css"
import "macro-css"
import Head from "next/head";
import {wrapper} from "../redux/store";
import {AppProps} from "next/app";

function App({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <title>TJournal</title>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap"
                    rel="stylesheet"/>
            </Head>
            <MuiThemeProvider theme={theme}>
                <CssBaseline/>
                    <Header/>
                    <Component {...pageProps}/>
            </MuiThemeProvider>
        </>
    )
}

export default wrapper.withRedux(App)
