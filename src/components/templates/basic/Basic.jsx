import React from 'react';
import { Header } from '../../atoms/Header';
import MenuBar from '../../atoms/MenuBar';
import { TextP } from '../../atoms/TextP';
import { MenuButton } from '../../atoms/MenuButton';
import './index.css'
import { Menu } from '../../molecules/Menu';

export const Basic = () => {
    return (
        <>
            <Header username="Jinn"></Header>
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
                {title:'Juli', uri:'lezgo'},
                {title:'Lezgi', uri:'lezgo'},
                {title:'Juli', uri:'lezgo'},
                {title:'Lezgi', uri:'lezgo'},
                ]}></Menu>
        </>
        )
};

