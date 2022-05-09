import React from "react";
import {Button} from "@material-ui/core";
import {
  SmsOutlined,
  WhatshotOutlined,
  TrendingUpOutlined,
  FormatListBulletedOutlined
}
  from "@material-ui/icons";
import styles from "./LeftSideMenu.module.scss";

export const LeftSideMenu: React.FC = () => {
  return (
    <div className={styles.menu}>
      <ul>
        <li>
          <Button>
            <WhatshotOutlined/>
            News feed
          </Button>
        </li>
        <li>
          <Button>
            <SmsOutlined/>
            Messages
          </Button>
        </li>
        <li>
          <Button>
            <TrendingUpOutlined/>
            Rating TJ
          </Button>
        </li>
        <li>
          <Button>
            <FormatListBulletedOutlined/>
            Subscriptions
          </Button>
        </li>
      </ul>
    </div>
  )
}