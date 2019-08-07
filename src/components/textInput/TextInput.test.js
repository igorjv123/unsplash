import React from 'react';
import TextInput from './TextInput';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('TextInput', () => {
    const onChangeFn = jest.fn(()=>'change');

    it('should call onc Change prop function', () => {

        const wrapper = mount(<TextInput onChange={onChangeFn}/>);
        const input = wrapper.find('input')

        input.simulate('change');
        expect(onChangeFn).toHaveBeenCalled();
    });
})
