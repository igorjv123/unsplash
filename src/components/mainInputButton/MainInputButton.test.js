import React from 'react';
import MainInputButton from './MainInputButton';
import { shallow } from 'enzyme';

describe('MainSearch', () => {
    const onClick = jest.fn(() => 'Set new query');
    let className = 'className';
    let children = 'children';

    beforeEach(() => {
        className = 'className';
        children = 'children';
    })

    it('should call setNewQuery prop function', () => {
        const wrapper = shallow(
            <MainInputButton
                onClick = {onClick}
            >
            </MainInputButton>
        );
        const input = wrapper.find('button')

        input.simulate('click');

        expect(onClick).toHaveBeenCalled();
    });

    it('should set attribs from props', () => {
        const wrapper = shallow(
            <MainInputButton
                className = {className}
                onClick = {onClick}>
                {children}
            </MainInputButton>
        );

        expect(wrapper).toMatchSnapshot();
    });
});
