import React from 'react'
import CommentBox from "components/CommentBox";
import { mount } from 'enzyme';
import Root from 'Root'

let wrapped;
beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentBox />
        </Root>)
})

it('has a textarea and btn', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
});


describe('the text area', () => {

    beforeEach(() => {
        //find textarea and simutlate change event
        wrapped.find('textarea').simulate('change', {
            target: { value: "a comment string" }
        });
        //force the comp to rerender and make sure the value prop has changed
        wrapped.update()
    })

    it('should let users type in the textarea', () => {
        //expectation to find our string in the textarea
        expect(wrapped.find('textarea').prop('value')).toEqual('a comment string')
    });

    it('should clear textarea on submit', () => {

        // simulate the form being submitted
        wrapped.find('form').simulate('submit');
        
        // force the comp to rerender after the form has submitted
        // and set the value of the text area 
        wrapped.update();

        // Now we can make the aseertion
        expect(wrapped.find('textarea').prop('value')).toEqual('')

    });

})

afterEach(() => {
    wrapped.unmount();
})
