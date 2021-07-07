import React from 'react';
import MainInputButton from './MainInputButton';
import { mount } from 'enzyme';

describe('MainInputButton', () => {
    Date.now = jest.fn(() => 1482363367071);
    const onClick = jest.fn(() => 'Set new query');
    let className = 'className';
    let children = 'children';

    beforeEach(() => {
        className = 'className';
        children = 'children';
    })

    it('should call setNewQuery prop function', () => {
        const wrapper = mount(
            <MainInputButton
                onClick = {onClick}
            >
                {children}
            </MainInputButton>
        );
        const button = wrapper.find('button');

        button.simulate('click');

        expect(onClick).toHaveBeenCalled();
    });

    it('should set attribs from props', () => {
        const wrapper = mount(
            <MainInputButton
                className = {className}
                onClick = {onClick}>
                {children}
            </MainInputButton>
        );

        expect(wrapper).toMatchSnapshot();
    });
});
