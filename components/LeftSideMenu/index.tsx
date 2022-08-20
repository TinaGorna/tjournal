import React from "react";
import Link from "next/link"
import {Button} from "@material-ui/core";
import {
    SmsOutlined,
    WhatshotOutlined,
    TrendingUpOutlined,
    FormatListBulletedOutlined
}
    from "@material-ui/icons";
import styles from "./LeftSideMenu.module.scss";

const menu = [
    {text: "News feed", icon: <WhatshotOutlined/>, path: "/"},
    {text: "Messages", icon: <SmsOutlined/>, path: "/messages"},
    {text: "Rating TJ", icon: <TrendingUpOutlined/>, path: "/rating"},
    {text: "Subscriptions", icon: <FormatListBulletedOutlined/>, path: "/follows"},
]

export const LeftSideMenu: React.FC = () => {
    return (
        <div className={styles.menu}>
            <ul>
                {menu.map((obj) => (
                    <li key={obj.path}>
                        <Link href={obj.path}>
                            <Button>
                                {obj.icon}
                                {obj.text}
                            </Button>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}