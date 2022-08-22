import React from "react";
import {Button, Input} from "@material-ui/core";

export const WriteForm = () => {
    return (
        <div>
            {/*<Input classes={{root: styles.titleField}} placeholder="Заголовок" defaultValue={title}/>*/}
            {/*<div className={styles.editor}>*/}
            {/*    <Editor/>*/}
            {/*</div>*/}
            <Button variant="contained" color="primary">
                Опубликовать
            </Button>
        </div>
    )
}