import React from 'react';
import { Card } from "./Card";
import { render,mount } from 'enzyme';



describe('Card ', () => {
    const onClick = jest.fn();
    const imageMock = {
        alt_description: 'Alt Desc',
        id: 123,
        urls:{
            regular: 'somePng.jpg',
        }
    };

    beforeEach(function () {
        onClick.mockClear()
    });

   it('should render correctly', () => {
      const wrapper = render(<Card image={imageMock} onClick={onClick}/>);
      expect(wrapper).toMatchSnapshot();
   });

   it('should correctly handle onClick', () => {
       const wrapper = mount(<Card image={imageMock} onClick={onClick}/>)

       wrapper.find('.card').simulate('click');

       expect(onClick).toHaveBeenCalled();
       expect(onClick).toHaveBeenCalledWith(imageMock.id);
   });
});