import React from 'react';

const TextInput = (props) => {
    const { value, onChange, placeholder, className } = props;
    return(
        <input type="text" className={className} defaultValue={value} placeholder={placeholder} onChange={onChange}/>
    )
};

export default TextInput;