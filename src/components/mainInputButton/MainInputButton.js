import React from 'react';
import './style.sass';
import { string, func, object } from 'prop-types';

const MainInputButton = (props) => {
    return(
        <button className={props.className} onClick={props.onClick}>{props.children}</button>
    )
}

MainInputButton.propTypes = {
    className: string.isRequired,
    onClick: func.isRequired,
    children: string || func || object,
};

MainInputButton.defaultProps = {
    className: 'mainSearch-button',
    onClick: () => {},
    children: 'OK'
};

export default MainInputButton;
