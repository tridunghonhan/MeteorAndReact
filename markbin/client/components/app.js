import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';

export default (props) => {
    return(
        <div>
            <Header />
            {props.children}
        </div>
    );
}