import React from 'react';
import { ImageItem } from "./ImageItem";
import { mount } from 'enzyme';

describe('ImageItem ', () => {
    const searchByTag = jest.fn();
    const historyMock = {
        push: jest.fn(),
        goBack: jest.fn()
    }
    const imageMock = {
        alt_description: 'alt_description',
        description: 'description',
        user: {
            name: 'John Doe'
        },
        urls: {
            regular: 'www.link.some'
        },
        likes: 1,
        tags: [
            {
                title: 'tagName'
            },
            {
                title: 'tagName2'
            }
        ],
        links: {
            download: 'link.download'
        }
    };

    beforeEach(function () {
        searchByTag.mockClear();
        historyMock.push.mockClear();
        historyMock.goBack.mockClear();
    });

    it('should render without crashing', () => {
        const wrapper = mount(<ImageItem activeImage={imageMock} searchByTag={searchByTag} history={historyMock}/>);

        expect(wrapper).toMatchSnapshot();
    });

    it('should call searchByTag() and history.push() after tag click ', () =>{
        const wrapper = mount(<ImageItem activeImage={imageMock} searchByTag={searchByTag} history={historyMock}/>)

        const tags = wrapper.find('.image-tags__item')
        tags.forEach((tag) => {
            tag.simulate('click')
        });

        expect(searchByTag).toHaveBeenCalledTimes(tags.length);
        expect(historyMock.push).toHaveBeenCalledTimes(tags.length);
    });

    it('should call history.goBack() on burron "back" click', () => {
        const wrapper = mount(<ImageItem activeImage={imageMock} searchByTag={searchByTag} history={historyMock}/>)

        const backButton = wrapper.find('.back-button')
        backButton.simulate('click');

        expect(historyMock.goBack).toHaveBeenCalled();
    })
});