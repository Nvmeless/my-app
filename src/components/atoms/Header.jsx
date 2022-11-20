import React from 'react';


export const Header = (props) => {
    return (
        <h1 id='header'>Hello,<br/>{props?.username}<span style={{
            position: "relative",
            top: 10
        }}>{props?.icon}</span></h1>
    )
};

