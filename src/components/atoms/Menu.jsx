import React from 'react';
import './index.css';

export default class Menu extends React.Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <nav>
                {this.props.children}
            </nav>
        )
      }
    }
