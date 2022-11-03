import React from 'react';


export const Header = (props) => {
    return (
        <h1 id='header'>Hello,<br/>{props?.username}</h1>
    )
};

