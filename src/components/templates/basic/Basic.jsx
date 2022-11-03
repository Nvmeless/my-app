import React from 'react';
import { Header } from '../../atoms/Header';
import Menu from '../../atoms/Menu';
import { TextP } from '../../atoms/TextP';
import { MenuButton } from '../../atoms/MenuButton';
import './index.css'

export const Basic = () => {
    return (
        <>
            <Header username="Jinn"></Header>
            <TextP>
                L'application n'est pas encore en production, elle en est meme aux fondations soyez indulgent alors !
            </TextP>
            <Menu>
                <MenuButton uri={"Lezgo"} title={"Lezgo"} >Lezgo</MenuButton>
                <MenuButton uri={"Lezgo"} title={"Lezgo"} >Lezgo</MenuButton>
                <MenuButton uri={"Lezgo"} title={"Lezgo"} >Lezgo</MenuButton>
                <MenuButton uri={"Lezgo"} title={"Lezgo"} >Lezgo</MenuButton>
            </Menu>
        </>
        )
};

