import Link from "next/link"
import {Paper, Avatar, Typography, Button, Tabs, Tab} from "@material-ui/core";
import {
    SettingsOutlined as SettingsIcon,
    TextsmsOutlined as MessageIcon
} from "@material-ui/icons";
import {MainLayout} from "../../layouts/MainLayout";

export default function Profile() {
    return (
        <MainLayout contentFullWidth hideComments>
            <Paper className="pl-20 pr-20 pt-20 mb-30" elevation={0}>
                <div className="d-flex justify-between">
                    <div>
                        <Avatar
                            style={{width: 120, height: 120, borderRadius: 6}}
                            src="https://i.etsystatic.com/11663546/r/il/45f4d5/1893120597/il_570xN.1893120597_ag77.jpg"
                        />
                        <Typography style={{fontWeight: "bold"}} className="mt-10" variant="h4">
                            Madre
                        </Typography>
                    </div>
                    <div>
                        <Link href={"/profile/settings/"}>
                            <Button
                                style={{height: 42, minWidth: 45, width: 45, marginRight: 10}}
                                variant="contained"
                            >
                                <SettingsIcon/>
                            </Button>
                        </Link>
                        <Button style={{height: 42}} variant="contained" color="primary">
                            <MessageIcon className="mr-10"/>
                            Message
                        </Button>
                    </div>
                </div>
                <div className="d-flex mb-10 mt-10">
                    <Typography style={{fontWeight: "bold"}}>+208</Typography>
                    <Typography>2 подписичика</Typography>
                    <Typography>На проекте с 15 сентября 2022</Typography>
                    <Tabs className="mt-20" value={0}>
                        <Tab label="Статьи"/>
                        <Tab label="Комментарии"/>
                        <Tab label="Закладки"/>
                    </Tabs>
                </div>
            </Paper>
            <div className="d-flex align-start">
                <div className="mr-20 flex">

                </div>

            </div>
        </MainLayout>
    )
}