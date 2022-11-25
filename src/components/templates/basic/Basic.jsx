import React from 'react';
import { Header } from '../../atoms/Header';
import MenuBar from '../../atoms/MenuBar';
import { TextP } from '../../atoms/TextP';
import { MenuButton } from '../../atoms/MenuButton';
import './index.css'
import { Menu } from '../../molecules/Menu';
import { FcBiomass } from "react-icons/fc";
import { CiLemon, CiBacon, CiAvocado, CiApple } from "react-icons/ci";
import {Todo} from '../../molecules/Todo'
import GetterAxios from '../../molecules/GetterAxios';
import GetterRedux from '../../molecules/GetterRedux';
export const Basic = () => {
    return (
        <>
            <Header username="Jinn" icon={<FcBiomass/>}></Header>
            <GetterRedux></GetterRedux>
        </>
        )
};

