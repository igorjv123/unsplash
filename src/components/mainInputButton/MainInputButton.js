import React from 'react';
import './style.sass';
import { string, func, object } from 'prop-types';

const MainInputButton = (props) => {
    return(
        <button className={props.className} onClick={props.onClick}>{props.children}</button>
    )
}

MainInputButton.propTypes = {
    className: string,
    onClick: func,
    children: string || func || object,
};

MainInputButton.defaultProps = {
    className: 'header-button',
    onClick: () => {},
    children: 'OK'
};

export default MainInputButton;
