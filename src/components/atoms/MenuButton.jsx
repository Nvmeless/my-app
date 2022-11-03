import React from 'react';

export const MenuButton = (props, {title, uri}) => {
    console.log('uri : ', uri)
    return (
        <button>{props.children}</button>
    );
}