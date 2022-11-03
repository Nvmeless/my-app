import React from "react";
import MenuBar from "../atoms/MenuBar";
import { MenuButton } from "../atoms/MenuButton";

export const Menu = ({menus}) => {


    const makeMenu = () => {

        return menus.map(( menu ) => {
            return (<MenuButton uri={menu.uri}>{menu.title}</MenuButton>)
        })
    }

    return (
        <MenuBar>
             {makeMenu(menus)}
        </MenuBar>
    );

}