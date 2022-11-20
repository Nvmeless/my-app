import React from 'react';
import { Header } from '../../atoms/Header';
import MenuBar from '../../atoms/MenuBar';
import { TextP } from '../../atoms/TextP';
import { MenuButton } from '../../atoms/MenuButton';
import './index.css'
import { Menu } from '../../molecules/Menu';
import { FcBiomass } from "react-icons/fc";
import { CiLemon, CiBacon, CiAvocado, CiApple } from "react-icons/ci";

export const Basic = () => {
    return (
        <>
            <Header username="Jinn" icon={<FcBiomass/>}></Header>
            <TextP>
                L'application n'est pas encore en production, elle en est meme aux fondations soyez indulgent alors !
            </TextP>
            {/* <MenuBar>
                <MenuButton uri={"Lezgo"} title={"Lezgo"} >Lezgo</MenuButton>
                <MenuButton uri={"Lezgo"} title={"Lezgo"} >Lezgo</MenuButton>
                <MenuButton uri={"Lezgo"} title={"Lezgo"} >Lezgo</MenuButton>
                <MenuButton uri={"Lezgo"} title={"Lezgo"} >Lezgo</MenuButton>
            </MenuBar> */}
            <Menu menus={[
                {title:'Juli', uri:'lezgo', icon: (<CiLemon></CiLemon>)},
                {title:'Lezgi', uri:'lezgo', icon: (<CiApple></CiApple>)},
                {title:'Juli', uri:'lezgo', icon: (<CiAvocado></CiAvocado>)},
                {title:'Lezgi', uri:'lezgo', icon: (<CiBacon></CiBacon>)},
                ]}></Menu>
        </>
        )
};

