import React, {useState} from "react";


interface CommentPostProps {
    user: {
        fullName: string
    }
    text: string
    post: {
        title: string
    }
}

export const CommentPost: React.FC<CommentPostProps> = () => {

    const [anchorEl, setAnchorEl] = useState()
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    return (
        <div>

        </div>
    )
}