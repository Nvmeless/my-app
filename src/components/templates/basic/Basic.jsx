import React from 'react';
import {Card}  from '../../atoms/Card/Card';
import './index.css'
import { CiLemon, CiBacon, CiAvocado, CiApple } from "react-icons/ci";
import Container from '../../atoms/Container/Container';

export const Basic = () => {
    return (
        <>
        
        <Card></Card>
        <Container backgroundColor="red">Hello</Container>
        </>
        )
};

