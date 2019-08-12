import React from 'react';
import TextInput from './TextInput';
import { shallow, render } from 'enzyme';

describe('TextInput', () => {
    const onChangeFn = jest.fn(() => 'change');
    let placeholder = 'placeholder';
    let className = 'class';
    let value = 'val';

    beforeEach(() => {
        placeholder = 'placeholder';
        className = 'class';
        value = 'val';
    })

    it('should call onChange prop function', () => {
        const wrapper = shallow(<TextInput onChange={onChangeFn}/>);
        const input = wrapper.find('input')

        input.simulate('change');

        expect(onChangeFn).toHaveBeenCalled();
    });

    it('should set attribs from props', () => {
        const wrapper = render(<TextInput
            placeholder={placeholder}
            className={className}
            value={value}
        />);

        expect(wrapper).toMatchSnapshot();
    });
});
