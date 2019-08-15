import React, {useState} from 'react';
import { MainSearch } from "./MainSearch";
import Enzyme, { mount, shallow, render} from 'enzyme';

describe('MainSearch ', () => {
    // const setStateMock = jest.fn();
    // let useStateSpy = jest.spyOn(React, 'useState')
    // useStateSpy.mockImplementation((init) => [init, setStateMock]);

    const mockSetState = jest.fn();
    //
    jest.mock('react', () => ({
        useState: initial => [initial, mockSetState]
    }));
    // useState = initial => [initial, mockSetState]

    let wrapper;
    const queryValueMock = 'query';
    const setNewQueryMock = jest.fn();
    const historyMock = {
        push: jest.fn()
    }

    beforeEach(function () {
        wrapper = shallow(<MainSearch setNewQuery={setNewQueryMock} history={historyMock} />);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render without crashing', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should call setNewQuery prop on search button click', () => {
        const button = wrapper.find('.btn-search')

        button.simulate('click');

        expect(setNewQueryMock).toHaveBeenCalled();
    });

    it('should call histoty.push() on categories click ', () =>{
        const tags = wrapper.find('.header__search-button')
        tags.last().simulate('click')

        expect(historyMock.push).toHaveBeenCalled()

    });

    it('should set query in state on input change ', () =>{
        wrapper = mount(<MainSearch setNewQuery={setNewQueryMock} history={historyMock} />);

        const input = wrapper.find('input')
        input.simulate('change', {target: {value: queryValueMock}});

        expect(mockSetState).toHaveBeenCalledWith(queryValueMock);
    });
});