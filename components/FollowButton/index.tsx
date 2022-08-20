import * as React from "react"
import {Button} from "@material-ui/core";
import AddIcon from "@material-ui/icons/AddOutlined";
import CheckOutlinedIcon from "@material-ui/icons/CheckOutlined"

export const FollowButton: React.FC = () => {
    const [followed, setFollowed] = React.useState(false)
    return (
        <Button
            onClick={() => setFollowed(!followed)} variant={"contained"}
            style={{minWidth: 30, width: 40, height: 30}}>
            {!followed ? <AddIcon/> : <CheckOutlinedIcon/>}
        </Button>
    )
}