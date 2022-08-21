import {Button, Divider, Paper, TextField, Typography} from "@material-ui/core";
import {MainLayout} from "../../layouts/MainLayout";

function Devider() {
    return null;
}

export default function Settings() {
    return (
        <MainLayout hideComments>
            <Paper className="p-20" elevation={0}>
                <Typography variant="h6">
                    Main settings
                </Typography>
                <Divider className="mt-20 mb-30"/>
                <form>
                    <TextField
                        className="mb-20"
                        size="small"
                        required
                        label="Name"
                        variant="outlined"
                        fullWidth
                    />
                    <TextField
                        className="mb-20"
                        size="small"
                        required
                        label="Email"
                        variant="outlined"
                        fullWidth
                    />
                    <TextField
                        className="mb-20"
                        size="small"
                        required
                        label="Password"
                        variant="outlined"
                        fullWidth
                    />
                    <Divider className="mt-20 mb-30"/>
                    <Button color="primary" variant="contained">Save changes</Button>
                </form>
            </Paper>
        </MainLayout>
    )
}