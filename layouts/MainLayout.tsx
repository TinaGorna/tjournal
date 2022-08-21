import React from "react";
import clsx from "clsx";
import {LeftSideMenu} from "../components/LeftSideMenu";
import {SideComments} from "../components/SideComments"


interface MainLayoutProps {
    hideComments?: boolean
    contentFullWidth?: boolean
}

export const MainLayout: React.FC<MainLayoutProps> = ({
                                                          children,
                                                          contentFullWidth,
                                                          hideComments
                                                      }) => {
    return (
        <div className="wrapper">
            <div className="leftSide">
                <LeftSideMenu/>
            </div>
            <div className={clsx("content", {"content-full": contentFullWidth})}>
                {children}
            </div>
            {!hideComments && (
                <div className="rightSide">
                    <SideComments/>
                </div>
            )}
        </div>
    )
}