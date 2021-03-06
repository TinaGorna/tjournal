import Link from "next/link"
import {Paper, Avatar, Typography, Button} from "@material-ui/core";
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
              src="https://avatars.mds.yandex.net/get-images-cbir/1767370/4makraH-DdsvIjexVtwtMg5808/ocr"
            />
            <Typography style={{fontWeight: 'bold'}} className="mt-10" variant="h4">
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
      </Paper>
    </MainLayout>
  )
}