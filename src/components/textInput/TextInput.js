import React from 'react';
import { string, func } from 'prop-types';

const TextInput = ({ value, onChange, placeholder, className }) => {
    return(
        <input
            tabIndex={0}
            type="text"
            className={className}
            defaultValue={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    )
};

TextInput.propTypes = {
    className: string,
    value: string,
    placeholder: string,
    onChange: func,
};

TextInput.defaultProps = {
    className: 'main-text-input',
    value: '',
    placeholder: '',
    onChange: () => {},
};

export default TextInput;