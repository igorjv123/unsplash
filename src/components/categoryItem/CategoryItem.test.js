import React from 'react';
import { CategoryItem } from "./CategoryItem";
import { render, mount } from 'enzyme';

describe('CategoryItem ', () => {
    const onClick = jest.fn();
    const categoryMock = {
        id: 'id',
        title: 'title',
        description: 'desc',
        preview_photos: [{urls: {
                small: 'www.default-link.com'
            }
        }]
    };

    beforeEach(function () {
        onClick.mockClear();
    });

   it('should render without crashing', () => {
      const wrapper = render(<CategoryItem onClick={onClick} item={categoryMock}/>);
      expect(wrapper).toMatchSnapshot();
   });

   it('should correctly handle onClick', () => {
       const wrapper = mount(<CategoryItem image={categoryMock} onClick={onClick}/>)

       wrapper.find('.category-item').simulate('click');

       expect(onClick).toHaveBeenCalled();
       expect(onClick).toHaveBeenCalledWith(categoryMock.id);
   });
});