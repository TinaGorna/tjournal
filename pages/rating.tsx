import * as React from "react"
import {MainLayout} from "../layouts/MainLayout";
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tab,
    Tabs,
    Typography
} from "@material-ui/core";

export default function Rating() {
    return (
        <MainLayout hideComments>
            <Paper className="pl-20 pt-20 pr-20 mb-20" elevation={0}>
                <Typography variant="h5" style={{fontWeight: "bold", fontSize: 30, marginBottom: 6}}>Rating of
                    communities and blogs</Typography>
                <Typography>Десять лучших автором и комментаторов, а также администраторы первых десяти сообществ из
                    рейтинга по итогам месяца бесплатно получают Plus-аккаунт на месяц.</Typography>
                <Tabs className="mt-10" value={0} indicatorColor={"primary"}>
                    <Tab label="Август"/>
                    <Tab label="За 3 месяца"/>
                    <Tab label="За все время"/>
                </Tabs>
            </Paper>

            <Paper className="pl-20 pt-20 pr-20" elevation={0}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>User Name</TableCell>
                            <TableCell align="right">Rating</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                Tasya
                            </TableCell>
                            <TableCell align="right">540</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
        </MainLayout>
    )
}